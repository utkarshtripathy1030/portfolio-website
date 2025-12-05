# 🚀 Quick Start Guide

## In 3 Steps, Get Your Portfolio Running

### Step 1: Open PowerShell and Navigate to Project

```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
```

### Step 2: Install Dependencies

```powershell
npm install
```

This installs all required packages (takes ~1-2 minutes)

### Step 3: Start the Server

```powershell
npm run dev
```

You'll see:
```
🚀 Server running on http://localhost:3000
📁 Environment: development

Press Ctrl+C to stop the server
```

### Step 4: Open in Browser

Visit: **http://localhost:3000**

---

## 📁 What You Just Created

### Backend Structure
- **src/server.js** - Main Express server with CORS, static files, and routes
- **src/routes/** - API endpoints for portfolio, projects, and contact form
- **package.json** - Project metadata and dependencies

### Frontend Structure
- **public/index.html** - Beautiful, responsive portfolio website
- **public/js/app.js** - JavaScript that connects to your backend API
- **public/css/** - Ready for custom stylesheets

---

## 🔗 How Frontend & Backend Connect

```
Browser Request → API Endpoint → Express Server → Response → Display on Page
```

### Example: Contact Form Submission

1. **User fills contact form** in browser
2. **JavaScript sends POST** to `http://localhost:3000/api/contact`
3. **Express server validates** and stores the message
4. **Success message** displayed to user

---

## 🛠️ Make It Your Own

### 1. Update Portfolio Info
Edit `src/routes/portfolio.js`:
```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio here",
  email: "your.email@example.com",
  // ...
};
```

### 2. Add Your Projects
Edit `src/routes/projects.js` → Add to `projects` array:
```javascript
{
  id: 1,
  title: "My Awesome Project",
  description: "What this project does",
  technologies: ["React", "Node.js"],
  link: "https://github.com/yourprofile/project",
  image: "/images/project.jpg",
  featured: true
}
```

### 3. Add Your Images
Place images in `public/images/` folder

---

## 📊 API Reference

### Get Portfolio Info
```
GET http://localhost:3000/api/portfolio
```

### Get All Projects
```
GET http://localhost:3000/api/projects
```

### Send Contact Message
```
POST http://localhost:3000/api/contact
Body: {
  "name": "John",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "Your message here"
}
```

---

## ⚡ Useful Commands

```powershell
# Start server in development mode (auto-restarts on changes)
npm run dev

# Start server in production mode
npm start

# Stop the server
Ctrl + C

# Reinstall dependencies
npm install

# Update dependencies
npm update
```

---

## 🌐 Deploy Your Website

### Option 1: Vercel (Recommended - Easiest)
```powershell
npm install -g vercel
vercel
```

### Option 2: Heroku
```powershell
heroku create your-portfolio-name
git push heroku main
```

### Option 3: Railway.app
1. Go to https://railway.app
2. Connect your GitHub repo
3. Deploy!

---

## 🐛 Troubleshooting

**Issue: "Port 3000 is already in use"**
```powershell
# Use different port
set PORT=3001 & npm start
```

**Issue: "npm command not found"**
→ Reinstall Node.js from https://nodejs.org/

**Issue: API not working**
→ Check that server is running and browser console for errors

**Issue: Changes not reflecting**
→ Hard refresh browser: `Ctrl + Shift + R`

---

## 📚 Next Learning Steps

1. **Add Database** - Replace in-memory storage with MongoDB or PostgreSQL
2. **Add Authentication** - Secure admin panel for managing content
3. **Email Notifications** - Send emails when contact form is submitted
4. **Analytics** - Track visitor statistics
5. **Blog Section** - Add blog posts capability

---

## 🎓 Resources

- **Express.js Docs**: https://expressjs.com
- **Node.js Docs**: https://nodejs.org
- **MDN Web Docs**: https://developer.mozilla.org
- **Deployment Guides**: Check README.md

---

## 💡 Tips

✅ **Keep terminal open** while developing - you'll see any errors  
✅ **Check browser console** (F12) for JavaScript errors  
✅ **Test API endpoints** using Postman or Insomnia  
✅ **Use version control** - Initialize git: `git init`  
✅ **Document your changes** - Make commits as you modify  

---

**🎉 You now have a full-stack portfolio website!**

Start at http://localhost:3000 and customize it to make it yours.

Happy coding! 🚀
