// script.js - for future interactivity

// Gradient blob follows mouse
const blob = document.querySelector('.blob');
document.addEventListener('mousemove', function(e) {
    if (blob) {
        blob.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%)`;
    }
});

// Custom Cursor Logic
const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

function moveCursor(e) {
    if (cursorOuter && cursorInner) {
        cursorOuter.style.top = `${e.clientY}px`;
        cursorOuter.style.left = `${e.clientX}px`;
        cursorInner.style.top = `${e.clientY}px`;
        cursorInner.style.left = `${e.clientX}px`;
    }
}
document.addEventListener('mousemove', moveCursor);

// Hover effect for nav links
const navLinkSelectors = '.nav-list li a';
function addCursorHover() {
    cursorOuter.classList.add('hover');
    cursorInner.classList.add('hover');
}
function removeCursorHover() {
    cursorOuter.classList.remove('hover');
    cursorInner.classList.remove('hover');
}
document.addEventListener('mouseover', function(e) {
    if (e.target.closest(navLinkSelectors)) {
        addCursorHover();
    }
});
document.addEventListener('mouseout', function(e) {
    if (e.target.closest(navLinkSelectors)) {
        removeCursorHover();
    }
});
