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
export async function getOffersByRange(client, collection, min, max) {
  const db = client.db();
  const offers = await db
    .collection(collection)
    .find()
    .skip(+min)
    .limit(+max)
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
