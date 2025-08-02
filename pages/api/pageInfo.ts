import type { NextApiRequest, NextApiResponse } from 'next';

const pageInfo = {
  _id: "1",
  name: "Khireddine Amraoui",
  role: "AI and Data Science Engineer",
  heroImage: "/uploads/profile-pic.JPG",
  backgroundInformation: "AI and Data Science engineering graduate with expertise in machine learning, deep learning, and natural language processing. Skilled in building secure, scalable AI systems, including multi-agent architectures and LLM-driven automation. Experienced in developing predictive models, NLP pipelines, and computer vision solutions for real-world applications.",
  profilePic: "/uploads/profile-pic.JPG",
  phoneNumber: "+213791351008 / +213541700084",
  email: "amraouikhireddine@gmail.com",
  address: "Boumerdes, Algeria"
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ pageInfo });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
