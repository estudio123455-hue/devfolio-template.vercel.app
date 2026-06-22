# Developer Portfolio Template

A modern, premium developer portfolio template built with React, Vite, and Tailwind CSS. Designed to be easily customizable without touching code — perfect for developers who want a professional online presence quickly.

![Portfolio Template](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=630&fit=crop)

## ✨ Features

- **Easy Customization** — Edit a single config file to make it yours
- **Dark/Light Mode** — Toggle between themes (dark mode by default)
- **Fully Responsive** — Looks great on all devices (mobile-first)
- **Modern Design** — Clean, professional aesthetic with smooth animations
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **Fast & Lightweight** — Built with Vite for optimal performance
- **Contact Form Ready** — Easy integration with Formspree or similar services
- **SEO Friendly** — Proper meta tags and semantic structure

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed on your machine
- Basic familiarity with terminal/command line

### Installation

1. **Download or clone this template**

```bash
# If cloning from Git
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to see your portfolio in action!

## 🎨 Customization Guide

The beauty of this template is that you can customize everything by editing just **one file**: `src/data/portfolio.js`

### Step 1: Personal Information

Open `src/data/portfolio.js` and find the `personal` section:

```javascript
export const personal = {
  name: 'Alex Morgan',           // Your name
  title: 'Full-Stack Developer', // Your professional title
  tagline: 'Building beautiful, performant web experiences', // Short tagline
  bio: `I'm a passionate...`,   // Your bio (supports multi-line)
  email: 'alex@example.com',     // Your email
  location: 'San Francisco, CA', // Your location (optional)
  currentYear: new Date().getFullYear(), // Auto-updates each year
};
```

### Step 2: Social Links

Update your social media profiles in the `social` section:

```javascript
export const social = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  twitter: 'https://twitter.com/yourhandle',
  dribbble: null,  // Optional: set to null if not using
  website: null,   // Optional: your personal website
};
```

**Tip:** Set any social link to `null` to hide that icon from your portfolio.

### Step 3: Skills & Technologies

Organize your skills by category in the `skills` section:

```javascript
export const skills = {
  categories: [
    {
      name: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
    },
    {
      name: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'],
    },
  ],
};
```

**Tip:** Add as many categories as you need, or remove ones you don't use.

### Step 4: Projects

Add your projects in the `projects` array. Each project card includes:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'A brief description of what your project does...',
    image: 'https://your-image-url.com/image.jpg', // Or local path
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://your-project-demo.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true, // Set to true to highlight important projects
  },
  // Add more projects...
];
```

**Image Recommendations:**
- Size: 800x600px (4:3 aspect ratio)
- Format: JPG or PNG
- Use high-quality screenshots or mockups
- Can use Unsplash for placeholder images

### Step 5: Experience & Education

Add your work history and education in the `experience` array:

```javascript
export const experience = [
  {
    id: 1,
    type: 'work', // 'work' or 'education'
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-03',
    endDate: 'Present', // Or '2023-12' for past roles
    description: [
      'Led a team of 5 developers...',
      'Improved performance by 40%...',
      'Implemented a design system...',
    ],
  },
  // Add more entries...
];
```

**Toggle the Experience Section:**
Set `showExperience = false` in `src/data/portfolio.js` to hide this entire section.

### Step 6: Contact Form

The contact form comes in demo mode by default. To enable real submissions:

1. **Sign up for Formspree** (free tier available)
   - Go to [formspree.io](https://formspree.io)
   - Create an account
   - Create a new form
   - Copy your Form ID

2. **Add your Form ID** to the config:

```javascript
export const contact = {
  formspreeId: 'your-form-id-here', // Paste your Formspree ID
  customFields: [], // Optional: add custom form fields
};
```

**Alternative Services:** You can also use Netlify Forms, Getform, or similar services by modifying the form submission logic in `src/components/Contact.jsx`.

## 🎨 Theme Customization

### Change Colors

Update the theme colors in the `theme` section of `src/data/portfolio.js`:

```javascript
export const theme = {
  primaryColor: 'blue',   // Options: blue, purple, emerald, rose, amber, cyan
  accentColor: 'purple',  // Options: purple, pink, emerald, orange, cyan, indigo
  fontFamily: 'Inter',    // Options: Inter, Space Grotesk, Outfit, Plus Jakarta Sans
  darkModeDefault: true,  // Set to false to start in light mode
};
```

**Primary Color** affects:
- Headings
- Accent text
- Button hover states
- Focus states

**Accent Color** affects:
- Gradient backgrounds
- Featured badges
- CTA buttons

### Change Fonts

Choose from these Google Fonts options:
- `Inter` (default) — Clean, professional
- `Space Grotesk` — Modern, distinctive
- `Outfit` — Friendly, approachable
- `Plus Jakarta Sans` — Professional, corporate

## 📱 Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your portfolio:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

That's it! Vercel will automatically build and deploy your portfolio. You'll get a URL like `https://your-portfolio.vercel.app`

### Deploy to Netlify

1. **Build your portfolio**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── portfolio.js     # ⭐ Edit this file to customize!
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally

## ♿ Accessibility Features

This template includes:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus states
- Alt text on images
- Respects `prefers-reduced-motion` setting
- Color contrast compliance

## 🎯 Tips for a Great Portfolio

1. **Use real project screenshots** — They look much better than placeholders
2. **Keep descriptions concise** — 2-3 sentences per project is ideal
3. **Highlight your best work** — Use the `featured: true` flag
4. **Keep it updated** — Add new projects as you complete them
5. **Proofread carefully** — Typos can look unprofessional
6. **Test on mobile** — Make sure everything looks good on small screens

## 🐛 Troubleshooting

### Port already in use

If you see "Port 5173 is in use", Vite will automatically try the next available port (5174, 5175, etc.).

### Images not loading

- Check that image URLs are correct
- For local images, place them in the `public/` folder and reference them as `/image-name.jpg`
- Make sure external images allow hotlinking

### Tailwind styles not applying

- Make sure you ran `npm install`
- Try restarting the dev server: stop it with Ctrl+C, then run `npm run dev` again

### Build errors

- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Make sure you're using Node.js 16 or higher

## 📄 License

This template is sold as a digital product. You may use it for personal and commercial projects. You may not resell or redistribute this template as your own.

## 💬 Support

If you need help customizing your portfolio:
1. Check this README first — most questions are answered here
2. Review the comments in `src/data/portfolio.js` — they explain each field
3. For technical issues, ensure you have the latest Node.js version

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
