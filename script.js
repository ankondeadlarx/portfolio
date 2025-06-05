// Initialize interactive elements when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Gradient blob follows mouse with smooth animation
    const blob = document.querySelector('.blob');
    let blobX = 0;
    let blobY = 0;
    const SMOOTHING = 0.15; // Lower = smoother

    document.addEventListener('mousemove', function(e) {
        if (blob) {
            // Calculate target position
            const targetX = e.clientX;
            const targetY = e.clientY;
            
            // Smooth animation
            const dx = targetX - blobX;
            const dy = targetY - blobY;
            
            blobX += dx * SMOOTHING;
            blobY += dy * SMOOTHING;
            
            blob.style.transform = `translate(calc(${blobX}px - 50%), calc(${blobY}px - 50%))`;
        }
    });    // Custom Cursor Logic
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorInner = document.querySelector('.cursor-inner');
    
    function moveCursor(e) {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        
        if (cursorOuter && cursorInner) {
            requestAnimationFrame(() => {
                cursorOuter.style.left = `${mouseX}px`;
                cursorOuter.style.top = `${mouseY}px`;
                cursorInner.style.left = `${mouseX}px`;
                cursorInner.style.top = `${mouseY}px`;
            });
        }
    }

    // Update cursor position on mousemove
    document.addEventListener('mousemove', moveCursor);

    // Interactive elements that trigger cursor animation
    const interactiveSelectors = [
        '.nav-list li a',
        '.cta-button',
        '.project-card',
        '.skill-item',
        '.contact-link'
    ].join(',');

    function addCursorHover() {
        cursorOuter.classList.add('hover');
        cursorInner.classList.add('hover');
    }

    function removeCursorHover() {
        cursorOuter.classList.remove('hover');
        cursorInner.classList.remove('hover');
    }

    // Add hover effects for interactive elements
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest(interactiveSelectors)) {
            addCursorHover();
            if (e.target.closest('.project-card')) {
                e.target.closest('.project-card').style.transform = 'translateY(-8px)';
            }
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest(interactiveSelectors)) {
            removeCursorHover();
            if (e.target.closest('.project-card')) {
                e.target.closest('.project-card').style.transform = 'translateY(0)';
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hide cursor when it leaves the window
    document.addEventListener('mouseout', function(e) {
        if (e.relatedTarget === null) {
            cursorOuter.style.display = 'none';
            cursorInner.style.display = 'none';
        }
    });

    document.addEventListener('mouseover', function(e) {
        cursorOuter.style.display = 'block';
        cursorInner.style.display = 'block';
    });
});
