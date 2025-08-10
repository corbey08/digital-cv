        let activeSection = 'home';

        function scrollToSection(sectionId) {
        	setActiveSection(sectionId);
        	const element = document.getElementById(sectionId);
        	if (element) {
        		element.scrollIntoView({
        			behavior: 'smooth'
        		});
        	}
        }

        function setActiveSection(sectionId) {
        	activeSection = sectionId;

        	// Remove active class from all nav buttons
        	const navButtons = document.querySelectorAll('.nav-button');
        	navButtons.forEach(button => {
        		button.classList.remove('active');
        	});

        	// Add active class to the current section button
        	const activeButton = document.querySelector(`[data-section="${sectionId}"]`);
        	if (activeButton) {
        		activeButton.classList.add('active');
        	}
        }

        function handleScroll() {
        	const sections = ['home', 'education', 'career', 'personal'];
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

        window.addEventListener('load', function() {
        	window.addEventListener('scroll', handleScroll);
        });

        window.addEventListener('beforeunload', function() {
        	window.removeEventListener('scroll', handleScroll);
        });