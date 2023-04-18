import { CarOffer } from "@/models/models";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.hyersv4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(connectionString);
  return client;
}

// General DB utils
export async function insertOffer(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}
export async function updateOffer(client, collection, offer, _id) {
  const db = client.db();
  await db.collection(collection).replaceOne({ _id: new ObjectId(_id) }, offer);
}
export async function getAllOffers(client, collection) {
  const db = client.db();
  const offers = await db.collection(collection).find().toArray();
  return offers;
}
export async function getOffersByRange(client, collection, obj) {
  const db = client.db();

  const offers: CarOffer[] = await db
    .collection(collection)
    .find({
      $and: [
        { brand: obj.brand || { $ne: "" } },
        { model: obj.model || { $ne: "" } },
        { fuel: obj.fuel || { $ne: "" } },
        { color: obj.color || { $ne: "" } },
        {
          year: {
            $gte: +obj.yearLowerLevel || 0,
            $lte:
              +obj.yearUpperLevel === 0
                ? new Date().getFullYear() + 50
                : +obj.yearUpperLevel,
          },
        },
        {
          mileage: {
            $gte: +obj.mileageLowerLevel === 0 ? 0 : +obj.mileageLowerLevel,
            $lte:
              +obj.mileageUpperLevel === 0 ? 10000000 : +obj.mileageUpperLevel,
          },
        },
        {
          price: {
            $gte: +obj.priceLowerLevel === 0 ? 0 : +obj.priceLowerLevel,
            $lte: +obj.priceUpperLevel === 0 ? 10000000 : +obj.priceUpperLevel,
          },
        },
        {
          enginecapacity: {
            $gte:
              +obj.enginecapacityLowerLevel === 0
                ? 0
                : +obj.enginecapacityLowerLevel,
            $lte:
              +obj.enginecapacityUpperLevel === 0
                ? 20000
                : +obj.enginecapacityUpperLevel,
          },
        },
        {
          power: {
            $gte: +obj.powerLowerLevel === 0 ? 0 : +obj.powerLowerLevel,
            $lte: +obj.powerUpperLevel === 0 ? 20000 : +obj.powerUpperLevel,
          },
        },
      ],
    })
    .skip(+obj.min)
    .limit(+obj.max)
    .toArray();

  const count = await db
    .collection(collection)
    .find({
      $and: [
        { brand: obj.brand || { $ne: "" } },
        { model: obj.model || { $ne: "" } },
        { fuel: obj.fuel || { $ne: "" } },
        { color: obj.color || { $ne: "" } },
        {
          year: {
            $gte: +obj.yearLowerLevel || 0,
            $lte:
              +obj.yearUpperLevel === 0
                ? new Date().getFullYear() + 50
                : +obj.yearUpperLevel,
          },
        },
        {
          mileage: {
            $gte: +obj.mileageLowerLevel === 0 ? 0 : +obj.mileageLowerLevel,
            $lte:
              +obj.mileageUpperLevel === 0 ? 10000000 : +obj.mileageUpperLevel,
          },
        },
        {
          price: {
            $gte: +obj.priceLowerLevel === 0 ? 0 : +obj.priceLowerLevel,
            $lte: +obj.priceUpperLevel === 0 ? 10000000 : +obj.priceUpperLevel,
          },
        },
        {
          enginecapacity: {
            $gte:
              +obj.enginecapacityLowerLevel === 0
                ? 0
                : +obj.enginecapacityLowerLevel,
            $lte:
              +obj.enginecapacityUpperLevel === 0
                ? 20000
                : +obj.enginecapacityUpperLevel,
          },
        },
        {
          power: {
            $gte: +obj.powerLowerLevel === 0 ? 0 : +obj.powerLowerLevel,
            $lte: +obj.powerUpperLevel === 0 ? 20000 : +obj.powerUpperLevel,
          },
        },
      ],
    })
    .count();

  return { offers: offers, count: count };
}
export async function getLatestOffers(client, collection, limit) {
  const db = client.db();
  const offers = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .limit(limit)
    .toArray();
  return offers;
}
export async function getOffersCount(client, collection) {
  const db = client.db();
  const count = await db.collection(collection).count();
  return count;
}
export async function deleteOffer(client, collection, id) {
  const db = client.db();
  await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
}

// User specific DB utils
export async function insertOfferToUser(client, collection, userEmail, offer) {
  const db = client.db();
  const result = await db
    .collection(collection)
    .updateOne({ email: userEmail }, { $push: { offers: offer } });
  return result;
}
export async function getUserOffers(client, collection, email) {
  const db = client.db();
  const user = await db.collection(collection).findOne({ email: email });
  return user.offers;
}
export async function updateUserOffer(client, collection, email, offer, _id) {
  const db = client.db();
  const offers = await getUserOffers(client, collection, email);
  const offerToChangeIndex = offers.findIndex(
    (offer) => offer._id.toString() === _id
  );

  const update = await db.collection(collection).updateOne(
    { email: email },
    {
      $set: {
        ["offers." + offerToChangeIndex]: offer,
      },
    }
  );
}
export async function deleteUserOffer(client, collection, userEmail, id) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .updateOne(
      { email: userEmail },
      { $pull: { offers: { _id: new ObjectId(id) } } }
    );
}
export async function updateMessages(client, collection, userEmail, message) {
  const db = client.db();
  await db
    .collection(collection)
    .updateOne({ email: userEmail }, { $push: { messages: message } });
}
export async function getUserMessages(client, collection, userEmail, limit) {
  const db = client.db();
  const messages = await db
    .collection(collection)
    .findOne({ email: userEmail });

  return messages.messages.slice(-limit);
}
export async function deleteMessage(client, collection, userEmail, id) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .updateOne({ email: userEmail }, { $pull: { messages: { id: id } } });
}

// User Settings
export async function deleteUser(client, collection, email) {
  const db = client.db();
  await db.collection(collection).deleteOne({ email: email });
  await db.collection("offers").deleteMany({ email: email });
}
export async function updateUserPassword(
  client,
  collection,
  email,
  newPassword
) {
  const db = client.db();
  await db
    .collection(collection)
    .updateOne({ email: email }, { $set: { password: newPassword } });
}
export async function updateUserName(client, collection, email, newName) {
  const db = client.db();
  await db
    .collection(collection)
    .updateOne({ email: email }, { $set: { name: newName } });
  await db
    .collection("offers")
    .updateMany({ email: email }, { $set: { name: newName } });
}
export async function updateUserPhone(client, collection, email, newPhone) {
  const db = client.db();
  await db
    .collection(collection)
    .updateOne({ email: email }, { $set: { phone: newPhone } });
  await db
    .collection("offers")
    .updateMany({ email: email }, { $set: { phone: newPhone } });
}
