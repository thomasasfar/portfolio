# Quick Customization Guide

This guide helps you quickly customize your portfolio with your own information.

## 🎯 Quick Start Checklist

### 1. Personal Information
- [ ] Update name in `src/sections/Hero.tsx`
- [ ] Update title/headline in `src/sections/Hero.tsx`
- [ ] Update summary in `src/sections/Hero.tsx`
- [ ] Add your profile photo in `src/sections/Hero.tsx`
- [ ] Update logo text in `src/components/Navbar.tsx`

### 2. Contact Details
In `src/sections/Contact.tsx`:
- [ ] Replace email: `thomas@example.com`
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Verify location is correct

In `src/components/Footer.tsx`:
- [ ] Update GitHub link
- [ ] Update LinkedIn link

### 3. Content Updates

#### Professional Experience
Edit `src/data/experiences.ts`:
- [ ] Add all your work experiences
- [ ] Update dates
- [ ] Add specific achievements

#### Organizational Experience
Edit `src/data/orgExperiences.ts`:
- [ ] Add leadership roles
- [ ] Update community involvement
- [ ] Add highlights

#### Skills
Edit `src/data/skills.ts`:
- [ ] Add new skills
- [ ] Remove unused skills
- [ ] Organize by your preferred categories

#### Projects
Edit `src/data/projects.ts`:
- [ ] Add your projects
- [ ] Update descriptions
- [ ] Add real project links (replace `#`)
- [ ] Set `featured: true` for your best projects

#### Achievements
Edit `src/data/achievements.ts`:
- [ ] Add certifications
- [ ] Add competition wins
- [ ] Add awards and recognition

## 🎨 Visual Customization

### Colors
The primary color is blue. To change it:

1. Open `tailwind.config.js`
2. Replace the `primary` color values
3. Use a color palette generator like:
   - https://uicolors.app/create
   - https://tailwindshades.com/

Example color schemes:
```javascript
// Professional Purple
primary: {
  500: '#8b5cf6',
  600: '#7c3aed',
  700: '#6d28d9',
}

// Modern Teal
primary: {
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
}

// Bold Orange
primary: {
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
}
```

### Profile Photo
1. Add your photo to `public` folder (e.g., `public/profile.jpg`)
2. In `src/sections/Hero.tsx`, replace the placeholder:
```tsx
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
/>
```

### Fonts
To change fonts:
1. Import from Google Fonts in `index.html`
2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 📝 Content Writing Tips

### Descriptions
- Keep project descriptions 2-3 sentences
- Start with action verbs (Built, Developed, Designed)
- Highlight the impact/result
- Mention key technologies

### Professional Summary
- 3-4 short paragraphs
- Paragraph 1: Your current status (graduate, developer, etc.)
- Paragraph 2: Your technical skills
- Paragraph 3: Your achievements/projects

### Experience Highlights
Use the STAR method:
- **S**ituation: What was the context?
- **T**ask: What needed to be done?
- **A**ction: What did you do?
- **R**esult: What was the outcome?

## 🔗 Adding Real Project Links

Instead of `#`, add:
- GitHub repository URLs
- Live demo links
- Case study documents
- Project documentation

Example:
```typescript
link: "https://github.com/yourusername/project-name"
```

## 📱 Testing Your Changes

After making changes:
1. Save all files
2. Check the browser (should auto-refresh)
3. Test on mobile view (browser dev tools)
4. Test all navigation links
5. Test the contact form

## 🚀 Common Customizations

### Remove a Section
1. Remove the component from `src/App.tsx`
2. Remove the menu item from `src/components/Navbar.tsx`

### Add a New Section
1. Create a new file in `src/sections/YourSection.tsx`
2. Add the component to `src/App.tsx`
3. Add a menu item in `src/components/Navbar.tsx`
4. Give it an `id` that matches the `href` in the navbar

### Change Section Order
Simply reorder the components in `src/App.tsx`

## 💡 Pro Tips

1. **Consistent Tense**: Use past tense for completed projects, present for ongoing
2. **Action Words**: Start bullet points with strong verbs
3. **Quantify**: Use numbers when possible ("Led team of 5", "Reduced load time by 30%")
4. **Keywords**: Include relevant tech keywords for SEO
5. **Update Regularly**: Keep your portfolio current with new projects

## 🐛 Troubleshooting

### CSS not applying?
- Make sure Tailwind is properly configured
- Check `index.css` has the @tailwind directives
- Restart the dev server

### Component not showing?
- Check it's imported in `App.tsx`
- Verify the section `id` matches navbar `href`
- Check for TypeScript errors

### Mobile menu not working?
- Clear browser cache
- Check JavaScript console for errors
- Verify navbar component is imported

## 📦 Before Deploying

- [ ] Test all links
- [ ] Verify contact form validation
- [ ] Test on mobile devices
- [ ] Check for typos
- [ ] Optimize images (compress photos)
- [ ] Update favicon
- [ ] Test on different browsers
- [ ] Run `npm run build` to check for errors

---

Need help? Check the main README.md for detailed documentation!
