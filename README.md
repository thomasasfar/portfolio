# Thomas Nobel Asfar - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Single Page Application**: Smooth scroll navigation between sections
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Clean Design**: Professional UI with subtle animations and transitions
- **Easy to Customize**: Well-structured code with clear documentation

## 📋 Sections

1. **Hero/About**: Introduction with profile photo placeholder
2. **Professional Experience**: Timeline of work experience
3. **Organizational Experience**: Leadership and community involvement
4. **Skills**: Categorized technical skills
5. **Projects**: Showcase of featured projects with tech stacks
6. **Achievements**: Awards, certifications, and recognition
7. **Contact**: Contact information and functional contact form

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation & Development

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and visit `http://localhost:5173`

## 🎨 Customization Guide

### Update Personal Information

#### 1. Hero Section (`src/sections/Hero.tsx`)
- Change your name, title, and summary
- Replace the profile photo placeholder with your actual photo
- Update the `scrollToSection` button actions if needed

#### 2. Contact Information (`src/sections/Contact.tsx`)
Look for comments marked `TO CUSTOMIZE:` and update:
- Email address
- LinkedIn URL
- GitHub URL
- Location

#### 3. Footer (`src/components/Footer.tsx`)
- Update social media links (GitHub, LinkedIn)

#### 4. Navbar Logo (`src/components/Navbar.tsx`)
- Change the logo text from "Thomas" to your preferred text

### Update Content Data

All content is stored in the `src/data` folder for easy editing:

#### Experience (`src/data/experiences.ts`)
Add or modify professional experiences:
```typescript
{
  id: 2,
  role: "Your Role",
  company: "Company Name",
  period: "2024 - Present",
  description: "Brief description",
  highlights: ["Achievement 1", "Achievement 2"]
}
```

#### Organizational Experience (`src/data/orgExperiences.ts`)
Add leadership roles and community involvement

#### Skills (`src/data/skills.ts`)
Add or remove skills by category:
```typescript
{
  category: "New Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

#### Projects (`src/data/projects.ts`)
Add your projects:
```typescript
{
  id: 9,
  title: "Project Name",
  description: "Detailed description",
  techStack: ["Tech1", "Tech2"],
  category: "Category",
  featured: true,
  link: "https://project-url.com"
}
```

#### Achievements (`src/data/achievements.ts`)
Add awards, certifications, and recognition:
```typescript
{
  id: 4,
  title: "Achievement Title",
  organization: "Organization Name",
  date: "2024",
  description: "Description",
  type: "award" // or "certification", "competition", "recognition"
}
```

### Customize Colors

#### Tailwind Config (`tailwind.config.js`)
The primary color palette is defined here. To change the accent color:
```javascript
colors: {
  primary: {
    50: '#your-color',
    // ... adjust all shades
    900: '#your-color',
  },
}
```

Current theme uses blue shades. Popular alternatives:
- **Purple/Violet**: Modern tech feel
- **Teal/Cyan**: Fresh, creative
- **Green**: Growth, eco-friendly
- **Orange**: Energetic, bold

#### Quick Color Changes
Search for `primary-` in your code and you'll find all places using the accent color.

### Add Profile Photo

In `src/sections/Hero.tsx`, replace the placeholder:
```tsx
{/* Current placeholder */}
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl">
  <div className="text-white text-6xl font-bold">TNA</div>
</div>

{/* Replace with: */}
<img 
  src="/path-to-your-photo.jpg" 
  alt="Thomas Nobel Asfar" 
  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
/>
```

### Modify Sections

To add/remove sections:
1. Update `src/App.tsx` to include/exclude section components
2. Update the menu items in `src/components/Navbar.tsx`
3. Ensure section IDs match the navigation `href` values

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Single column layout, hamburger menu
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full multi-column layouts with fixed navbar

## 🎯 Key Features Explained

### Smooth Scrolling
Clicking navbar links smoothly scrolls to sections. This is handled by:
- CSS: `scroll-behavior: smooth` in `index.css`
- JavaScript: `scrollIntoView({ behavior: 'smooth' })` in components

### Contact Form
The contact form includes:
- Client-side validation
- Success message display
- Console logging (since this is frontend-only)
- To add backend: Replace the `handleSubmit` function to send data to your API

### Mobile Menu
The hamburger menu automatically shows on mobile devices and includes all navigation items.

## 🚀 Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📝 Notes

- The CSS warnings about `@tailwind` and `@apply` are expected with Tailwind and can be ignored
- The contact form doesn't send emails (frontend-only). Check browser console to see form submissions
- Project links are set to `#` placeholders - update them with real URLs
- All images are placeholders - replace with actual assets

## 🤝 Adding Backend (Optional)

To add a backend for the contact form:
1. Create an API endpoint (e.g., using Express.js, Laravel, or serverless functions)
2. Update the `handleSubmit` function in `src/sections/Contact.tsx`
3. Send POST request to your API with form data
4. Handle response and show appropriate messages

## 📄 License

This portfolio template is free to use for personal projects.

---

Built with ❤️ by Thomas Nobel Asfar

