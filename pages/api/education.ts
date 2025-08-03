
import type { NextApiRequest, NextApiResponse } from "next";


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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json({ education });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}