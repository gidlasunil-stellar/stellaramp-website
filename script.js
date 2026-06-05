// Mobile menu
const burger=document.getElementById('burger');
const navLinks=document.getElementById('navLinks');
if(burger){burger.addEventListener('click',()=>navLinks.classList.toggle('open'));}
// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(a=>{
  a.addEventListener('click',e=>{
    if(window.innerWidth<=900){e.preventDefault();a.parentElement.classList.toggle('open-sub');}
  });
});
// Scroll reveal
const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=(i%3*0.08)+'s';obs.observe(el);
});
// Nav bg on scroll
window.addEventListener('scroll',()=>{
  const n=document.querySelector('nav');
  if(window.scrollY>40)n.style.background='rgba(10,22,40,0.95)';
  else n.style.background='rgba(10,22,40,0.85)';
});

// Contact form -> WhatsApp
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = (document.getElementById('f-name').value || '').trim();
    const phone = (document.getElementById('f-phone').value || '').trim();
    const service = document.getElementById('f-service').value || '';
    const budget = document.getElementById('f-budget').value || '';
    const msg = (document.getElementById('f-msg').value || '').trim();

    if (!name || !phone) {
      alert('Please enter at least your name and phone number.');
      return;
    }

    let text = "New enquiry from Stellar AMP website%0A%0A";
    text += "Name: " + encodeURIComponent(name) + "%0A";
    text += "Phone: " + encodeURIComponent(phone) + "%0A";
    if (service) text += "Service: " + encodeURIComponent(service) + "%0A";
    if (budget) text += "Budget: " + encodeURIComponent(budget) + "%0A";
    if (msg) text += "Message: " + encodeURIComponent(msg) + "%0A";

    const waUrl = "https://wa.me/918790575336?text=" + text;
    window.open(waUrl, "_blank");
  });
}
