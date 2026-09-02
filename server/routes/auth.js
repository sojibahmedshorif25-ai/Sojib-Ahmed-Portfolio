const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'sojib_portfolio_secret_2026';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('sojib@admin2026', 10);

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ success: false, message: 'Password required' });

    const isValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!isValid) return res.status(401).json({ success: false, message: 'Invalid password' });

    const token = jwt.sign(
      { role: 'admin', name: 'Sojib Ahmed' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ success: true, token, message: 'Admin authenticated' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Authentication failed' });
  }
});

module.exports = router;
