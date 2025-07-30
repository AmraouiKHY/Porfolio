# Your Portfolio Website

A modern portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. The backend uses Express.js to serve portfolio data including personal information, projects, skills, and work experience.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Heroicons, React Social Icons

## Running the Application

### Start the Express.js Backend Server

First, install and start the backend server:

```bash
cd server
npm install
npm run dev
```

The backend server will run on [http://localhost:5000](http://localhost:5000)

### Start the Next.js Frontend

In a new terminal, from the root directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Customizing Your Portfolio

1. **Update Personal Information**: Edit the data in `server/app.js`
2. **Add Your Images**: Place images in `server/uploads/` directory
3. **Modify Styling**: Update colors and styles in `tailwind.config.js`
4. **Update Components**: Customize components in the `components/` directory

## API Endpoints

The Express.js server provides these endpoints:
- `/api/pageInfo` - Personal information and hero data
- `/api/experience` - Work experience history
- `/api/projects` - Portfolio projects
- `/api/skills` - Technical skills and proficiencies
- `/api/socials` - Social media links

## Deployment

### Frontend (Vercel)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Backend
Deploy your Express.js server to platforms like Heroku, Railway, or DigitalOcean.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
