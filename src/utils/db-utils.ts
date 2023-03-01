import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.hyersv4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(connectionString);
  return client;
}
export async function insertOffer(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}
export async function insertOfferToUser(client, collection, userEmail, offer) {
  const db = client.db();
  const result = await db
    .collection(collection)
    .updateOne({ email: userEmail }, { $push: { offers: offer } });
  return result;
}
export async function getAllOffers(client, collection) {
  const db = client.db();
  const documents = await db.collection(collection).find().toArray();
  return documents;
}
export async function getUserOffers(client, collection, email) {
  const db = client.db();
  const user = await db.collection(collection).findOne({ email: email });
  return user.offers;
}
export async function deleteOffer(client, collection, id) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .deleteOne({ _id: new ObjectId(id) });
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
