import './styles/style.css'
import { createNavbar, initNavbar } from './components/Navbar'
import { createHero } from './components/Hero'
import { createAbout } from './components/About'
import { createPortfolio } from './components/Portfolio'
import { createServices } from './components/Services'
import { createPricing } from './components/Pricing'
import { createContact } from './components/Contact'
import { createFooter } from './components/Footer'
import { createLegalModal, initLegalModal } from './components/LegalModal'

const app = document.querySelector('#app')

// 2. INYECTAR EN EL HTML (Orden recomendado)
app.innerHTML = `
  ${createNavbar()}
  ${createHero()}
  ${createAbout()}
  ${createServices()}
  ${createPricing()} 
  ${createPortfolio()}
  ${createContact()}
  ${createFooter()}
  ${createLegalModal()}
`

// 3. INICIALIZAR LÓGICA
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initLegalModal();
});

// Respaldo por si el DOM ya cargó
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initNavbar();
    initLegalModal();
}