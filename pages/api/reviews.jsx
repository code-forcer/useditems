// pages/api/reviews.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { reviewText, rating, itemId } = req.body;

    if (!itemId) {
      return res.status(400).json({ error: 'Item ID is required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db();

      await db.collection('reviews').insertOne({
        text: reviewText,
        rating,
        itemId, // Store the associated itemId
        submittedAt: new Date(),
      });

      res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    const { itemId } = req.query;

    if (!itemId) {
      return res.status(400).json({ error: 'Item ID is required' });
    }

    try {
      const client = await clientPromise;
      const db = client.db();
      const reviews = await db.collection('reviews').find({ itemId }).toArray(); // Filter reviews by itemId

      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
