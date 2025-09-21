<script setup lang="ts">
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main">
        <!-- Brand -->
        <div class="footer__brand">
          <h3 class="footer__name">BOUSRIH Ahmed</h3>
          <p class="footer__tagline">Software Engineering Graduate</p>
          <p class="footer__description">
            Passionate about creating innovative solutions and contributing to meaningful
            projects.
          </p>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <div class="footer__section">
            <h4 class="footer__section-title">Navigation</h4>
            <ul class="footer__list">
              <li><a href="#home" class="footer__link">Home</a></li>
              <li><a href="#about" class="footer__link">About</a></li>
              <li><a href="#skills" class="footer__link">Skills</a></li>
              <li><a href="#projects" class="footer__link">Projects</a></li>
              <li><a href="#contact" class="footer__link">Contact</a></li>
            </ul>
          </div>

          <div class="footer__section">
            <h4 class="footer__section-title">Connect</h4>
            <ul class="footer__list">
              <li>
                <a
                  href="https://github.com/Ahmed-Bousrih"
                  class="footer__link"
                  target="_blank"
                  >GitHub</a
                >
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ahmed-bousrih"
                  class="footer__link"
                  target="_blank"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a href="mailto:ahmed.bousrih@outlook.com" class="footer__link">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} BOUSRIH Ahmed. All rights reserved.
        </p>
        <button @click="scrollToTop" class="footer__back-to-top">Back to Top ↑</button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  padding: 3rem 1rem 1.5rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--neutral-200);
}

.footer__main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.footer__brand {
  max-width: 300px;
}

.footer__name {
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.footer__tagline {
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.footer__description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer__section-title {
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  position: relative;
}

.footer__section-title::after {
  content: "";
  display: block;
  width: 40px;
  height: 2px;
  background: var(--primary-600);
  margin-top: 0.25rem;
  border-radius: 1px;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__link {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer__link:hover {
  color: var(--primary-600);
  transform: translateX(2px);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--neutral-200);
  padding-top: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer__copyright {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer__back-to-top {
  background: none;
  border: 1px solid var(--primary-600);
  color: var(--primary-600);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer__back-to-top:hover {
  background: var(--primary-600);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .footer__main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .footer__links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer__bottom {
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
