# Resin Dice Collection Portfolio

A modern, responsive portfolio website to showcase handcrafted resin dice sets. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy deployment.

## Features

- **Responsive Design**: Optimized for both desktop and mobile viewing
- **YAML Configuration**: Easy content management through a single configuration file
- **Image Galleries**: Showcase individual dice, complete sets, and custom containers
- **Video Support**: Display showcase videos for each dice set
- **Contact Form**: Built-in contact functionality
- **Free Deployment**: Ready for deployment on Netlify, Vercel, or GitHub Pages

## Project Structure

```
├── index.html          # Main website file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript functionality
├── config.yaml         # Content configuration file
├── js-yaml.min.js      # YAML parser library
├── images/             # Image directory
│   └── sets/           # Dice set images organized by collection
└── videos/             # Video files for dice showcases
```

## Configuration

Edit the `config.yaml` file to customize your portfolio:

### Contact Information
```yaml
contact:
  email: "your.email@example.com"
  instagram: "https://instagram.com/yourusername"
  facebook: "https://facebook.com/yourpage"
  etsy: "https://etsy.com/shop/yourshop"
```

### Dice Sets
For each dice set, provide:
- **name**: Display name for the set
- **description**: Detailed description of the design and features
- **features**: Array of key features (e.g., "Full 7-piece set", "Custom container")
- **images**: Object containing image paths:
  - `main`: Main showcase image
  - `individual`: Array of individual die images
  - `complete_set`: Complete set photo
  - `container`: Array of container images (optional)
- **video**: Path to showcase video

## Adding Your Content

1. **Images**: Place your images in the `images/sets/[set-name]/` directories
2. **Videos**: Place showcase videos in the `videos/` directory
3. **Configuration**: Update `config.yaml` with your actual file paths and information

## File Organization Example

```
images/sets/
├── mystic-ocean/
│   ├── main.jpg
│   ├── d20.jpg
│   ├── d12.jpg
│   ├── complete-set.jpg
│   ├── container-closed.jpg
│   └── container-open.jpg
├── forest-guardian/
│   ├── main.jpg
│   ├── d20.jpg
│   └── complete-set.jpg
└── ...
```

## Deployment Options

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select source branch
3. Your site will be available at `https://yourusername.github.io/repository-name`

## Local Development

To run locally, you'll need a local server due to YAML file loading requirements:

### Using Python (if available):
```bash
python -m http.server 8000
```

### Using Node.js (if available):
```bash
npx serve .
```

Then open http://localhost:8000 in your browser.

## Customization

- **Colors**: Modify CSS variables in `style.css`
- **Fonts**: Change Google Fonts import in `index.html`
- **Layout**: Adjust grid layouts and spacing in CSS
- **Content**: All content is managed through `config.yaml`

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- Mobile browsers

## Performance Features

- Optimized images and lazy loading ready
- Minimal JavaScript dependencies
- CSS Grid and Flexbox for efficient layouts
- Smooth animations with CSS transitions

## License

This project is open source and available under the MIT License.
