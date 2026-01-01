let activeSection = 'home';
let mobileMenuOpen = false;

function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const dropdown = document.getElementById('mobileDropdown');
    if (mobileMenuOpen) {
        dropdown.classList.add('active');
    } else {
        dropdown.classList.remove('active');
    }
}

function scrollToSection(sectionId) {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function scrollToSectionMobile(sectionId) {
    scrollToSection(sectionId);
    toggleMobileMenu();
    setActiveMobileSection(sectionId);
}

function setActiveSection(sectionId) {
    activeSection = sectionId;

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`.nav-button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    setActiveMobileSection(sectionId);
}

function setActiveMobileSection(sectionId) {
    const mobileButtons = document.querySelectorAll('.mobile-nav-button');
    mobileButtons.forEach(button => {
        button.classList.remove('active');
    });

    const activeMobileButton = document.querySelector(`.mobile-nav-button[data-section="${sectionId}"]`);
    if (activeMobileButton) {
        activeMobileButton.classList.add('active');
    }
}

function handleScroll() {
    const sections = ['home', 'projects', 'education', 'career', 'personal'];
    let currentSection = '';

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        }
    });

    if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
    }
}

document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('mobileDropdown');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenuOpen && !dropdown.contains(e.target) && !menuButton.contains(e.target)) {
        toggleMobileMenu();
    }
});

window.addEventListener('load', function() {
    window.addEventListener('scroll', handleScroll);
});

window.addEventListener('beforeunload', function() {
    window.removeEventListener('scroll', handleScroll);
});
