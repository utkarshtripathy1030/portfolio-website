# How to Upload Your Portfolio to GitHub Professionally

## Step 1: Create a GitHub Account (if you don't have one)
- Go to https://github.com/signup
- Sign up with your email
- Verify your email

## Step 2: Initialize Git in Your Project

Open PowerShell in your project folder and run:

```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
git init
```

## Step 3: Configure Git (First Time Only)

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email.

## Step 4: Create a .gitignore File

The `.gitignore` file is already in your project and excludes:
- `node_modules/` - Dependencies
- `.env` - Environment variables
- `.DS_Store` - Mac files

## Step 5: Stage and Commit Your Code

```powershell
# Check what files are ready
git status

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website with Node.js backend"
```

## Step 6: Create a Repository on GitHub

1. Log in to GitHub
2. Click the **+** icon in the top-right corner → **New repository**
3. Repository name: `portfolio-website` (or your preferred name)
4. Description: "Full-stack portfolio website with Node.js/Express backend and React-inspired frontend"
5. Choose **Public** (so everyone can see your code)
6. Click **Create repository**

## Step 7: Connect Local Repository to GitHub

GitHub will show you commands. Copy and run them in PowerShell:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 8: Verify on GitHub

- Go to your repository URL: `https://github.com/YOUR_USERNAME/portfolio-website`
- You should see all your files uploaded

## Professional README Example

Your `README.md` should look like this:

```markdown
# Portfolio Website

A full-stack portfolio website built with Node.js/Express backend and modern frontend technologies.

## Features

- **Landing Page**: Netflix-style profile selection
- **Dynamic Projects Section**: Two categories - First-year basics & Second-year advanced projects
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Search**: Filter projects by title
- **Settings Panel**: Customize viewing preferences
- **REST API**: Backend endpoints for portfolio data

## Tech Stack

**Frontend:**
- HTML5, CSS3, Vanilla JavaScript
- Responsive Grid & Flexbox
- Smooth animations & transitions

**Backend:**
- Node.js v18+
- Express.js 4.18.2
- CORS & middleware setup

**Tools:**
- npm (package manager)
- nodemon (development auto-reload)
- dotenv (environment configuration)

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open in browser:
   \`\`\`
   http://localhost:3000
   \`\`\`

## Project Structure

```
portfolio-website/
├── src/
│   ├── server.js              # Main Express server
│   └── routes/
│       ├── portfolio.js       # Portfolio info endpoint
│       ├── projects.js        # Projects CRUD endpoint
│       └── contact.js         # Contact form endpoint
├── public/
│   ├── index.html            # Main portfolio page
│   └── js/
│       └── app.js            # Frontend logic
├── package.json
├── .env
└── README.md
```

## API Endpoints

- `GET /api/portfolio` - Get portfolio information
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add a new project
- `POST /api/contact` - Submit contact form

## Features to Add

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Email notifications for contact form
- [ ] User authentication & admin panel
- [ ] Blog section with markdown support
- [ ] Analytics dashboard

## Development

To run in development mode with auto-reload:

```bash
npm run dev
```

To start in production mode:

```bash
npm start
```

## Deployment

Ready to deploy to:
- **Vercel** (recommended for Node.js)
- **Heroku**
- **Railway**
- **AWS**

See individual platform docs for deployment steps.

## License

MIT License - feel free to use this for your portfolio!

## Contact

- **Email**: utkarshtripathy1030@gmail.com
- **Phone**: +91 99969 80193
- **Location**: Chennai, India

---

Built with ❤️ by Utkarsh Tripathy
```

## Important Notes

1. **Keep Sensitive Info Private**: Never commit `.env` files with real secrets
2. **Use Meaningful Commit Messages**:
   - ✅ Good: "Add contact form validation"
   - ❌ Bad: "Update stuff"

3. **Commit Regularly**: Make commits after completing features:
   ```powershell
   git add .
   git commit -m "Add second project row section"
   git push
   ```

4. **GitHub Profile Tips**:
   - Add a profile picture
   - Write a bio
   - Pin this repository
   - Add topics: `portfolio`, `nodejs`, `express`, `fullstack`

## Troubleshooting

**"fatal: not a git repository"**
- Run `git init` in your project folder

**"Permission denied (publickey)"**
- Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**"Everything up-to-date" but changes not showing**
- Make sure you did `git add .` and `git commit -m "message"`

## Next Steps

1. Deploy to a hosting platform (Vercel, Heroku, etc.)
2. Add a custom domain
3. Share your portfolio link with potential employers
4. Keep updating with new projects!

