// Menu lateral
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
// const closeSidebarBtn = document.getElementById('closeSidebar'); // Removido pois o "X" foi eliminado

if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
      menuBtn.classList.remove('active'); // Remove animação X
    } else {
      sidebar.style.width = '250px';
      menuBtn.classList.add('active'); // Adiciona animação X
    }
  });
}

/* Remove a parte do closeSidebarBtn porque você tirou o botão X do menu
if (closeSidebarBtn && sidebar) {
  closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
  });
}
*/

// Formulário de Login (opcional, caso use loginForm em alguma página)
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

if (loginBtn && loginForm) {
  loginBtn.addEventListener('click', () => {
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
  });
}

// Modal Premium
const openBtn = document.getElementById('openPremiumModal');
const modal = document.getElementById('premiumModal');
const closeBtn = document.getElementById('closePremiumModal');

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}
