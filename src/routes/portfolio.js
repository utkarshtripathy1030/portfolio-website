const express = require('express');
const router = express.Router();

// Portfolio data
const portfolioData = {
  name: "Utkarsh Tripathy",
  title: "Full Stack Developer",
  bio: "Building beautiful and functional web experiences",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};

// GET portfolio info
router.get('/', (req, res) => {
  res.json(portfolioData);
});

// GET portfolio info by field
router.get('/:field', (req, res) => {
  const field = req.params.field;
  if (portfolioData[field]) {
    res.json({ [field]: portfolioData[field] });
  } else {
    res.status(404).json({ error: 'Field not found' });
  }
});

// UPDATE portfolio info (add authentication in production)
router.put('/:field', (req, res) => {
  const field = req.params.field;
  const value = req.body.value;
  
  if (portfolioData.hasOwnProperty(field)) {
    portfolioData[field] = value;
    res.json({ success: true, message: `${field} updated`, data: portfolioData });
  } else {
    res.status(404).json({ error: 'Field not found' });
  }
});

module.exports = router;
