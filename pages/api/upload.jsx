import clientPromise from '../../lib/mongodb';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired limit (e.g., 10mb)
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { itemTitle, itemImage,itemDescription,itemPrice } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db();

      // Insert the meme into the database
      await db.collection('useditems').insertOne({
        title: itemTitle,
        image: itemImage,
        description: itemDescription,
        price:itemPrice,
        uploadedAt: new Date(),
      });

      res.status(201).json({ message: 'Item uploaded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
