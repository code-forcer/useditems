import clientPromise from '../../../lib/mongodb';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired limit (e.g., 10mb)
    },
  },
};
export default async function handler(req, res) {
  const { method } = req;

  try {
    const client = await clientPromise;
    const db = client.db('test'); // Replace with your actual database name
    const adsCollection = db.collection('ads');

    if (method === 'POST') {
      try {
        const { title, description,contact, image } = req.body;

        if (!title || !description || !image) {
          return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Insert ad data into the database
        const newAd = {
          title,
          description,
          image, // Base64 image string
          contact,
          createdAt: new Date(),
        };

        await adsCollection.insertOne(newAd);

        return res.status(201).json({ success: true, data: newAd });
      } catch (error) {
        return res.status(500).json({ success: false, message: 'Failed to add ad' });
      }
    } else if (method === 'GET') {
      // Fetch all ads
      const ads = await adsCollection.find({}).toArray();
      return res.status(200).json({ success: true, data: ads });
    } else {
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Database connection error' });
  }
}
