import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve team images statically
app.use('/team-images', express.static(path.join(__dirname, 'public', 'team-images')));

// Serve club gallery images statically from app/public directory
app.use('/club-gallery', express.static(path.join(__dirname, '..', 'app', 'public', 'club-gallery')));

// Serve event reports statically
app.use('/reports', express.static(path.join(__dirname, 'public', 'reports')));

// Read teams data from JSON file
const teamsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'teams.json'), 'utf8'));
const teams = teamsData.teams;

// Read core team data from JSON file
const coreTeamData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'core-team.json'), 'utf8'));
const coreTeam = coreTeamData.teamMembers;

// Read gallery data from JSON file
const galleryData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'Club Gallery.json'), 'utf8'));
const gallery = galleryData.gallery;

// Read blogs data from JSON file
const blogsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'blogs.json'), 'utf8'));
const blogs = blogsData.blogs;
const services = blogsData.services;

// Read events data from JSON file
const eventsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'events.json'), 'utf8'));
const events = eventsData.events;

// API Routes
app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/teams/:id', (req, res) => {
  const team = teams.find(t => t.id === parseInt(req.params.id));
  if (!team) return res.status(404).json({ message: 'Team not found' });
  res.json(team);
});

// Core Team API Route
app.get('/api/core-team', (req, res) => {
  res.json(coreTeam);
});

// Gallery API Routes
app.get('/api/gallery', (req, res) => {
  res.json(gallery);
});

app.get('/api/gallery/:id', (req, res) => {
  const image = gallery.find(g => g.id === parseInt(req.params.id));
  if (!image) return res.status(404).json({ message: 'Image not found' });
  res.json(image);
});

// Add new gallery image
app.post('/api/gallery', (req, res) => {
  const newImage = {
    id: gallery.length + 1,
    ...req.body
  };
  gallery.push(newImage);
  
  // Save to file
  fs.writeFileSync(
    path.join(__dirname, 'data', 'Club Gallery.json'),
    JSON.stringify({ gallery }, null, 2)
  );
  
  res.status(201).json(newImage);
});

// Delete gallery image
app.delete('/api/gallery/:id', (req, res) => {
  const imageId = parseInt(req.params.id);
  const imageIndex = gallery.findIndex(g => g.id === imageId);
  
  if (imageIndex === -1) {
    return res.status(404).json({ message: 'Image not found' });
  }
  
  gallery.splice(imageIndex, 1);
  
  // Save to file
  fs.writeFileSync(
    path.join(__dirname, 'data', 'Club Gallery.json'),
    JSON.stringify({ gallery }, null, 2)
  );
  
  res.json({ message: 'Image deleted successfully' });
});

// Blog API Routes
app.get('/api/blog/posts', (req, res) => {
  res.json(blogs);
});

app.get('/api/blog/posts/:id', (req, res) => {
  const post = blogs.find(b => b.id === req.params.id);
  if (!post) return res.status(404).json({ message: 'Blog post not found' });
  res.json(post);
});

app.get('/api/blog/services', (req, res) => {
  res.json(services);
});

// Add new blog post
app.post('/api/blog/posts', (req, res) => {
  const newPost = {
    id: (blogs.length + 1).toString(),
    ...req.body
  };
  blogs.push(newPost);
  
  // Save to file
  fs.writeFileSync(
    path.join(__dirname, 'data', 'blogs.json'),
    JSON.stringify({ blogs, services }, null, 2)
  );
  
  res.status(201).json(newPost);
});

// Delete blog post
app.delete('/api/blog/posts/:id', (req, res) => {
  const postId = req.params.id;
  const postIndex = blogs.findIndex(b => b.id === postId);
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Blog post not found' });
  }
  
  blogs.splice(postIndex, 1);
  
  // Save to file
  fs.writeFileSync(
    path.join(__dirname, 'data', 'blogs.json'),
    JSON.stringify({ blogs, services }, null, 2)
  );
  
  res.json({ message: 'Blog post deleted successfully' });
});

// Events API Routes
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json(event);
});

app.get('/api/events/:id/report', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  const reportPath = path.join(__dirname, 'public', event.report.path);
  
  // Check if file exists
  if (!fs.existsSync(reportPath)) {
    return res.status(404).json({ message: 'Report file not found' });
  }

  // Set headers for file download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${event.report.filename}"`);
  
  // Stream the file
  const fileStream = fs.createReadStream(reportPath);
  fileStream.pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 