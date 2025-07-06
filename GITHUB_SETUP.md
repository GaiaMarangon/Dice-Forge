# 🔗 GitHub Integration Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign up/login
2. Click the green "New" button or go to [github.com/new](https://github.com/new)
3. Repository settings:
   - **Repository name**: `dice-portfolio` (or any name you prefer)
   - **Description**: "Handcrafted resin dice portfolio website"
   - **Public**: ✅ (required for free hosting)
   - **Add README**: ❌ (we already have one)
   - **Add .gitignore**: ❌ (we already have one)
   - **License**: ❌ (optional)
4. Click "Create repository"

## Step 2: Upload Your Code to GitHub

### Method A: Using GitHub Web Interface (Easiest)

1. After creating the repo, you'll see "uploading an existing file"
2. Click "uploading an existing file"
3. Drag and drop ALL your project files:
   ```
   ├── index.html
   ├── style.css
   ├── script.js
   ├── config.yaml
   ├── js-yaml.min.js
   ├── README.md
   ├── DEPLOYMENT_GUIDE.md
   ├── SETUP_GUIDE.md
   ├── netlify.toml
   ├── vercel.json
   ├── .gitignore
   └── images/ (folder)
   └── videos/ (folder)
   ```
4. Add commit message: "Initial upload of dice portfolio"
5. Click "Commit changes"

### Method B: Using Git Commands (If you have Git installed)

1. Open PowerShell in your project folder
2. Run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Dice portfolio website"

# Add GitHub as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Connect to Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Choose "GitHub" and authorize the connection
4. Select your dice portfolio repository
5. Build settings (should auto-detect):
   - **Build command**: (leave empty)
   - **Publish directory**: `.` (current directory)
6. Click "Deploy site"

🎉 **Your site is now live!** You'll get a URL like:
`https://amazing-dice-123456.netlify.app`

## Step 4: Custom Domain (Optional)

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter your domain (e.g., `diceforge.com`)
4. Follow DNS configuration instructions

## Step 5: Making Updates

Now every time you want to update your website:

### Using GitHub Web Interface:
1. Go to your GitHub repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. **Your website updates automatically in 1-2 minutes!**

### Using Git Commands:
```bash
# After making changes to your files locally
git add .
git commit -m "Updated dice sets"
git push
```

## Benefits of GitHub Integration

✅ **Automatic deployments**: Push code → Site updates automatically  
✅ **Version control**: Keep history of all changes  
✅ **Backup**: Your code is safely stored on GitHub  
✅ **Collaboration**: Others can contribute to your site  
✅ **Free hosting**: Works with Netlify, Vercel, GitHub Pages  
✅ **Professional**: Shows technical skills to clients  

## Troubleshooting

**If git commands don't work:**
- Download Git from [git-scm.com](https://git-scm.com/)
- Or use GitHub Desktop: [desktop.github.com](https://desktop.github.com/)
- Or use the web interface method above

**If Netlify deployment fails:**
- Check that all files are in the repository root
- Make sure `netlify.toml` is included
- Check the deploy logs for errors

## Your Workflow Now

1. **Edit config.yaml** → Changes content
2. **Edit style.css** → Changes appearance  
3. **Add images** to `/images/sets/` → New dice photos
4. **Commit & push** → Site updates automatically
5. **Share your live URL** → Show the world your work!

Your dice portfolio is now professionally hosted and automatically updated! 🚀
