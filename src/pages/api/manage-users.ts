import { connectDatabase } from "@/utils/db-utils";

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
    const { email, password, phone, offers } = data;

    const db = client.db();
    if (!email || !email.includes("@")) {
      res.status(422).json({
        message: "Incorrect Email.",
      });
      return;
    }
    if (!password || password.trim().length < 6) {
      res.status(422).json({
        message:
          "Invalid input, password should be at least 6 characters long.",
      });
      return;
    }
    if (phone.length < 9) {
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

    const result = await db.collection("users").insertOne({
      email: email,
      password: password,
      phone: phone,
      offers: offers,
    });
    res.status(201).json({
      message: "Created user!",
      user: { email: email, password: password, phone: phone },
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
    if (user.password !== password) {
      res.status(403).json({ message: "Invalid Password!" });
      client.close();
      return;
    }
    if (user.password === password) {
      res.status(200).json({
        message: "Logged In",
        user: { email: email, phone: user.phone, id: user._id },
      });
      client.close();
    }
  }
}

export default handler;
