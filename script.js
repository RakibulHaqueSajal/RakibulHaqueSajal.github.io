// JavaScript to handle hover effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // Select all section elements

    sections.forEach(section => {
        // Add event listener for mouseenter (hover)
        section.addEventListener('mouseenter', function() {
            section.classList.add('pop'); // Add class that will trigger the animation
        });

        // Add event listener for mouseleave (hover out)
        section.addEventListener('mouseleave', function() {
            section.classList.remove('pop'); // Remove the class that triggers the animation
        });
    });
});
