// Dark/Light mode toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Toggle icon
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀' : '🌙';
});

// Animated typing effect
const typedText = document.getElementById('typed');
const textToType = "Vivek Kotagiri";
let index = 0;

function type() {
  if (index < textToType.length) {
    typedText.textContent += textToType.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}
type();

// Animate skill bars on scroll
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-level');
  const triggerPoint = window.innerHeight * 0.8;

  if (skillsSection.getBoundingClientRect().top < triggerPoint) {
    skillBars.forEach(bar => {
      if (bar.classList.contains('html')) bar.style.width = '90%';
      else if (bar.classList.contains('css')) bar.style.width = '85%';
      else if (bar.classList.contains('js')) bar.style.width = '75%';
      else if (bar.classList.contains('python')) bar.style.width = '70%';
      else if (bar.classList.contains('mysql')) bar.style.width = '50%';
    });
    window.removeEventListener('scroll', animateSkills);
  }
}
window.addEventListener('scroll', animateSkills);

// Download resume button functionality
document.getElementById('downloadResumeBtn').addEventListener('click', () => {
  // If your resume PDF is named 'Vivek Resume.pdf' and placed in the same folder,
  // this will trigger the download.
  const link = document.createElement('a');
  link.href = 'Vivek Resume.pdf';
  link.download = 'Vivek Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});