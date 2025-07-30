const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Sample data (replace with your database later)
const pageInfo = {
  _id: "1",
  name: "Your Name",
  role: "Full Stack Developer",
  heroImage: "/uploads/hero-image.jpg",
  backgroundInformation: "I'm a passionate developer with experience in modern web technologies...",
  profilePic: "/uploads/profile-pic.jpg",
  phoneNumber: "+1234567890",
  email: "your.email@example.com",
  address: "Your City, Country"
};

const experiences = [
  {
    _id: "1",
    jobTitle: "Senior Developer",
    company: "Tech Company",
    companyImage: "/uploads/company1.jpg",
    dateStarted: "2022-01-01",
    dateEnded: null,
    isCurrentlyWorkingHere: true,
    points: [
      "Developed modern web applications",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines"
    ],
    technologies: [
      { _id: "tech1", title: "React", image: "/uploads/react.png" },
      { _id: "tech2", title: "Node.js", image: "/uploads/nodejs.png" }
    ]
  }
];

const projects = [
  {
    _id: "1",
    title: "Portfolio Website",
    image: "/uploads/project1.jpg",
    summary: "A modern portfolio website built with Next.js and Express.js",
    technologies: [
      { _id: "tech1", title: "Next.js", image: "/uploads/nextjs.png" },
      { _id: "tech2", title: "Express.js", image: "/uploads/express.png" }
    ],
    linkToBuild: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio"
  }
];

const skills = [
  {
    _id: "1",
    title: "React",
    progress: 90,
    image: "/uploads/react.png"
  },
  {
    _id: "2",
    title: "Node.js",
    progress: 85,
    image: "/uploads/nodejs.png"
  },
  {
    _id: "3",
    title: "TypeScript",
    progress: 80,
    image: "/uploads/typescript.png"
  }
];

const socials = [
  {
    _id: "1",
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile"
  },
  {
    _id: "2",
    title: "GitHub",
    url: "https://github.com/yourusername"
  },
  {
    _id: "3",
    title: "Twitter",
    url: "https://twitter.com/yourusername"
  }
];

// Routes
app.get('/api/pageInfo', (req, res) => {
  res.json({ pageInfo });
});

app.get('/api/experience', (req, res) => {
  res.json({ experiences });
});

app.get('/api/projects', (req, res) => {
  res.json({ projects });
});

app.get('/api/skills', (req, res) => {
  res.json({ skills });
});

app.get('/api/socials', (req, res) => {
  res.json({ socials });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express.js backend!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
