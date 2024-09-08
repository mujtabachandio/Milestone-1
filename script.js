// Get the button and skills section elements
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    console.log('Button clicked');
    console.log('Current display:', skillsSection.style.display);
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
    console.log('New display:', skillsSection.style.display);
});
