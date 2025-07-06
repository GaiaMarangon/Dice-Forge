<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Resin Dice Collection Portfolio

This is a static portfolio website for showcasing handcrafted resin dice sets. The project uses vanilla HTML, CSS, and JavaScript with YAML configuration for content management.

## Key Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern responsive design with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure DOM manipulation
- **YAML**: Configuration-driven content management
- **js-yaml**: Client-side YAML parsing library

## Project Structure
- `index.html` - Main website structure
- `style.css` - Responsive styling and animations
- `script.js` - Interactive functionality and YAML parsing
- `config.yaml` - Content configuration (dice sets, contact info)
- `images/sets/` - Organized image directories by dice set
- `videos/` - Showcase videos for dice sets

## Design Principles
- **Mobile-first responsive design**
- **Accessibility-friendly** (semantic HTML, proper ARIA labels)
- **Performance optimized** (minimal dependencies, efficient CSS)
- **SEO-friendly** (proper meta tags, semantic structure)

## Content Management
All content is managed through the `config.yaml` file:
- Dice set information (name, description, features)
- Image paths for main, individual, complete set, and container photos
- Video showcase paths
- Contact information and social media links

## Deployment Ready
- Static files only (no server-side dependencies)
- Optimized for free hosting platforms (Netlify, Vercel, GitHub Pages)
- Cross-browser compatible
- Mobile and desktop responsive

When making changes:
1. Maintain the YAML structure for content updates
2. Keep CSS organized with clear component sections
3. Ensure all interactive elements work on mobile devices
4. Test image and video loading for different file sizes
5. Maintain semantic HTML structure for accessibility
