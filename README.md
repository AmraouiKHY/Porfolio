# Your Portfolio Website

A modern portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. This is a fully static portfolio that uses static data for fast, reliable performance and easy deployment.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Data**: Static data imports (no backend required)
- **Styling**: Tailwind CSS with custom animations
- **Icons**: favicon

## Running the Application

### Start the Next.js Application

From the root directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Customizing Your Portfolio

1. **Update Personal Information**: Edit the data in `data/staticData.ts`
2. **Add Your Images**: Place images in `public/images/` directory
3. **Add Your CV**: Place your CV file in `public/cv/` directory
4. **Modify Styling**: Update colors and styles in `tailwind.config.js`
5. **Update Components**: Customize components in the `components/` directory

## Project Structure

```
├── components/          # React components
│   ├── About.tsx       # About section with CV download
│   ├── Education.tsx   # Education background
│   ├── ExperienceCard.tsx # Work experience cards
│   ├── Projects.tsx    # Portfolio projects
│   └── ...
├── data/
│   └── staticData.ts   # All portfolio data
├── pages/
│   ├── index.tsx       # Main portfolio page
│   └── _app.tsx        # App configuration
├── public/
│   ├── images/         # Static images
│   └── cv/            # CV/Resume files
└── styles/            # CSS styles
```

## Adding Your Data

All portfolio data is stored in `data/staticData.ts`. Update the following sections:

- **pageInfo**: Personal information and hero data
- **education**: Educational background
- **experiences**: Work experience history
- **projects**: Portfolio projects
- **skills**: Technical skills and proficiencies
- **socials**: Social media links

## Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push


