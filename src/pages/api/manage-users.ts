import { hashPassword, verifyPassword } from "@/utils/auth";
import {
  connectDatabase,
  deleteUser,
  updateUserName,
  updateUserPassword,
  updateUserPhone,
} from "@/utils/db-utils";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
    return;
  }
  if (req.method === "POST") {
    const data = req.body;
    const { email, name, password, phone, offers } = data;

    const db = client.db();
    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Incorrect Email.",
      });
      return;
    } else if (!name || name.trim().length === 0) {
      res.status(422).json({
        message: "Empty name field.",
      });
      return;
    } else if (!password || password.trim().length < 6) {
      res.status(422).json({
        message:
          "Invalid input, password should be at least 6 characters long.",
      });
      return;
    } else if (phone.length < 9) {
      res.status(422).json({
        message: "Incorrect Phone Number.",
      });
      return;
    }
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: "User exist already" });
      client.close();
      return;
    }
    const hashedPassword = await hashPassword(password);
    await db.collection("users").insertOne({
      email: email,
      name: name,
      password: hashedPassword,
      phone: phone,
      offers: offers,
    });
    await db.collection("messages").insertOne({ email: email, messages: [] });
    res.status(201).json({
      message: "Created user!",
    });
    client.close();
  }
  if (req.method === "PUT") {
    const data = req.body;
    const { email, password } = data;
    const db = client.db();
    const user = await db.collection("users").findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "User doesnt exist" });
      client.close();
      return;
    }
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      res.status(403).json({ message: "Invalid Password!" });
      client.close();
      return;
    } else {
      res.status(200).json({
        message: "Logged In",
        user: {
          email: email,
          phone: user.phone,
          id: user._id,
          name: user.name,
        },
      });
      client.close();
    }
  }
  if (req.method === "GET") {
    let { id } = req.query;
    const db = client.db();
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      res.status(404).json({ message: "User doesnt exist" });
      client.close();
      return;
    } else {
      res.status(201).json({
        message: "User found!",
        user: {
          email: user.email,
          phone: user.phone,
          id: user._id,
          name: user.name,
        },
      });
      client.close();
    }
  }
  if (req.method === "DELETE") {
    const { email, password } = req.query;

    const db = client.db();
    const user = await db.collection("users").findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "User doesnt exist" });
      client.close();
      return;
    }
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      res.status(403).json({ message: "Invalid Password!" });
      client.close();
      return;
    } else {
      await deleteUser(client, "users", email);
      res.status(200).json({
        message: "User Deleted",
      });
      client.close();
    }
  }
  if (req.method === "PATCH") {
    const {
      email,
      phone: newPhone,
      name: newName,
      password: newPassword,
      confirmPassword,
    } = req.body;

    const db = client.db();
    const user = await db.collection("users").findOne({ email: email });

    if (!user) {
      res.status(404).json({ message: "User doesnt exist" });
      client.close();
      return;
    }
    const isValid = await verifyPassword(confirmPassword, user.password);

    if (!isValid) {
      res.status(403).json({ message: "Invalid Password!" });
      client.close();
      return;
    } else {
      if (newPassword.trim() !== "" && newPassword.length >= 6) {
        const hashedPassword = await hashPassword(newPassword);
        await updateUserPassword(client, "users", email, hashedPassword);
      }
      if (newPhone !== undefined && newPhone.toString().length >= 9) {
        await updateUserPhone(client, "users", email, newPhone);
      }
      if (newName.trim() !== "") {
        await updateUserName(client, "users", email, newName);
      }
      res.status(200).json({
        message: "User Updated",
        user: {
          email: email,
          phone: newPhone,
          id: user._id,
          name: newName,
        },
      });
      client.close();
    }
  }
}

export default handler;
