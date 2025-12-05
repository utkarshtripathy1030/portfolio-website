const express = require('express');
const router = express.Router();

// Sample project data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Describe your first project",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com",
    image: "/images/project1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Project Two",
    description: "Describe your second project",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://github.com",
    image: "/images/project2.jpg",
    featured: true
  }
];

// GET all projects
router.get('/', (req, res) => {
  res.json({
    total: projects.length,
    projects: projects
  });
});

// GET featured projects only
router.get('/featured', (req, res) => {
  const featured = projects.filter(p => p.featured);
  res.json({
    total: featured.length,
    projects: featured
  });
});

// GET single project
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  res.json(project);
});

// POST new project (for admin)
router.post('/', (req, res) => {
  const { title, description, technologies, link, image } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  
  const newProject = {
    id: projects.length + 1,
    title,
    description,
    technologies: technologies || [],
    link: link || '',
    image: image || '',
    featured: false
  };
  
  projects.push(newProject);
  res.status(201).json({ success: true, data: newProject });
});

module.exports = router;
