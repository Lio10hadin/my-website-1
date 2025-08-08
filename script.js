// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle?.addEventListener('click', ()=> {
  nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
  nav.style.flexDirection = 'column';
});

// contact opens user's email client
function contactSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Website contact from ' + name);
  const body = encodeURIComponent(message + '\n\n— ' + name);
  window.location.href = `mailto:haadinhameed@gmail.com?subject=${subject}&body=${body}`;
}
