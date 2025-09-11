/*document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if(!id || id === '#') return;
    const target = document.querySelector(id);
    if(!target) return;

    e.preventDefault();

    const offset = 70;

    const scrollToTarget = () => {
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if(document.body.classList.contains('menu-open')) {
      toggleMenu(false); // zatvori meni
      setTimeout(scrollToTarget, 50); // čekaj 50ms da se zatvori, pa scroll
    } else {
      scrollToTarget();
    }
  });
});
*/
// Reveal animations
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add("active"); } });
},{threshold:0.15});

document.querySelectorAll("section").forEach(sec=>{ sec.classList.add("reveal"); observer.observe(sec); });
document.querySelectorAll(".card").forEach((card,i)=>{ card.classList.add(i%2===0?"slide-left":"slide-right"); observer.observe(card); });
document.querySelectorAll(".gallery .item").forEach((item,i)=>{ item.classList.add(i%2===0?"slide-left":"slide-right"); observer.observe(item); });


const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i=>i.classList.remove('open'));
        if(!isOpen) item.classList.add('open');
      });
    });


document.addEventListener('DOMContentLoaded', () => {
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('menuOverlay');
const links = mobileNav.querySelectorAll('a');

function toggleMenu(force) {
    const isOpen = typeof force === 'boolean' ? force : !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', isOpen);
    mobileNav.classList.toggle('open', isOpen);
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }


burger.addEventListener('click', () => toggleMenu());
overlay.addEventListener('click', () => toggleMenu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });


links.forEach(link => link.addEventListener('click', () => toggleMenu(false)));
});

burger.addEventListener('click', ()=> toggleMenu());
overlay.addEventListener('click', ()=> toggleMenu(false));
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') toggleMenu(false); });


document.getElementById('year').textContent = new Date().getFullYear();


function submitForm(){
    const msg = document.getElementById('formMsg');
    msg.style.display='block';
    msg.textContent = 'Hvala! Javićemo se uskoro.';
}
window.submitForm = submitForm;