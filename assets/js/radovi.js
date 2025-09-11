
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