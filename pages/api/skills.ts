import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ skills });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
