// Dark/Light mode toggle
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Toggle icon
  toggleBtn.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
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

 // SKILL ANIMATION: fill widths and number count-up on scroll into view
    const skillCards = document.querySelectorAll('.skill-card');
    const options = { root: null, rootMargin: '0px', threshold: 0.50 };

    function animateCard(entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const fills = el.querySelectorAll('.progress-fill');
      fills.forEach(fill => {
        const target = Number(fill.getAttribute('data-target') || el.dataset.percent || 0);
        // set width
        fill.style.width = target + '%';
        // create percent bubble (if not present)
        if (!el.querySelector('.percent-bubble')) {
          const bubble = document.createElement('div');
          bubble.className = 'percent-bubble';
          bubble.textContent = '0%';
          el.querySelector('.progress-wrap').appendChild(bubble);
          // animate count
          let cur = 0;
          const step = Math.max(8, Math.round(2500 / Math.max(1,target)));
          const timer = setInterval(() => {
            cur++;
            bubble.textContent = cur + '%';
            if (cur >= target) clearInterval(timer);
          }, step);
        }
      });
      observer.unobserve(el);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => animateCard(entry));
    }, options);

    skillCards.forEach(card => observer.observe(card));








// Animate skill bars on scroll
// function animateSkills() {
//   const skillsSection = document.getElementById('skills');
//   const skillBars = document.querySelectorAll('.skill-level');
//   const triggerPoint = window.innerHeight * 0.8;

//   if (skillsSection.getBoundingClientRect().top < triggerPoint) {
//     skillBars.forEach(bar => {
//       if (bar.classList.contains('java')) bar.style.width = '90%';
//       else if (bar.classList.contains('html')) bar.style.width='95%';
//       else if (bar.classList.contains('css')) bar.style.width = '85%';
//       else if (bar.classList.contains('js')) bar.style.width = '50%';
//       else if (bar.classList.contains('python')) bar.style.width = '55%';
//       else if (bar.classList.contains('mysql')) bar.style.width = '75%';
//     });
//     window.removeEventListener('scroll', animateSkills);
//   }
// }
// window.addEventListener('scroll', animateSkills);

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