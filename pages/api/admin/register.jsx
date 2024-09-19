// pages/api/auth/register.js
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

export default async function register(req, res) {
  await dbConnect();

  const { name, email, password, role } = req.body;

  // Validate the role
  if (!role || (role !== 'buyer' && role !== 'seller')) {
    return res.status(400).json({ message: 'Invalid role selected' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role, // Ensure role is saved here
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send a welcome email
    await sendWelcomeEmail(name, email);

    res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

// Function to send a welcome email
async function sendWelcomeEmail(name, email) {
  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or any email provider you are using
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: '"UsedItems.com.ng" <noreply@useditem.com>', // sender address
    to: email, // list of receivers
    subject: 'Welcome to UsedItem.com', // Subject line
    text: `Hello ${name}, welcome to UsedItem.com!`, // plain text body
    html: `<p>Hello ${name},</p><p>Welcome to UsedItems.com.ng! We are excited to have you on board.</p>`, // html body
  };

  // Send email
  await transporter.sendMail(mailOptions);
}
