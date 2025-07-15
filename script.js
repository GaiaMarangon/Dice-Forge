// Configuration data loaded from YAML
let diceData = null;
let contactData = null;
let siteImages = null;
let siteConfig = null;
let colorThemes = null;
let forgeOptions = null;
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
        forgeOptions = config.forge_options;
        
        console.log('Configuration loaded, forgeOptions:', forgeOptions);
        
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
        
        // Setup forge options (includes rendering)
        setupForgeOptions();
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
        
        // Update RGB values for colors (needed for forge section effects)
        root.style.setProperty('--accent-color-rgb', hexToRgb(theme.accent));
        root.style.setProperty('--primary-color-rgb', hexToRgb(theme.primary));
        root.style.setProperty('--secondary-color-rgb', hexToRgb(theme.secondary));
        root.style.setProperty('--card-bg-rgb', hexToRgb(theme.card_bg));
        
        // Set light text colors based on theme
        if (theme.text === '#ffffff') {
            // Dark theme - use lighter text colors
            root.style.setProperty('--light-text', '#ffffff');
            root.style.setProperty('--muted-text', '#cccccc');
            
            // Additional adjustments for dark theme
            root.style.setProperty('--forge-text', '#ffffff');
            root.style.setProperty('--forge-item-bg', 'rgba(70, 70, 70, 0.7)');
            root.style.setProperty('--forge-heading', '#e0e0e0');
        } else {
            // Light theme - use traditional light colors
            root.style.setProperty('--light-text', '#f4f1e8');
            root.style.setProperty('--muted-text', darkenColor(theme.background, 15));
            
            // Reset forge-specific variables for light theme
            root.style.setProperty('--forge-text', theme.text);
            root.style.setProperty('--forge-item-bg', `rgba(${hexToRgb(theme.card_bg)}, 0.5)`);
            root.style.setProperty('--forge-heading', theme.primary);
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

// Convert hex color to RGB values
function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, '');
    
    // Convert 3-digit hex to 6-digits
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    // Extract RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
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
    
    // Apply custom color palette if available
    if (diceSet.color_palette) {
        const root = document.documentElement;
        root.style.setProperty('--modal-primary-color', diceSet.color_palette.primary);
        root.style.setProperty('--modal-secondary-color', diceSet.color_palette.secondary);
        root.style.setProperty('--modal-accent-color', diceSet.color_palette.accent);
        root.style.setProperty('--modal-bg-color', diceSet.color_palette.modal_bg);
        root.style.setProperty('--modal-text-color', diceSet.color_palette.text);
    }
    
    // Create modal content
    let galleryImages = '';
    if (diceSet.images.individual) {
        diceSet.images.individual.forEach(img => {
            galleryImages += img === "placeholder" ? 
                '<div class="placeholder-image" style="height: 200px; aspect-ratio: 1/1;"><span>Individual Die Image</span></div>' :
                `<img src="${img}" alt="Individual die">`;
        });
    }
    
    let containerImages = '';
    if (diceSet.images.container) {
        containerImages = '<h4>Custom Container</h4><div class="modal-gallery container-gallery">';
        diceSet.images.container.forEach(img => {
            containerImages += img === "placeholder" ? 
                '<div class="placeholder-image" style="height: 200px; aspect-ratio: 1/1;"><span>Container Image</span></div>' :
                `<img src="${img}" alt="Container">`;
        });
        containerImages += '</div>';
    }
    
    const videoSection = diceSet.video === "placeholder" ? 
        '<div class="modal-video"><div class="placeholder-image" style="height: 220px; aspect-ratio: 1/1; max-width: 220px;"><span>Video Placeholder</span></div></div>' :
        `<div class="modal-video"><video controls><source src="${diceSet.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
    
    modalBody.innerHTML = `
        <h2>${diceSet.name}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 2rem;">${diceSet.description}</p>
        
        <div class="set-and-video-container">
            <div>
                <h3>Complete Set</h3>
                <div class="complete-set-container">
                    ${diceSet.images.complete_set === "placeholder" ? 
                        '<div class="placeholder-image" style="height: 220px; aspect-ratio: 1/1; max-width: 220px;"><span>Complete Set Image</span></div>' :
                        `<img src="${diceSet.images.complete_set}" alt="Complete set" class="complete-set-image">`
                    }
                </div>
            </div>
            <div>
                <h3>Showcase Video</h3>
                ${videoSection}
            </div>
        </div>
        
        <h4>Individual Dice</h4>
        <div class="modal-gallery">
            ${galleryImages}
        </div>
        
        ${containerImages}
        
        <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 2rem;">
            <div style="flex: 1; min-width: 250px;">
                <h4>Features</h4>
                <ul style="margin-top: 1rem;">
                    ${diceSet.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            ${diceSet.measurements ? `
            <div style="flex: 1; min-width: 250px;">
                <h4>Dice Measurements</h4>
                <ul style="margin-top: 1rem;">
                    ${diceSet.measurements.map(measurement => `<li>${measurement}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${diceSet.container_measurements ? `
            <div style="flex: 1; min-width: 250px;">
                <h4>${diceSet.container_type === 'coffer' ? 'Coffer Measurements' : 'Long Box Measurements'}</h4>
                <ul style="margin-top: 1rem;">
                    ${diceSet.container_measurements.map(measurement => `<li>${measurement}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('dice-modal').style.display = 'none';
    
    // Reset custom modal colors
    const root = document.documentElement;
    root.style.removeProperty('--modal-primary-color');
    root.style.removeProperty('--modal-secondary-color');
    root.style.removeProperty('--modal-accent-color');
    root.style.removeProperty('--modal-bg-color');
    root.style.removeProperty('--modal-text-color');
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

// Render the forge options from YAML config
function renderForgeOptions() {
    console.log('renderForgeOptions called, forgeOptions:', forgeOptions);
    
    if (!forgeOptions) {
        console.error('No forge options available');
        return;
    }
    
    const forgeOptionsContainer = document.querySelector('.forge-options');
    if (!forgeOptionsContainer) {
        console.error('Forge options container not found');
        return;
    }
    
    // Clear any existing content
    forgeOptionsContainer.innerHTML = '';
    
    // Create blocks for each category
    Object.keys(forgeOptions).forEach(categoryKey => {
        const category = forgeOptions[categoryKey];
        
        // Create category block
        const blockEl = document.createElement('div');
        blockEl.className = 'forge-option-block';
        
        // Create heading
        const headingEl = document.createElement('h3');
        headingEl.textContent = category.title;
        blockEl.appendChild(headingEl);
        
        // Create options grid
        const gridEl = document.createElement('div');
        gridEl.className = 'forge-options-grid';
        
        // Add options
        category.options.forEach(option => {
            const itemEl = document.createElement('div');
            itemEl.className = 'forge-option-item';
            itemEl.setAttribute('data-forge-option', option.name);
            itemEl.setAttribute('data-category', category.title);
            
            // Create icon
            const iconEl = document.createElement('div');
            iconEl.className = 'forge-option-icon';
            iconEl.textContent = option.icon;
            
            // Create text
            const textEl = document.createElement('span');
            textEl.textContent = option.name;
            
            // Add tooltip for description
            itemEl.title = option.description;
            
            // Assemble the option item
            itemEl.appendChild(iconEl);
            itemEl.appendChild(textEl);
            gridEl.appendChild(itemEl);
        });
        
        // Append grid to block
        blockEl.appendChild(gridEl);
        
        // Append block to container
        forgeOptionsContainer.appendChild(blockEl);
    });
}

// Handle Forge Options Selection
function setupForgeOptions() {
    // Render forge options first
    renderForgeOptions();
    
    // Then set up event handlers
    const forgeOptionItems = document.querySelectorAll('.forge-option-item');
    const messageTextarea = document.getElementById('message');
    
    // Track selected options
    let selectedOptions = [];
    
    forgeOptionItems.forEach(item => {
        item.addEventListener('click', function() {
            const option = this.getAttribute('data-forge-option');
            const category = this.getAttribute('data-category');
            
            // Toggle selection
            this.classList.toggle('selected');
            
            // Update selected options
            if (this.classList.contains('selected')) {
                selectedOptions.push({ category, option });
            } else {
                selectedOptions = selectedOptions.filter(
                    opt => !(opt.category === category && opt.option === option)
                );
            }
        });
    });
    
    // Contact button click handler
    const forgeContactButton = document.querySelector('.forge-contact-button');
    if (forgeContactButton) {
        forgeContactButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Create forge message if options are selected
            if (selectedOptions.length > 0) {
                let forgeMessage = "Hi there Artisan!\n\nI'd love to have a custom dice set made with these features:\n\n";
                
                // Group selected options by category
                const groupedOptions = {};
                selectedOptions.forEach(opt => {
                    if (!groupedOptions[opt.category]) {
                        groupedOptions[opt.category] = [];
                    }
                    groupedOptions[opt.category].push(opt.option);
                });
                
                // Add each category and selected options to the message
                for (const category in groupedOptions) {
                    forgeMessage += `• ${category}: ${groupedOptions[category].join(', ')}\n`;
                }
                
                // Set the message in the contact form
                messageTextarea.value = forgeMessage;
            }
            
            // Scroll to contact form
            smoothScroll('#contact');
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
    
    // Setup forge options
    setupForgeOptions();
});
