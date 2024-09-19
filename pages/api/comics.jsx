import clientPromise from '@/lib/mongodb';
export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(); // Use your actual database name
    const comicsCollection = db.collection('useditems');

    // Fetch up to 10 comics from the database
    const comics = await comicsCollection.find({}).limit(10).toArray();

    res.status(200).json(comics);
  } catch (error) {
    console.error('Error fetching comics:', error);
    res.status(500).json({ error: 'Failed to fetch comics' });
  }
}
