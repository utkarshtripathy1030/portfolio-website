# GitHub Upload Checklist ✓

Follow these steps in order to upload your portfolio to GitHub professionally.

## Pre-Upload Checklist

- [ ] Project runs without errors (`npm run dev`)
- [ ] All files are in the `portfolio-website` folder
- [ ] `.gitignore` file exists (it does)
- [ ] `README.md` is updated and professional
- [ ] No sensitive data in committed files (check `.env`)
- [ ] `package.json` has correct project info

## Upload Steps (Copy-Paste Ready)

### 1. Open PowerShell and Navigate to Project
```powershell
cd "C:\Users\utkar_51ty\OneDrive\Desktop\portfolio-website"
```

### 2. Initialize Git (One-Time Setup)
```powershell
git init
git config --global user.name "Utkarsh Tripathy"
git config --global user.email "utkarshtripathy1030@gmail.com"
```

### 3. Stage and Commit Files
```powershell
git add .
git commit -m "Initial commit: Full-stack portfolio website"
```

### 4. Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `portfolio-website`
3. Description: `Full-stack portfolio website with Node.js/Express backend`
4. Choose **Public**
5. Click **Create repository**

### 5. Connect and Push to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## After Upload

- [ ] Repository appears on GitHub
- [ ] All files visible
- [ ] README displays correctly
- [ ] Go to repository Settings → Add topics: `portfolio`, `nodejs`, `express`, `fullstack`

## Future Commits (After Making Changes)

```powershell
git add .
git commit -m "Descriptive message about changes"
git push
```

## Professional Commit Messages

Good examples:
- `Add scroll functionality to project rows`
- `Fix contact form validation`
- `Update portfolio with new projects`
- `Improve responsive design for mobile`
- `Add API documentation`

Bad examples:
- `Fix`
- `Update`
- `Changes`
- `asdf`

## GitHub Profile Setup (Optional but Recommended)

1. Go to https://github.com/settings/profile
2. Add profile picture (use your portfolio image)
3. Add bio: "Full-stack developer | Python, JavaScript, Node.js"
4. Add location: "Chennai, India"
5. Add website link: (your portfolio URL when deployed)
6. Pin this repository

## GitHub Profile Link

Once uploaded, share this link:
`https://github.com/YOUR_USERNAME/portfolio-website`

## Troubleshooting

**Q: Git command not found?**
A: Download and install Git from https://git-scm.com/download/win

**Q: Permission denied error?**
A: Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

**Q: Can't see my files on GitHub?**
A: Run `git push` again to upload latest changes

**Q: Accidentally committed something sensitive?**
A: See GitHub's guide on removing sensitive data: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

## Next: Deployment

After GitHub, deploy to hosting:
- **Vercel** (easiest for Node.js)
- **Heroku** (popular choice)
- **Railway** (modern alternative)
- **AWS** (enterprise option)

