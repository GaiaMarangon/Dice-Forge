// Configuration data loaded from YAML
let diceData = null;
let contactData = null;
let siteImages = null;
let siteConfig = null;
let colorThemes = null;
let currentTheme = 'tavern';

// Load YAML configuration
async function loadConfiguration() {
    try {
        const response = await fetch('config.yaml');
        const yamlText = await response.text();
        const config = jsyaml.load(yamlText);
        
        diceData = config.dice_sets;
        contactData = config.contact;
        siteImages = config.site_images;
        siteConfig = config.site_config;
        colorThemes = config.color_themes;
        
        // Set dynamic title
        setRandomTitle();
        
        // Update contact information
        updateContactInfo();
        
        // Update site images
        updateSiteImages();
        
        // Setup theme system
        setupThemeSystem();
        
        // Render portfolio
        renderPortfolio();
    } catch (error) {
        console.error('Error loading configuration:', error);
        // Load fallback data if YAML fails
        loadFallbackData();
    }
}

// Fallback data if YAML loading fails
function loadFallbackData() {
    siteConfig = {
        title_words: [
            "critical hits",
            "randomness",
            "mysteries", 
            "unknown",
            "dice",
            "Partial Differential dicE"
        ]
    };
    
    colorThemes = {
        tavern: {
            name: "Tavern",
            primary: "#2c1810",
            secondary: "#8b4513", 
            accent: "#d4af37",
            background: "#f4f1e8",
            text: "#2c1810",
            card_bg: "#ffffff"
        },
        forest: {
            name: "Enchanted Forest",
            primary: "#1a3d2e",
            secondary: "#2d5a3d",
            accent: "#7fb069", 
            background: "#e8f5e8",
            text: "#1a3d2e",
            card_bg: "#ffffff"
        }
    };
    
    siteImages = {
        hero: "placeholder",
        about: "placeholder"
    };
    
    diceData = [
        {
            name: "Mystic Ocean Set",
            description: "Deep blue resin with swirling silver patterns reminiscent of ocean depths",
            features: ["Full 7-piece set", "Custom container", "Hand-polished"],
            images: {
                main: "placeholder",
                individual: ["placeholder", "placeholder"],
                complete_set: "placeholder",
                container: ["placeholder"]
            },
            video: "placeholder"
        },
        {
            name: "Forest Guardian Set",
            description: "Emerald green with embedded moss-like textures and gold numbering",
            features: ["Full 7-piece set", "Nature-inspired design"],
            images: {
                main: "placeholder",
                individual: ["placeholder", "placeholder", "placeholder"],
                complete_set: "placeholder"
            },
            video: "placeholder"
        },
        {
            name: "Volcanic Fire Set",
            description: "Red and orange swirls with metallic inclusions that catch the light",
            features: ["Full 7-piece set", "Custom wooden container", "Metallic finish"],
            images: {
                main: "placeholder",
                individual: ["placeholder"],
                complete_set: "placeholder",
                container: ["placeholder", "placeholder"]
            },
            video: "placeholder"
        }
    ];
    
    contactData = {
        email: "your.email@example.com"
    };
    
    setRandomTitle();
    updateContactInfo();
    updateSiteImages();
    setupThemeSystem();
    renderPortfolio();
}

// Update contact information
function updateContactInfo() {
    if (contactData) {
        document.getElementById('contact-email').textContent = contactData.email;
    }
}

// Update site images
function updateSiteImages() {
    if (siteImages) {
        // Update hero image
        const heroContainer = document.getElementById('hero-image-container');
        if (siteImages.hero === "placeholder") {
            heroContainer.innerHTML = '<span>Tavern Hero Image Placeholder</span>';
        } else {
            heroContainer.innerHTML = `<img src="${siteImages.hero}" alt="Tavern Hero" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
        }
        
        // Update about image
        const aboutContainer = document.getElementById('about-image-container');
        if (siteImages.about === "placeholder") {
            aboutContainer.innerHTML = '<span>Craftsman at Work Placeholder</span>';
        } else {
            aboutContainer.innerHTML = `<img src="${siteImages.about}" alt="Craftsman at Work" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
        }
    }
}

// Set random title
function setRandomTitle() {
    if (siteConfig && siteConfig.title_words && siteConfig.title_words.length > 0) {
        const randomWord = siteConfig.title_words[Math.floor(Math.random() * siteConfig.title_words.length)];
        const title = `The Forge of ${randomWord}`;
        
        // Update page title
        document.getElementById('site-title').textContent = `${title} - Legendary Resin Dice Sets`;
        
        // Update navigation title
        document.getElementById('nav-title').innerHTML = `⚀ ${title}`;
        
        // Update hero title with new structure
        const dynamicWordElement = document.getElementById('dynamic-word');
        if (dynamicWordElement) {
            // Add animation class for feedback
            dynamicWordElement.classList.add('changing');
            
            // Update text
            dynamicWordElement.textContent = randomWord;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                dynamicWordElement.classList.remove('changing');
            }, 400);
            
            // Add title attribute for accessibility
            dynamicWordElement.title = "Click to change the forge theme";
        }
    }
}

// Setup theme system
function setupThemeSystem() {
    if (colorThemes) {
        // Load saved theme
        const savedTheme = localStorage.getItem('diceTheme');
        if (savedTheme && colorThemes[savedTheme]) {
            currentTheme = savedTheme;
        }
        
        // Apply current theme
        applyTheme(currentTheme);
        
        // Render theme options
        renderThemeOptions();
    }
}

// Apply theme
function applyTheme(themeName) {
    if (colorThemes && colorThemes[themeName]) {
        const theme = colorThemes[themeName];
        const root = document.documentElement;
        
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--secondary-color', theme.secondary);
        root.style.setProperty('--accent-color', theme.accent);
        root.style.setProperty('--background-color', theme.background);
        root.style.setProperty('--text-color', theme.text);
        root.style.setProperty('--card-bg', theme.card_bg);
        
        // Set light text colors based on theme
        if (theme.text === '#ffffff') {
            // Dark theme - use lighter text colors
            root.style.setProperty('--light-text', '#ffffff');
            root.style.setProperty('--muted-text', '#cccccc');
        } else {
            // Light theme - use traditional light colors
            root.style.setProperty('--light-text', '#f4f1e8');
            root.style.setProperty('--muted-text', darkenColor(theme.background, 15));
        }
        
        // Generate lighter shades for gradients
        root.style.setProperty('--primary-light', lightenColor(theme.primary, 20));
        root.style.setProperty('--secondary-light', lightenColor(theme.secondary, 20));
        root.style.setProperty('--accent-light', lightenColor(theme.accent, 20));
        root.style.setProperty('--background-light', lightenColor(theme.background, 10));
        
        currentTheme = themeName;
        localStorage.setItem('diceTheme', themeName);
        
        // Update active theme option
        updateActiveThemeOption();
    }
}

// Helper function to lighten/darken colors
function lightenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// Helper function to darken colors
function darkenColor(color, percent) {
    return lightenColor(color, -percent);
}

// Render theme options
function renderThemeOptions() {
    const themeOptions = document.getElementById('theme-options');
    themeOptions.innerHTML = '';
    
    Object.keys(colorThemes).forEach(themeKey => {
        const theme = colorThemes[themeKey];
        const option = document.createElement('div');
        option.className = `theme-option ${themeKey === currentTheme ? 'active' : ''}`;
        option.dataset.theme = themeKey;
        option.onclick = () => applyTheme(themeKey);
        
        option.style.backgroundColor = theme.background;
        option.style.color = theme.text;
        
        option.innerHTML = `
            <div class="theme-preview">
                <div class="color-dot" style="background-color: ${theme.primary}"></div>
                <div class="color-dot" style="background-color: ${theme.secondary}"></div>
                <div class="color-dot" style="background-color: ${theme.accent}"></div>
            </div>
            <div class="theme-name">${theme.name}</div>
        `;
        
        themeOptions.appendChild(option);
    });
}

// Update active theme option
function updateActiveThemeOption() {
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        }
    });
}

// Open theme modal
function openThemeModal() {
    document.getElementById('theme-modal').style.display = 'block';
}

// Close theme modal
function closeThemeModal() {
    document.getElementById('theme-modal').style.display = 'none';
}

// Render portfolio grid
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';
    
    diceData.forEach((diceSet, index) => {
        const card = createDiceCard(diceSet, index);
        portfolioGrid.appendChild(card);
    });
}

// Create dice card element
function createDiceCard(diceSet, index) {
    const card = document.createElement('div');
    card.className = 'dice-card';
    card.onclick = () => openModal(diceSet);
    
    const features = diceSet.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="dice-card-image">
            ${diceSet.images.main === "placeholder" ? 
                '<span>Main Image Placeholder</span>' : 
                `<img src="${diceSet.images.main}" alt="${diceSet.name}" style="width: 100%; height: 100%; object-fit: cover;">`
            }
        </div>
        <div class="dice-card-content">
            <h3>${diceSet.name}</h3>
            <p>${diceSet.description}</p>
            <div class="dice-features">
                ${features}
            </div>
        </div>
    `;
    
    return card;
}

// Open modal with dice set details
function openModal(diceSet) {
    const modal = document.getElementById('dice-modal');
    const modalBody = document.getElementById('modal-body');
    
    // Create modal content
    let galleryImages = '';
    if (diceSet.images.individual) {
        diceSet.images.individual.forEach(img => {
            galleryImages += img === "placeholder" ? 
                '<div class="placeholder-image" style="height: 200px;"><span>Individual Die Image</span></div>' :
                `<img src="${img}" alt="Individual die" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">`;
        });
    }
    
    let containerImages = '';
    if (diceSet.images.container) {
        containerImages = '<h4>Custom Container</h4><div class="modal-gallery">';
        diceSet.images.container.forEach(img => {
            containerImages += img === "placeholder" ? 
                '<div class="placeholder-image" style="height: 200px;"><span>Container Image</span></div>' :
                `<img src="${img}" alt="Container" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">`;
        });
        containerImages += '</div>';
    }
    
    const videoSection = diceSet.video === "placeholder" ? 
        '<div class="modal-video"><div class="placeholder-image" style="height: 300px;"><span>Video Placeholder</span></div></div>' :
        `<div class="modal-video"><video controls><source src="${diceSet.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
    
    modalBody.innerHTML = `
        <h2>${diceSet.name}</h2>
        <p style="font-size: 1.1rem; color: var(--secondary-color); margin-bottom: 2rem;">${diceSet.description}</p>
        
        <h3>Complete Set</h3>
        <div style="margin-bottom: 2rem;">
            ${diceSet.images.complete_set === "placeholder" ? 
                '<div class="placeholder-image" style="height: 300px;"><span>Complete Set Image</span></div>' :
                `<img src="${diceSet.images.complete_set}" alt="Complete set" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;">`
            }
        </div>
        
        ${videoSection}
        
        <h4>Individual Dice</h4>
        <div class="modal-gallery">
            ${galleryImages}
        </div>
        
        ${containerImages}
        
        <div style="margin-top: 2rem;">
            <h4>Features</h4>
            <ul style="margin-top: 1rem;">
                ${diceSet.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('dice-modal').style.display = 'none';
}

// Mobile navigation toggle
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Greetings, fellow adventurer! Your message has been sent to the forge. The artisan will respond to your quest soon.');
    event.target.reset();
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load configuration and render content
    loadConfiguration();
    
    // Set up event listeners
    document.querySelector('.hamburger').addEventListener('click', toggleMobileNav);
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Dynamic title click event listener
    document.getElementById('dynamic-word').addEventListener('click', function() {
        setRandomTitle();
    });
    
    // Theme switcher event listeners
    document.getElementById('theme-switcher').addEventListener('click', openThemeModal);
    document.querySelector('.theme-close').addEventListener('click', closeThemeModal);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const diceModal = document.getElementById('dice-modal');
        const themeModal = document.getElementById('theme-modal');
        
        if (event.target === diceModal) {
            closeModal();
        }
        if (event.target === themeModal) {
            closeThemeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
            
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });
    
    // Smooth scrolling for CTA button
    document.querySelector('.cta-button').addEventListener('click', function(event) {
        event.preventDefault();
        smoothScroll('#portfolio');
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 24, 16, 0.98)';
        } else {
            navbar.style.background = 'rgba(44, 24, 16, 0.95)';
        }
    });
});
