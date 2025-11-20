// Enhanced scroll animations for Flag Forge description section
document.addEventListener('DOMContentLoaded', function() {
    const elements = {
        cards: document.querySelectorAll('.description-card'),
        highlight: document.querySelector('.highlight-section'),
        stats: document.querySelectorAll('.stat-item'),
        ctas: document.querySelectorAll('.cta-button')
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add slight delay for staggered effect
                if (entry.target.classList.contains('description-card')) {
                    const index = Array.from(elements.cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${(index * 0.1) + 0.2}s`;
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    Object.values(elements).forEach(elementGroup => {
        if (elementGroup.forEach) {
            elementGroup.forEach(element => observer.observe(element));
        } else if (elementGroup) {
            observer.observe(elementGroup);
        }
    });

    // Enhanced hover effects
    elements.cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // CTA button interactions
    elements.ctas.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Button click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                
                // Simulate action based on button type
                if (this.classList.contains('secondary')) {
                    // Download brochure action
                    console.log('Downloading brochure...');
                    // window.open('brochure.pdf', '_blank');
                } else {
                    // Registration action
                    console.log('Redirecting to registration...');
                    // window.location.href = 'register.html';
                }
            }, 150);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize all transitions
    function initializeTransitions() {
        const allElements = [
            ...elements.cards,
            elements.highlight,
            ...elements.stats,
            ...elements.ctas
        ].filter(el => el);
        
        allElements.forEach(el => {
            el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    }

    initializeTransitions();
});