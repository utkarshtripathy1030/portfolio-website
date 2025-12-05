# Portfolio Website

A professional full-stack portfolio website built with Node.js/Express backend and a modern, responsive frontend.

## Project Structure

```
portfolio-website/
├── src/
│   ├── server.js              # Main Express server
│   ├── routes/
│   │   ├── portfolio.js       # Portfolio data routes
│   │   ├── contact.js         # Contact form routes
│   │   └── projects.js        # Projects routes
│   ├── controllers/           # Business logic (ready for expansion)
│   └── models/                # Data models (ready for expansion)
├── public/
│   ├── index.html             # Main HTML file
│   ├── css/                   # CSS files directory
│   ├── js/
│   │   └── app.js             # Frontend JavaScript with API integration
│   └── images/                # Images directory
├── package.json               # Node.js dependencies
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## Setup Instructions

### 1. Install Node.js
Download and install Node.js from https://nodejs.org/ (LTS version recommended)

### 2. Navigate to Project Directory
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
```

### 3. Install Dependencies
```powershell
npm install
```

This will install:
- **express**: Web framework
- **cors**: Cross-Origin Resource Sharing middleware
- **dotenv**: Environment variable management
- **express-validator**: Form validation
- **nodemon**: Auto-restart server during development (dev dependency)

### 4. Start the Server

**Development mode (with auto-restart):**
```powershell
npm run dev
```

**Production mode:**
```powershell
npm start
```

The server will start on http://localhost:3000

### 5. Open in Browser
Open your browser and visit: http://localhost:3000

## API Endpoints

### Portfolio Routes
- `GET /api/portfolio` - Get all portfolio info
- `GET /api/portfolio/:field` - Get specific field
- `PUT /api/portfolio/:field` - Update portfolio field

### Projects Routes
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Add new project

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

## Features

✅ **Frontend**
- Modern, responsive design
- Interactive UI with smooth animations
- Project showcase with hover effects
- Contact form with validation
- Settings panel
- Search functionality
- Mobile-friendly

✅ **Backend**
- RESTful API architecture
- Form validation
- CORS support
- Static file serving
- Error handling
- Environment variables support

## Configuration

Edit `.env` file to configure:
```
PORT=3000
NODE_ENV=development
```

## Project Data

### Adding Projects

Edit `src/routes/projects.js` to add your projects to the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourprofile/project",
    image: "/images/project-image.jpg",
    featured: true
  },
  // Add more projects...
];
```

### Portfolio Information

Edit `src/routes/portfolio.js` to update your portfolio data:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourprofile"
  }
};
```

## Next Steps (Enhancements)

### Database Integration
Add a database (MongoDB, PostgreSQL) to persist data:
```javascript
// Example: Add to package.json
"mongoose": "^7.0.0"  // For MongoDB
// or
"pg": "^8.0.0"        // For PostgreSQL
```

### Email Integration
Add email functionality for contact form:
```javascript
"nodemailer": "^6.9.0"
```

### Authentication
Add user authentication:
```javascript
"jsonwebtoken": "^9.0.0"
"bcryptjs": "^2.4.3"
```

### Database Models
Create models in `src/models/`:
- `Contact.js` - For storing contact messages
- `Project.js` - For managing projects
- `Portfolio.js` - For portfolio information

### Controllers
Implement controllers in `src/controllers/` for better code organization

## Deployment

### Deploy to Vercel
```powershell
npm install -g vercel
vercel
```

### Deploy to Heroku
```powershell
npm install -g heroku
heroku create your-portfolio-name
git push heroku main
```

### Deploy to Railway
Visit https://railway.app and connect your GitHub repository

## Troubleshooting

**Port already in use:**
```powershell
# Change PORT in .env or use:
set PORT=3001 & npm start
```

**CORS errors:**
Check that your frontend is making requests to the correct API URL in `public/js/app.js`

**Module not found:**
```powershell
npm install
```

## Support

For issues or questions, check:
- Express docs: https://expressjs.com
- Node.js docs: https://nodejs.org/docs/

---

**Built with ❤️ | Node.js • Express • Vanilla JavaScript**
