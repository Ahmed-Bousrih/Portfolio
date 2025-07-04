<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__main">
          <div class="footer__brand">
            <h3 class="footer__name">BOUSRIH Ahmed</h3>
            <p class="footer__tagline">Software Engineering Graduate</p>
            <p class="footer__description">
              Passionate about creating innovative solutions and contributing to meaningful projects.
            </p>
          </div>
          
          <div class="footer__links">
            <div class="footer__section">
              <h4 class="footer__section-title">Navigation</h4>
              <ul class="footer__list">
                <li><a href="#home" class="footer__link">Home</a></li>
                <li><a href="#about" class="footer__link">About</a></li>
                <li><a href="#skills" class="footer__link">Skills</a></li>
                <li><a href="#projects" class="footer__link">Projects</a></li>
              </ul>
            </div>
            
            <div class="footer__section">
              <h4 class="footer__section-title">Connect</h4>
              <ul class="footer__list">
                <li><a href="https://github.com/Ahmed-Bousrih" class="footer__link" target="_blank">GitHub</a></li>
                <li><a href="https://linkedin.com/in/ahmed-bousrih" class="footer__link" target="_blank">LinkedIn</a></li>
                <li><a href="mailto:ahmed.bousrih@outlook.com" class="footer__link">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer__bottom">
          <div class="footer__copyright">
            <p>&copy; {{ currentYear }} BOUSRIH Ahmed. All rights reserved.</p>
          </div>
          <button @click="scrollToTop" class="footer__back-to-top">
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--neutral-200);
  padding: var(--spacing-8) 0 var(--spacing-4);
}

.footer__content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer__main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-6);
}

.footer__brand {
  max-width: 300px;
}

.footer__name {
  color: var(--text-primary);
  margin-bottom: var(--spacing-1);
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
}

.footer__tagline {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: var(--spacing-2);
  font-weight: 500;
}

.footer__description {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.6;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-6);
}

.footer__section-title {
  color: var(--text-primary);
  margin-bottom: var(--spacing-3);
  font-size: 1.125rem;
  font-weight: 600;
}

.footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__list li {
  margin-bottom: var(--spacing-2);
}

.footer__link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer__link:hover {
  color: var(--primary-600);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--neutral-200);
}

.footer__copyright p {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
}

.footer__back-to-top {
  background: none;
  border: 1px solid var(--primary-600);
  color: var(--primary-600);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer__back-to-top:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer__main {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
    text-align: center;
  }
  
  .footer__links {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: var(--spacing-3);
    text-align: center;
  }
  
  .footer__brand {
    max-width: none;
  }
}
</style>