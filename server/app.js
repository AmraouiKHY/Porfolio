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
  name: "Khireddine Amraoui",
  role: "AI and Data Science Engineer",
  heroImage: "/uploads/profile-pic.JPG",
  backgroundInformation: "AI and Data Science engineering graduate with expertise in machine learning, deep learning, and natural language processing. Skilled in building secure, scalable AI systems, including multi-agent architectures and LLM-driven automation. Experienced in developing predictive models, NLP pipelines, and computer vision solutions for real-world applications.",
  profilePic: "/uploads/profile-pic.JPG",
  phoneNumber: "+213791351008 / +213541700084",
  email: "amraouikhireddine@gmail.com",
  address: "Bejaia, Algeria"
};

const experiences = [
  {
    _id: "1",
    jobTitle: "AI Engineer",
    company: "Kabas (Hybrid)",
    companyImage: "/uploads/kabas.png",
    dateStarted: "2025-02-02",
    dateEnded: "2025-06-12",
    isCurrentlyWorkingHere: false,
    points: [
      "Designed and implemented a secure, modular multi-agent system to automate end-to-end data science workflows",
      "Utilized LangGraph, FastAPI, and local fine-tuned LLMs to orchestrate data preprocessing, analytics, and machine learning tasks",
      "Developed a sandboxed secure code execution environment, ensuring trust, privacy, and reproducibility in LLM-driven processes",
      "Evaluated the system on real-world datasets, including loan prediction and housing price analysis",
      "Integrated prompt-based orchestration and agent autonomy within a microservices architecture"
    ],
    technologies: [
      { _id: "tech1", title: "LangGraph", image: "/uploads/langgraph.png" },
      { _id: "tech2", title: "FastAPI", image: "/uploads/fastapi.png" },
      { _id: "tech3", title: "Python", image: "/uploads/python.png" },
      { _id: "tech4", title: "LLMs", image: "/uploads/llm.png" }
    ]
  },
  {
    _id: "2", 
    jobTitle: "Machine Learning and Deep Learning Engineer Intern",
    company: "Cerist (Hybrid)",
    companyImage: "/uploads/cerist.png",
    dateStarted: "2024-07-12",
    dateEnded: "2024-10-03",
    isCurrentlyWorkingHere: false,
    points: [
      "Developed and deployed a multi-platform content scraper for social media platforms (Facebook) and journalism websites",
      "Designed and implemented a Transformer-based model to classify images as forest fire-related or not",
      "Built a Natural Language Processing (NLP) model for sentiment analysis of social media posts and comments",
      "Leveraged LLama to extract valuable information from social media content, enhancing disaster data analytics",
      "Created a comprehensive platform to visualize forest fires across Algeria using aggregated social media and journalistic data"
    ],
    technologies: [
      { _id: "tech5", title: "Transformers", image: "/uploads/transformers.png" },
      { _id: "tech6", title: "NLP", image: "/uploads/nlp.png" },
      { _id: "tech7", title: "LLama", image: "/uploads/llama.png" },
      { _id: "tech8", title: "Python", image: "/uploads/python.png" }
    ]
  },
  {
    _id: "3",
    jobTitle: "Data Science & Business Analytics Intern",
    company: "The Sparks Foundation (Remote)",
    companyImage: "/uploads/sparks.png",
    dateStarted: "2024-06-01",
    dateEnded: "2024-06-21",
    isCurrentlyWorkingHere: false,
    points: [
      "Developed a linear regression model to predict student performance and used k-means clustering to analyze Iris dataset clusters",
      "Conducted Exploratory Data Analysis (EDA) on retail, terrorism, and sports datasets",
      "Built a decision tree classifier and a hybrid stock market prediction model combining numerical stock data with sentiment analysis",
      "Gained expertise in data preprocessing, visualization, and feature extraction using Python, pandas, and matplotlib"
    ],
    technologies: [
      { _id: "tech9", title: "Pandas", image: "/uploads/pandas.png" },
      { _id: "tech10", title: "Matplotlib", image: "/uploads/matplotlib.png" },
      { _id: "tech11", title: "Scikit-learn", image: "/uploads/sklearn.png" },
      { _id: "tech12", title: "Python", image: "/uploads/python.png" }
    ]
  }
];

const projects = [
  {
    _id: "1",
    title: "Reinforcement Learning for Ramp Metering",
    image: "/uploads/rl-traffic.png",
    summary: "Training Q-learning and Deep Q-learning on a SUMO network to optimize traffic flow on highways and ramps with and without traffic lights.",
    technologies: [
      { _id: "tech1", title: "Python", image: "/uploads/python.png" },
      { _id: "tech2", title: "Reinforcement Learning", image: "/uploads/rl.png" },
      { _id: "tech3", title: "SUMO", image: "/uploads/sumo.png" },
      { _id: "tech4", title: "Deep Q-Learning", image: "/uploads/dql.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "2",
    title: "Arabic and English Sign Languages Recognition",
    image: "/uploads/sign-language.png",
    summary: "Built a deep learning-based image classification model to recognize hand signs in both Arabic and English using convolutional neural networks (CNNs).",
    technologies: [
      { _id: "tech5", title: "TensorFlow", image: "/uploads/tensorflow.png" },
      { _id: "tech6", title: "CNN", image: "/uploads/cnn.png" },
      { _id: "tech7", title: "Computer Vision", image: "/uploads/cv.png" },
      { _id: "tech8", title: "Python", image: "/uploads/python.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "3",
    title: "Multi-Agent System for Data Science Automation",
    image: "/uploads/multi-agent.png",
    summary: "Secure, modular multi-agent system using LangGraph and FastAPI to automate end-to-end data science workflows with LLM-driven orchestration.",
    technologies: [
      { _id: "tech9", title: "LangGraph", image: "/uploads/langgraph.png" },
      { _id: "tech10", title: "FastAPI", image: "/uploads/fastapi.png" },
      { _id: "tech11", title: "LLMs", image: "/uploads/llm.png" },
      { _id: "tech12", title: "Microservices", image: "/uploads/microservices.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "4",
    title: "Forest Fire Detection Platform",
    image: "/uploads/forest-fire.png",
    summary: "Multi-platform content scraper and Transformer-based image classification system for real-time forest fire detection and monitoring across Algeria.",
    technologies: [
      { _id: "tech13", title: "Transformers", image: "/uploads/transformers.png" },
      { _id: "tech14", title: "NLP", image: "/uploads/nlp.png" },
      { _id: "tech15", title: "Web Scraping", image: "/uploads/scraping.png" },
      { _id: "tech16", title: "Data Visualization", image: "/uploads/visualization.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "5",
    title: "J'reside - University Residence Management",
    image: "/uploads/jreside.png",
    summary: "Mobile application developed with Flutter for university residence management, facilitating communication between administrators and residents.",
    technologies: [
      { _id: "tech17", title: "Flutter", image: "/uploads/flutter.png" },
      { _id: "tech18", title: "Dart", image: "/uploads/dart.png" },
      { _id: "tech19", title: "Mobile Development", image: "/uploads/mobile.png" },
      { _id: "tech20", title: "Firebase", image: "/uploads/firebase.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "6",
    title: "Money Lions Fraud Detection",
    image: "/uploads/fraud-detection.jpg",
    summary: "Machine learning model to detect fraudulent transactions using advanced classification algorithms and oversampling techniques to handle class imbalances.",
    technologies: [
      { _id: "tech21", title: "Machine Learning", image: "/uploads/ml.png" },
      { _id: "tech22", title: "Classification", image: "/uploads/classification.png" },
      { _id: "tech23", title: "Python", image: "/uploads/python.png" },
      { _id: "tech24", title: "Scikit-learn", image: "/uploads/sklearn.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  }
];

const skills = [
  {
    _id: "1",
    title: "Python",
    progress: 95,
    image: "/uploads/python.png"
  },
  {
    _id: "2",
    title: "Machine Learning",
    progress: 90,
    image: "/uploads/ml.png"
  },
  {
    _id: "3",
    title: "Deep Learning",
    progress: 85,
    image: "/uploads/dl.png"
  },
  {
    _id: "4",
    title: "TensorFlow",
    progress: 85,
    image: "/uploads/tensorflow.png"
  },
  {
    _id: "5",
    title: "PyTorch",
    progress: 80,
    image: "/uploads/pytorch.png"
  },
  {
    _id: "6",
    title: "NLP",
    progress: 85,
    image: "/uploads/nlp.png"
  },
  {
    _id: "7",
    title: "Computer Vision",
    progress: 80,
    image: "/uploads/cv.png"
  },
  {
    _id: "8",
    title: "Reinforcement Learning",
    progress: 75,
    image: "/uploads/rl.png"
  },
  {
    _id: "9",
    title: "LLMs",
    progress: 85,
    image: "/uploads/llm.png"
  },
  {
    _id: "10",
    title: "FastAPI",
    progress: 80,
    image: "/uploads/fastapi.png"
  },
  {
    _id: "11",
    title: "Flask",
    progress: 75,
    image: "/uploads/flask.png"
  },
  {
    _id: "12",
    title: "JavaScript",
    progress: 75,
    image: "/uploads/javascript.png"
  },
  {
    _id: "13",
    title: "ReactJS",
    progress: 70,
    image: "/uploads/react.png"
  },
  {
    _id: "14",
    title: "Next.js",
    progress: 70,
    image: "/uploads/nextjs.png"
  },
  {
    _id: "15",
    title: "SQL",
    progress: 85,
    image: "/uploads/sql.png"
  },
  {
    _id: "16",
    title: "Docker",
    progress: 75,
    image: "/uploads/docker.png"
  },
  {
    _id: "17",
    title: "Git/GitHub",
    progress: 90,
    image: "/uploads/git.png"
  },
  {
    _id: "18",
    title: "Power BI",
    progress: 70,
    image: "/uploads/powerbi.png"
  },
  {
    _id: "19",
    title: "LangGraph",
    progress: 80,
    image: "/uploads/langgraph.png"
  },
  {
    _id: "20",
    title: "MLOps",
    progress: 75,
    image: "/uploads/mlops.png"
  }
];

const socials = [
  {
    _id: "1",
    title: "LinkedIn",
    url: "https://linkedin.com/in/khireddine-amraoui"
  },
  {
    _id: "2",
    title: "GitHub",
    url: "https://github.com/AmraouiKHY"
  },
  {
    _id: "3",
    title: "Email",
    url: "mailto:amraouikhireddine@gmail.com"
  },
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
