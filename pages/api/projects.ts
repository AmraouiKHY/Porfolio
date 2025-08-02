import type { NextApiRequest, NextApiResponse } from 'next';

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
    image: "/uploads/fraud-detection.png",
    summary: "Machine learning model to detect fraudulent transactions using advanced classification algorithms and oversampling techniques to handle class imbalances.",
    technologies: [
      { _id: "tech21", title: "Machine Learning", image: "/uploads/ml.png" },
      { _id: "tech22", title: "Classification", image: "/uploads/classification.png" },
      { _id: "tech23", title: "Python", image: "/uploads/python.png" },
      { _id: "tech24", title: "Scikit-learn", image: "/uploads/sklearn.png" }
    ],
    linkToBuild: "",
    githubLink: ""
  },
  {
    _id:"7",
    title: "Guaspiless",
    image: "/uploads/guaspiless.png",
    summary: "university project ,A website that fights against food waste.a user can order shopping carts according to their needs and location.",
    technologies: [
      { _id: "tech25", title: "React", image: "/uploads/react.png" },
      { _id: "tech26", title: "Node.js", image: "/uploads/nodejs.png" },
      { _id: "tech27", title: "Tailwind CSS", image: "/uploads/tailwind.png" },
      { _id: "tech28", title: "MongoDB", image: "/uploads/mongodb.png" }
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
