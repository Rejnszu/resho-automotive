import { MongoClient, ObjectId } from "mongodb";
import {
  connectDatabase,
  insertOffer,
  deleteOffer,
  insertOfferToUser,
  deleteUserOffer,
  getUserOffers,
  updateOffer,
  updateUserOffer,
  getOffersByRange,
  getOffersCount,
  getAllOffers,
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
      price,
      email,
      enginecapacity,
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
      price === 0 ||
      price === undefined ||
      enginecapacity === 0 ||
      enginecapacity === undefined
    ) {
      res.status(422).json({ message: "One of fields is empty." });
      return;
    }

    try {
      offer.power = +offer.power;
      offer.mileage = +offer.mileage;
      offer.year = +offer.year;
      offer.price = +offer.price;
      offer.enginecapacity = +offer.enginecapacity;
      
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
  } else if (req.method === "GET" && req.query.type === "user") {
    let offers;
    let { email } = req.query;

    try {
      offers = await getUserOffers(client, "users", email);
      res.status(201).json({ message: "Offers Loaded", offers: offers });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  } else if (req.method === "GET" && req.query.type === "range") {
    let { min, max, ...filterObj } = req.query;

    try {
      let { offers, count } = await getOffersByRange(client, "offers", {
        min,
        max,
        ...filterObj,
      });

      res
        .status(201)
        .json({ message: "Offers Loaded", offers: offers, count: count });
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  } else if (req.method === "GET" && req.query.type === "all") {
    let offers;

    try {
      offers = await getAllOffers(client, "offers");

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
  } else if (req.method === "PATCH") {
    const offer = req.body;
    const {
      title,
      images,
      description,
      model,
      power,
      mileage,
      year,
      price,
      email,
      phone,
      _id,
    } = offer;
    const newOffer = { ...offer, _id: new ObjectId(offer._id) };

    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      model.trim().length === 0 ||
      power === 0 ||
      power === undefined ||
      mileage === 0 ||
      mileage === undefined ||
      year === 0 ||
      year === undefined ||
      price === 0 ||
      price === undefined
    ) {
      res.status(422).json({ message: "One of fields is empty." });
      return;
    }

    try {
      await updateOffer(client, "offers", newOffer, _id);
      await updateUserOffer(client, "users", email, newOffer, _id);

      client.close();
    } catch (error) {
      res.status(500).json({ message: "Updating data failed!" });
      client.close();
      return;
    }

    res
      .status(201)
      .json({ message: "Offer was edited succesfully!", offer: offer });
  }
  setTimeout(() => client.close(), 1500);
}

export default handler;
