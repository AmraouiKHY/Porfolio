import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ experiences });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
