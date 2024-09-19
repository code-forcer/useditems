// pages/api/transactions.js
import { connectToDatabase } from '../../lib/mongodb'; // Assuming you have this function to connect to MongoDB

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, address, matricNumber, phoneNumber, itemId, price, dispatchRider, transactionReference } = req.body;

    if (!name || !email || !address || !matricNumber || !phoneNumber || !transactionReference) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Insert transaction data into a 'transactions' collection
      const result = await db.collection('transactions').insertOne({
        name,
        email,
        address,
        matricNumber,
        phoneNumber,
        itemId,
        price,
        dispatchRider,
        transactionReference,
        createdAt: new Date(),
      });

      return res.status(201).json({ success: true, message: 'Transaction saved successfully', transactionId: result.insertedId });
    } catch (error) {
      console.error('Error saving transaction:', error);
      return res.status(500).json({ error: 'Failed to save transaction' });
    }
  } else {
    // If not POST request, return 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
