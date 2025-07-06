# 🚀 Free Deployment Guide

Your dice portfolio website can be deployed for free on several platforms. Here are the most popular options:

## 🔸 Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (Instant)
1. Visit [netlify.com](https://www.netlify.com)
2. Sign up for a free account
3. Zip your entire project folder
4. Drag and drop the zip file on the Netlify dashboard
5. Your site is live! You'll get a random URL like `https://amazing-site-123456.netlify.app`

### Method B: GitHub Integration (Best for updates)
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository (public is fine for free)
3. Upload your project files to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
4. Go to [netlify.com](https://www.netlify.com) and sign up
5. Click "New site from Git"
6. Connect your GitHub account
7. Select your repository
8. Deploy settings are already configured in `netlify.toml`
9. Click "Deploy site"

**✨ Your site will auto-update every time you push changes to GitHub!**

---

## 🔸 Option 2: Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static site
6. Click "Deploy"

---

## 🔸 Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be at `https://yourusername.github.io/repository-name`

---

## 🔸 Option 4: Surge.sh (Command Line)

1. Install surge globally:
   ```bash
   npm install -g surge
   ```
2. In your project folder, run:
   ```bash
   surge
   ```
3. Follow the prompts to create an account and choose a domain

---

## 🎨 Custom Domain (Optional)

Once deployed, you can use a custom domain:

### For Netlify:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS setup instructions

### For Vercel:
1. Go to Project settings → Domains
2. Add your domain and follow instructions

### For GitHub Pages:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider

---

## 📱 Sharing Your Site

Once deployed, you can share your site URL with:
- **Clients** for commission requests
- **Friends** to show off your work
- **Social media** to build your brand
- **Portfolio** for job applications
- **D&D groups** for custom dice orders

---

## 🔄 Making Updates

### If using GitHub integration:
1. Edit your files locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. Your site auto-updates in 1-2 minutes!

### If using drag & drop:
1. Make your changes locally
2. Zip the updated folder
3. Drag & drop the new zip file
4. Site updates immediately

---

## 🎯 Pro Tips

1. **Free tier limits**:
   - Netlify: 100GB bandwidth/month (plenty for most sites)
   - Vercel: 100GB bandwidth/month
   - GitHub Pages: 100GB storage, 100GB bandwidth/month

2. **Performance**:
   - Your site is already optimized for fast loading
   - Images will load quickly due to placeholder system
   - YAML configuration makes updates easy

3. **SEO friendly**:
   - Site has proper meta tags
   - Semantic HTML structure
   - Mobile responsive design

4. **Analytics** (optional):
   - Add Google Analytics to track visitors
   - Netlify provides basic analytics on paid plans

---

## 🚨 Quick Start (5 Minutes)

**Fastest way to get online:**

1. Go to [netlify.com](https://www.netlify.com)
2. Create account
3. Zip your project folder
4. Drag & drop the zip
5. **Done!** Share your link: `https://your-site.netlify.app`

Your dice portfolio is now live and accessible worldwide! 🌍✨
