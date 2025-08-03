const express = require('express');
const cors = require('cors');
const path = require('path');
const { summary } = require('framer-motion/client');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Sample data (replace with your database later)
const pageInfo = {
  _id: "1",
  name: "Khireddine Amraoui",
  role: "AI and Data Science Engineer",
  heroImage: "/images/profile-pic.JPG",
  backgroundInformation: "AI and Data Science engineering graduate with expertise in machine learning, deep learning, and natural language processing. Skilled in building secure, scalable AI systems, including multi-agent architectures and LLM-driven automation. Experienced in developing predictive models, NLP pipelines, and computer vision solutions for real-world applications.",
  profilePic: "/images/profile-pic.JPG",
  phoneNumber: "+213791351008 / +213541700084",
  email: "amraouikhireddine@gmail.com",
  address: "Boumerdes, Algeria"
};

const education = [
  {
    _id: "1",
    degree:"State Engineer in AI and Data Science",
    institution: "Ecole Supérieure en Sciences et Technologies de l’Informatique et du Numérique (ESTIN)",
    dateStarted:"2020-11-18",
    dateEnded: "2025-07-02",
    isCurrentlyStudying: false,
    description: "Pursuing a comprehensive education in AI and Data Science, focusing on machine learning, deep learning, and natural language processing. Engaged in hands-on projects and research to apply theoretical knowledge to practical challenges.",
    institutionLogo: "/images/estin.png",
    institutionWebsite: "https://estin.dz/"
  },
  {
    _id: "2",
    degree: "Master in Ai and Data Science",
    institution: "Ecole Supérieure en Sciences et Technologies de l’Informatique et du Numérique (ESTIN)",
    dateStarted: "2024-09-01",
    dateEnded: "2025-06-25",
    isCurrentlyStudying: false,
    description: "Advanced studies in AI and Data Science, focusing on cutting-edge technologies and methodologies. Engaged in research projects and collaborations to innovate in the field of AI.",
    institutionLogo: "/images/estin.png",
    institutionWebsite: "https://estin.dz/"
  }

]

const experiences = [
  {
    _id: "1",
    jobTitle: "AI Engineer",
    company: "Kabas (Hybrid)",
    companyImage: "/images/kabas.png",
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
      { _id: "tech1", title: "LangGraph", image: "/images/langgraph.png" },
      { _id: "tech2", title: "FastAPI", image: "/images/fastapi.png" },
      { _id: "tech3", title: "Python", image: "/images/python.png" },
      { _id: "tech4", title: "LLMs", image: "/images/llm.png" }
    ]
  },
  {
    _id: "2", 
    jobTitle: "Machine Learning and Deep Learning Engineer Intern",
    company: "Cerist (Hybrid)",
    companyImage: "/images/cerist.png",
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
      { _id: "tech5", title: "Transformers", image: "/images/transformers.png" },
      { _id: "tech6", title: "NLP", image: "/images/nlp.png" },
      { _id: "tech7", title: "LLama", image: "/images/llama.png" },
      { _id: "tech8", title: "Python", image: "/images/python.png" }
    ]
  },
  {
    _id: "3",
    jobTitle: "Data Science & Business Analytics Intern",
    company: "The Sparks Foundation (Remote)",
    companyImage: "/images/sparks.png",
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
      { _id: "tech9", title: "Pandas", image: "/images/pandas.png" },
      { _id: "tech10", title: "Matplotlib", image: "/images/matplotlib.png" },
      { _id: "tech11", title: "Scikit-learn", image: "/images/sklearn.png" },
      { _id: "tech12", title: "Python", image: "/images/python.png" }
    ]
  }
];

const projects = [
  {
    _id: "1",
    title: "Reinforcement Learning for Ramp Metering",
    image: "/images/rl-traffic.png",
    summary: "Training Q-learning and Deep Q-learning on a SUMO network to optimize traffic flow on highways and ramps with and without traffic lights.",
    technologies: [
      { _id: "tech1", title: "Python", image: "/images/python.png" },
      { _id: "tech2", title: "Reinforcement Learning", image: "/images/rl.png" },
      { _id: "tech3", title: "SUMO", image: "/images/sumo.png" },
      { _id: "tech4", title: "Deep Q-Learning", image: "/images/dql.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "2",
    title: "Arabic and English Sign Languages Recognition",
    image: "/images/sign-language.png",
    summary: "Built a deep learning-based image classification model to recognize hand signs in both Arabic and English using convolutional neural networks (CNNs).",
    technologies: [
      { _id: "tech5", title: "TensorFlow", image: "/images/tensorflow.png" },
      { _id: "tech6", title: "CNN", image: "/images/cnn.png" },
      { _id: "tech7", title: "Computer Vision", image: "/images/cv.png" },
      { _id: "tech8", title: "Python", image: "/images/python.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "3",
    title: "Multi-Agent System for Data Science Automation",
    image: "/images/multi-agent.png",
    summary: "Secure, modular multi-agent system using LangGraph and FastAPI to automate end-to-end data science workflows with LLM-driven orchestration.",
    technologies: [
      { _id: "tech9", title: "LangGraph", image: "/images/langgraph.png" },
      { _id: "tech10", title: "FastAPI", image: "/images/fastapi.png" },
      { _id: "tech11", title: "LLMs", image: "/images/llm.png" },
      { _id: "tech12", title: "Microservices", image: "/images/microservices.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "4",
    title: "Forest Fire Detection Platform",
    image: "/images/forest-fire.png",
    summary: "Multi-platform content scraper and Transformer-based image classification system for real-time forest fire detection and monitoring across Algeria.",
    technologies: [
      { _id: "tech13", title: "Transformers", image: "/images/transformers.png" },
      { _id: "tech14", title: "NLP", image: "/images/nlp.png" },
      { _id: "tech15", title: "Web Scraping", image: "/images/scraping.png" },
      { _id: "tech16", title: "Data Visualization", image: "/images/visualization.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "5",
    title: "J'reside - University Residence Management",
    image: "/images/jreside.png",
    summary: "Mobile application developed with Flutter for university residence management, facilitating communication between administrators and residents.",
    technologies: [
      { _id: "tech17", title: "Flutter", image: "/images/flutter.png" },
      { _id: "tech18", title: "Dart", image: "/images/dart.png" },
      { _id: "tech19", title: "Mobile Development", image: "/images/mobile.png" },
      { _id: "tech20", title: "Firebase", image: "/images/firebase.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id: "6",
    title: "Money Lions Fraud Detection",
    image: "/images/fraud-detection.png",
    summary: "Machine learning model to detect fraudulent transactions using advanced classification algorithms and oversampling techniques to handle class imbalances.",
    technologies: [
      { _id: "tech21", title: "Machine Learning", image: "/images/ml.png" },
      { _id: "tech22", title: "Classification", image: "/images/classification.png" },
      { _id: "tech23", title: "Python", image: "/images/python.png" },
      { _id: "tech24", title: "Scikit-learn", image: "/images/sklearn.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id:"7",
    title: "Guaspiless",
    image: "/images/guaspiless.png",
    summary: "university project ,A website that fights against food waste.a user can order shopping carts according to their needs and location.",
    technologies: [
      { _id: "tech25", title: "React", image: "/images/react.png" },
      { _id: "tech26", title: "Node.js", image: "/images/nodejs.png" },
      { _id: "tech27", title: "Tailwind CSS", image: "/images/tailwind.png" },
      { _id: "tech28", title: "MongoDB", image: "/images/mongodb.png" }
    ]
  }

];

const skills = [
  {
    _id: "1",
    title: "Python",
    progress: 95,
    image: "/images/python.png"
  },
  {
    _id: "2",
    title: "Machine Learning",
    progress: 90,
    image: "/images/ml.png"
  },
  {
    _id: "3",
    title: "Deep Learning",
    progress: 85,
    image: "/images/dl.png"
  },
  {
    _id: "4",
    title: "TensorFlow",
    progress: 85,
    image: "/images/tensorflow.png"
  },
  {
    _id: "5",
    title: "PyTorch",
    progress: 80,
    image: "/images/pytorch.png"
  },
  {
    _id: "6",
    title: "NLP",
    progress: 85,
    image: "/images/nlp.png"
  },
  {
    _id: "7",
    title: "Computer Vision",
    progress: 80,
    image: "/images/cv.png"
  },
  {
    _id: "8",
    title: "Reinforcement Learning",
    progress: 75,
    image: "/images/rl.png"
  },
  {
    _id: "9",
    title: "LLMs",
    progress: 85,
    image: "/images/llm.png"
  },
  {
    _id: "10",
    title: "FastAPI",
    progress: 80,
    image: "/images/fastapi.png"
  },
  {
    _id: "11",
    title: "Flask",
    progress: 75,
    image: "/images/flask.png"
  },
  {
    _id: "12",
    title: "JavaScript",
    progress: 75,
    image: "/images/javascript.png"
  },
  {
    _id: "13",
    title: "ReactJS",
    progress: 70,
    image: "/images/react.png"
  },
  {
    _id: "14",
    title: "Next.js",
    progress: 70,
    image: "/images/nextjs.png"
  },
  {
    _id: "15",
    title: "SQL",
    progress: 85,
    image: "/images/sql.png"
  },
  {
    _id: "16",
    title: "Docker",
    progress: 75,
    image: "/images/docker.png"
  },
  {
    _id: "17",
    title: "Git/GitHub",
    progress: 90,
    image: "/images/git.png"
  },
  {
    _id: "18",
    title: "Power BI",
    progress: 70,
    image: "/images/powerbi.png"
  },
  {
    _id: "19",
    title: "LangGraph",
    progress: 80,
    image: "/images/langgraph.png"
  },
  {
    _id: "20",
    title: "MLOps",
    progress: 75,
    image: "/images/mlops.png"
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

app.get('/api/education', (req, res) => {
  res.json({ education });
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
