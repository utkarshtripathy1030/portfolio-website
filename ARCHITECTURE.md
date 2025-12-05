# Architecture & Data Flow Diagrams

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PORTFOLIO WEBSITE ARCHITECTURE                │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│   WEB BROWSER        │
│  (http://localhost)  │
│  ┌────────────────┐  │
│  │  index.html    │  │
│  │  app.js        │  │
│  │  (CSS inline)  │  │
│  └────────────────┘  │
└──────────────────────┘
         │ HTTP
         │ Requests
         ↓
┌──────────────────────────────────────────────────────────────────┐
│                    EXPRESS SERVER (Node.js)                       │
│                   http://localhost:3000                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              MIDDLEWARE                                 │    │
│  │  ├─ CORS (Allow requests from any origin)              │    │
│  │  ├─ JSON Parser (Parse request bodies)                 │    │
│  │  ├─ Static Files (Serve public/ folder)                │    │
│  │  └─ Error Handler (Catch all errors)                   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────┐  ┌──────────────┐  ┌──────────────────┐   │
│  │ ROUTE HANDLERS  │  │ CONTROLLERS  │  │ DATABASE READY   │   │
│  ├─────────────────┤  │ (Soon)       │  │ (Models folder)  │   │
│  │ portfolio.js    │  └──────────────┘  └──────────────────┘   │
│  │ projects.js     │                                             │
│  │ contact.js      │                                             │
│  └─────────────────┘                                             │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📡 Request/Response Flow

### Example 1: Get Projects

```
BROWSER                          SERVER
  │                                │
  ├──── GET /api/projects ────────>│
  │                                │ Looks in
  │                                │ src/routes/projects.js
  │                                │ projects array
  │                                │
  │<── JSON: [projects...] ────────┤
  │                                │
  │ JavaScript receives data       │
  │ Renders project cards          │
  │ to page                        │
  │                                │
```

### Example 2: Submit Contact Form

```
BROWSER                                    SERVER
  │ User clicks "Send"                      │
  │                                         │
  ├─ FormData: {                           │
  │   name, email, subject, message        │
  │ }                                       │
  │                                         │
  ├──── POST /api/contact ───────────────> │
  │     (with form data)                   │
  │                                         │ Validate data
  │                                         │ (express-validator)
  │                                         │
  │                                         │ Check:
  │                                         │ ├─ Name not empty
  │                                         │ ├─ Valid email
  │                                         │ ├─ Subject not empty
  │                                         │ └─ Message not empty
  │                                         │
  │                                         │ If valid:
  │                                         │ Store in array
  │                                         │ (later: database)
  │                                         │
  │<── {success: true, message: "..."} ── │
  │                                         │
  │ Show success message to user           │
  │ Clear form                             │
  │                                         │
```

---

## 🎯 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    DATA FLOW                                 │
└─────────────────────────────────────────────────────────────┘

PORTFOLIO.JS (Your Info)
    │
    ├─ name: "Utkarsh Tripathy"
    ├─ title: "Developer"
    ├─ email: "email@example.com"
    └─ socials: {github, linkedin, twitter}
         │
         └─> API GET /api/portfolio
             │
             └─> Browser receives JSON
                 │
                 └─> app.js displays on page


PROJECTS.JS (Your Projects)
    │
    ├─ Project 1: {title, description, tech, link, image}
    ├─ Project 2: {title, description, tech, link, image}
    └─ Project 3: {title, description, tech, link, image}
         │
         └─> API GET /api/projects
             │
             └─> Browser receives JSON array
                 │
                 └─> app.js creates project cards
                     │
                     └─> Renders to page


CONTACT.JS (Messages)
    │
    ├─ FormData from browser
    │  {name, email, subject, message}
    │
    └─> API POST /api/contact
        │
        ├─ Validates
        │
        ├─ Stores
        │  messages[] array
        │
        └─> Returns {success, message}
            │
            └─> Browser shows confirmation
```

---

## 🔄 Frontend-Backend Communication

```
┌─────────────────────────────────────────────────────────────┐
│              FRONTEND (public/js/app.js)                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  When page loads:                                            │
│  1. loadPortfolioData()  → Fetch /api/portfolio             │
│  2. loadProjects()       → Fetch /api/projects              │
│  3. renderProjects()     → Display projects                 │
│  4. setupEventHandlers() → Add click listeners              │
│                                                              │
│  When user interacts:                                        │
│  - Click project  → Open link                               │
│  - Search        → Filter cards                             │
│  - Submit form   → POST to /api/contact                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                           ↕ HTTP
                        (fetch API)
┌─────────────────────────────────────────────────────────────┐
│           BACKEND (src/server.js + routes)                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  GET /api/portfolio                                          │
│  ├─ Route: src/routes/portfolio.js                          │
│  ├─ Action: Return portfolioData                            │
│  └─ Response: JSON                                           │
│                                                              │
│  GET /api/projects                                           │
│  ├─ Route: src/routes/projects.js                           │
│  ├─ Action: Return projects array                           │
│  └─ Response: JSON array                                     │
│                                                              │
│  POST /api/contact                                           │
│  ├─ Route: src/routes/contact.js                            │
│  ├─ Validate: Check all fields                              │
│  ├─ Store: Save to messages array                           │
│  └─ Response: {success, message}                            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 File Organization

```
CODE STRUCTURE:

public/                          ← What user sees
├── index.html                  ← HTML (structure)
├── js/
│   └── app.js                  ← JavaScript (behavior, API calls)
└── images/                     ← Your images

src/                            ← Backend logic
├── server.js                   ← Main server file
└── routes/                     ← API endpoints
    ├── portfolio.js            ← /api/portfolio routes
    ├── projects.js             ← /api/projects routes
    └── contact.js              ← /api/contact routes

CONFIGURATION:

package.json                    ← Dependencies & scripts
.env                           ← Environment variables
.gitignore                     ← What to ignore in git
```

---

## 🚀 Startup Process

```
You run: npm run dev
         │
         ├─ Nodemon starts watching files
         │
         ├─ Node runs src/server.js
         │
         ├─ Express app initializes
         │
         ├─ Middleware loads (CORS, JSON, Static files)
         │
         ├─ Routes register:
         │  ├─ /api/portfolio
         │  ├─ /api/projects
         │  └─ /api/contact
         │
         ├─ Static file serving starts (public/)
         │
         └─ Server listens on port 3000
             │
             ✓ Ready to accept requests!
             
             Visit: http://localhost:3000
```

---

## 💾 Data Storage (Current & Future)

```
CURRENT (In-Memory):
┌─────────────────────────┐
│  DATA                   │
├─────────────────────────┤
│ portfolioData = {...}   │
│ projects = [{...}]      │
│ messages = [{...}]      │
│                         │
│ Lost on server restart! │
└─────────────────────────┘

FUTURE (With Database):
┌──────────────────────────────────────┐
│         DATABASE                     │
│     (MongoDB or PostgreSQL)          │
├──────────────────────────────────────┤
│  Collections/Tables:                 │
│  ├─ Portfolios                       │
│  ├─ Projects                         │
│  ├─ Messages                         │
│  └─ Users (for admin)                │
│                                      │
│  Persistent storage!                 │
│  Survives server restarts!           │
│  Multiple servers can share data!    │
└──────────────────────────────────────┘
```

---

## 🔒 HTTP Methods Used

```
GET     - Retrieve data (no side effects)
├─ /api/portfolio        - Get your info
├─ /api/projects         - Get all projects
└─ /api/contact          - Get all messages

POST    - Create/Submit data
├─ /api/contact          - Submit contact form
└─ /api/projects         - Add new project

PUT     - Update existing data
└─ /api/portfolio/:field - Update your info

DELETE  - Remove data (ready to add)
└─ (Not implemented yet)
```

---

## 🎨 Rendering Pipeline

```
API RETURNS DATA
       ↓
JavaScript receives JSON
       ↓
Parse the data
       ↓
Create DOM elements:
  • Create <article> for each project
  • Create nested <div> for media
  • Create <img> tags
  • Create <button> tags
       ↓
Set attributes and content:
  • Set data-title for filtering
  • Set image src
  • Set button text
       ↓
Attach event listeners:
  • Click handlers
  • Hover effects
       ↓
Insert into DOM:
  • Append to rowFirst element
       ↓
Browser renders to screen
       ↓
User sees project cards!
```

---

## 🔌 API Response Examples

### GET /api/portfolio
```json
{
  "name": "Utkarsh Tripathy",
  "title": "Full Stack Developer",
  "bio": "Building beautiful web experiences",
  "email": "utkarshtripathy1030@gmail.com",
  "socials": {
    "github": "https://github.com/utkarsh",
    "linkedin": "https://linkedin.com/in/utkarsh",
    "twitter": "https://twitter.com/utkarsh"
  }
}
```

### GET /api/projects
```json
{
  "total": 2,
  "projects": [
    {
      "id": 1,
      "title": "Weather App",
      "description": "Real-time weather app",
      "technologies": ["React", "API"],
      "link": "https://github.com/...",
      "image": "/images/weather.jpg",
      "featured": true
    },
    {
      "id": 2,
      "title": "Todo App",
      "description": "Task management app",
      "technologies": ["Vue", "Firebase"],
      "link": "https://github.com/...",
      "image": "/images/todo.jpg",
      "featured": true
    }
  ]
}
```

### POST /api/contact
```json
{
  "success": true,
  "message": "Message received! I will get back to you soon.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Hello",
    "message": "Great portfolio!",
    "timestamp": "2024-12-05T10:30:00.000Z"
  }
}
```

---

## 📈 Growth Path

```
WEEK 1: Basic Full-Stack
┌──────────────────────┐
│ • Deploy on Vercel   │
│ • Working website    │
│ • Basic routes       │
└──────────────────────┘

WEEK 2: Enhanced Features
┌──────────────────────┐
│ • Add database       │
│ • Email alerts       │
│ • More routes        │
└──────────────────────┘

WEEK 3: Professional Level
┌──────────────────────┐
│ • Authentication     │
│ • Admin panel        │
│ • Blog section       │
│ • Analytics          │
└──────────────────────┘

MONTH 2: Advanced
┌──────────────────────┐
│ • Real-time updates  │
│ • User accounts      │
│ • Advanced features  │
│ • Production ready   │
└──────────────────────┘
```

---

This visualization helps understand how all pieces fit together!
