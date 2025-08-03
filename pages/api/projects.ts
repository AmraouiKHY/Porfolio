import type { NextApiRequest, NextApiResponse } from 'next';

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
    ],
    linkToBuild: "",
    githubLink: ""
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ projects });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
