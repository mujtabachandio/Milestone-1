// Get the button and skills section elements
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;


toggleButton.addEventListener('click', () => {
  console.log('Button clicked');  
  console.log('Current display:', skillsSection.style.display);  

 
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }

  console.log('New display:', skillsSection.style.display); 
});
