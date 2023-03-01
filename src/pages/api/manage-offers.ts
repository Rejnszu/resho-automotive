import { MongoClient } from "mongodb";
import {
  connectDatabase,
  insertOffer,
  getAllOffers,
  deleteOffer,
  insertOfferToUser,
  deleteUserOffer,
  getUserOffers,
} from "@/utils/db-utils";

async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
    return;
  }
  if (req.method === "POST") {
    const offer = req.body;
    const {
      title,
      images,
      description,
      model,
      power,
      mileage,
      year,
      engine,
      price,
      email,
    } = offer;
    if (
      title.trim().length === 0 ||
      images.length === 0 ||
      description.trim().length === 0 ||
      model.trim().length === 0 ||
      power === 0 ||
      power === undefined ||
      mileage === 0 ||
      mileage === undefined ||
      year === 0 ||
      year === undefined ||
      engine.trim().length === 0 ||
      price === 0 ||
      price === undefined
    ) {
      res.status(422).json({ message: "One of fields is empty." });
      return;
    }

    try {
      await insertOffer(client, "offers", offer);
      await insertOfferToUser(client, "users", email, offer);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      client.close();
      return;
    }

    res
      .status(201)
      .json({ message: "Offer was added succesfully!", offer: offer });
  } else if (req.method === "GET") {
    let offers;
    let { email } = req.query;

    try {
      offers = await getUserOffers(client, "users", email);
      res.status(201).json({ message: "Offers Loaded", offers: offers });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  } else if (req.method === "PUT") {
    const { email, id } = req.body;

    try {
      await deleteOffer(client, "offers", id);
      await deleteUserOffer(client, "users", email, id);
      res.status(201).json({ message: "Offer Deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
  setTimeout(() => client.close(), 1500);
}

export default handler;
