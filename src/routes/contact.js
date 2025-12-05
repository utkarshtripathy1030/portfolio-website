const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// In production, store messages in a database
const messages = [];

// POST contact form
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;
  
  // Store message (in production, save to database)
  const newMessage = {
    id: messages.length + 1,
    name,
    email,
    subject,
    message,
    timestamp: new Date()
  };
  
  messages.push(newMessage);
  
  // In production, send email here using nodemailer or similar
  console.log('New contact message:', newMessage);
  
  res.status(201).json({
    success: true,
    message: 'Message received! I will get back to you soon.',
    data: newMessage
  });
});

// GET all messages (for admin panel)
router.get('/', (req, res) => {
  res.json({
    total: messages.length,
    messages: messages
  });
});

module.exports = router;
