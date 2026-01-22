# Andrew Cen - Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Hero section with animated word rotation
- **Past Work**: Showcase of 3 main projects with detailed case study pages
- **Photography**: Interactive bento box gallery with image modal
- **About Me**: Personal introduction with resume download

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable React components
- `/public` - Static assets (images, resume PDF, etc.)

## Customization

1. **Images**: Add your photography images to `/public` and update the image paths in `/app/photography/page.tsx`
2. **Resume**: Add your resume PDF to `/public/resume.pdf`
3. **Work Projects**: Update the work data in `/app/past-work/[id]/page.tsx` with your actual project details
4. **About Me**: Update the text and add your images to `/app/about-me/page.tsx`

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
