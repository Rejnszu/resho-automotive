import {
  connectDatabase,
  deleteMessage,
  getUserMessages,
  updateMessages,
} from "@/utils/db-utils";
async function handler(req, res) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
    return;
  }
  if (req.method === "PUT") {
    const { userEmail, message } = req.body;

    try {
      await updateMessages(client, "messages", userEmail, message);
    } catch (error) {
      res.status(500).json({ message: "Couldn't update messages!" });
      client.close();
      return;
    }
    res.status(201).json({ message: "Message sent to server!" });
    client.close();
  }
  if (req.method === "GET") {
    const { userEmail, limit } = req.query;

    let userMessages;
    try {
      userMessages = await getUserMessages(
        client,
        "messages",
        userEmail,
        limit
      );
    } catch (error) {
      res.status(500).json({ message: "Couldn't update messages!" });
      client.close();
      return;
    }
    res.status(201).json({
      message: `Messages fetched! for ${userEmail}`,
      messages: userMessages,
    });

    client.close();
  }

  if (req.method === "DELETE") {
    const { userEmail, id } = req.body;

    try {
      await deleteMessage(client, "messages", userEmail, id);
    } catch (error) {
      res.status(500).json({ message: "Couldn't delete message!" });
      client.close();
      return;
    }
    res.status(201).json({ message: "Message was deleted!" });
    client.close();
  }
}
export default handler;
