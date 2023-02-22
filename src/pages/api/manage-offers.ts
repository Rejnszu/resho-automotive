import { MongoClient } from "mongodb";
import {
  connectDatabase,
  insertOffer,
  getAllOffers,
  deleteOffer,
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
    const { title } = offer;
    if (title.trim().length === 0) {
      res.status(422).json({ message: "invalid title." });
      return;
    }

    try {
      await insertOffer(client, "offers", offer);
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

    try {
      offers = await getAllOffers(client, "offers");
      res.status(201).json({ message: "Offers Loaded", offers: offers });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  } else if (req.method === "PUT") {
    const id = req.body;

    try {
      deleteOffer(client, "offers", id);
      res.status(201).json({ message: "Offer Deleted", id: id });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
  setTimeout(() => client.close(), 1500);
}

export default handler;
