import type { NextApiRequest, NextApiResponse } from 'next';

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
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ socials });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
