# How to Add Your Dice Sets

Follow these steps to customize your D&D tavern-themed dice portfolio:

## 1. Prepare Your Images

For your portfolio, gather these types of images:

### Site Images:
- **Hero image**: A tavern scene, workshop, or atmospheric D&D setting
- **About image**: Photo of you crafting, your workspace, or tools

### For each dice set:
- **Main image**: Best showcase photo of the set
- **Individual dice photos**: Close-up shots of specific dice (d20, d12, etc.)
- **Complete set photo**: All dice arranged together
- **Container photos** (if applicable): Custom box, pouch, or container

### Image Guidelines:
- **Format**: JPG or PNG
- **Size**: 1920x1080px or similar high resolution
- **Quality**: High quality, well-lit photos
- **Naming**: Use descriptive names (e.g., `d20.jpg`, `container-open.jpg`)

## 2. Organize Your Files

Create directories for your images:

```
images/
├── hero-tavern.jpg          # Main hero image
├── about-craftsman.jpg      # About section image
└── sets/
    ├── your-set-name/
    │   ├── main.jpg
    │   ├── d20.jpg
    │   ├── d12.jpg
    │   ├── complete-set.jpg
    │   ├── container-closed.jpg
    │   └── container-open.jpg
    └── another-set-name/
        ├── main.jpg
        └── complete-set.jpg

videos/
├── your-set-name-showcase.mp4
└── another-set-name-showcase.mp4
```

## 3. Update config.yaml

Edit the `config.yaml` file to add your content:

```yaml
# Site Images (paths to your hero and about images)
site_images:
  hero: "images/hero-tavern.jpg"
  about: "images/about-craftsman.jpg"

# Update your contact information
contact:
  email: "your.actual.email@example.com"

# Add your dice sets
dice_sets:
  - name: "Your Dice Set Name"
    description: "Detailed description of your dice set, materials used, inspiration, etc."
    features:
      - "Full 7-piece set"
      - "Custom container"
      - "Special finish or material"
    images:
      main: "images/sets/your-set-name/main.jpg"
      individual: 
        - "images/sets/your-set-name/d20.jpg"
        - "images/sets/your-set-name/d12.jpg"
      complete_set: "images/sets/your-set-name/complete-set.jpg"
      container: 
        - "images/sets/your-set-name/container-closed.jpg"
    video: "videos/your-set-name-showcase.mp4"
```

## 4. D&D Tavern Theme Tips

The website now has a medieval tavern appearance with:
- **Warm color palette**: Browns, golds, and creams
- **Medieval styling**: Ornate buttons and borders
- **Atmospheric backgrounds**: Textured and gradient backgrounds
- **Fantasy language**: D&D-inspired copy throughout

### Suggested Hero Images:
- Medieval tavern interior
- Candlelit workshop scene
- Fantasy gaming table setup
- Atmospheric dice rolling scene

### Suggested About Images:
- You crafting at your workspace
- Tools and materials laid out
- Artistic shot of your hands working
- Workshop environment

## 5. Test and Deploy

The rest of the deployment process remains the same as before. The D&D tavern theme will make your dice collection feel like treasures found in a legendary adventure!

## 5. Test Your Site

Before deploying, test your site locally:

1. Open VS Code
2. Use the integrated terminal or run the "Start Local Server" task
3. Visit `http://localhost:8000` in your browser
4. Check that all images and videos load correctly

## 6. Deploy Your Site

Choose one of these free hosting options:

### Netlify (Recommended)
1. Create a GitHub repository and push your code
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → Connect your repository
4. Deploy settings are already configured in `netlify.toml`

### Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your project
4. Deploy (settings are in `vercel.json`)

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

## Tips for Best Results

- **Image optimization**: Compress images to reduce loading times
- **Consistent naming**: Use clear, consistent file names
- **Backup**: Keep backups of your original high-resolution images
- **Regular updates**: Add new sets by following the same structure
- **Test on mobile**: Always check how your site looks on mobile devices

## Troubleshooting

- **Images not loading**: Check file paths in `config.yaml` match your actual file structure
- **YAML errors**: Use a YAML validator to check syntax
- **Local server issues**: Make sure Python is installed, or use any other local server solution
