import clientPromise from '@/lib/mongodb'; // Assuming MongoDB client is already set up
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired limit (e.g., 10mb)
    },
  },
};
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, matricNumber, phoneNumber, ninDocument, profileImage } = req.body;

  // Validate the incoming data
  if (!name || !matricNumber || !phoneNumber || !ninDocument || !profileImage) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    // Save KYC data to the database
    const result = await db.collection('kyc').insertOne({
      name,
      matricNumber,
      phoneNumber,
      ninDocument,
      profileImage,
      submittedAt: new Date(),
    });

    res.status(201).json({ message: 'KYC Verification submitted successfully!', data: result.ops[0] });
  } catch (error) {
    console.error('Error saving KYC data:', error);
    res.status(500).json({ message: 'Error submitting KYC.' });
  }
}
