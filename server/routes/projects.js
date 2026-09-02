const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Static project data (fallback)
const projects = require('../data/projectsData');

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let data = projects;
    if (category && category !== 'all') {
      data = projects.filter(p => p.category === category);
    }
    res.json({ success: true, data, total: data.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/projects/:id
router.get('/:id', async (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
  res.json({ success: true, data: project });
});

module.exports = router;
