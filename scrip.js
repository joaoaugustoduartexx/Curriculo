// Seleciona os elementos
const themeToggleBtn = document.getElementById('theme-toggle');
// Correção: Seleciona o elemento HTML (raiz) onde as variáveis CSS estão definidas
const htmlElement = document.documentElement; 
const icon = themeToggleBtn.querySelector('i');

// Verifica se já existe preferência salva no LocalStorage
const savedTheme = localStorage.getItem('theme');

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        htmlElement.removeAttribute('data-theme');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Aplica o tema ao carregar
if (savedTheme) {
    applyTheme(savedTheme);
}

// Evento de clique
themeToggleBtn.addEventListener('click', () => {
    // Verifica qual é o tema atual checando o atributo na tag HTML
    const isLight = htmlElement.hasAttribute('data-theme');
    
    if (isLight) {
        // Se está claro, muda para escuro (remove o atributo)
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        // Se está escuro, muda para claro (adiciona atributo)
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    }
});