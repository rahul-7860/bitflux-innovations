// Simple JS: mobile nav toggle + contact demo
(function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      if(nav.classList.contains('open')){nav.style.display='flex';nav.style.flexDirection='column'}
      else{nav.style.display='none'}
    });
  }

  // Contact form demo: avoid actual submission; show success message
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending...';
      setTimeout(()=>{btn.textContent='Sent ✓';btn.classList.add('sent');alert('Thanks! We received your message (demo).');btn.disabled=false;},900);
    });
  }
})();
