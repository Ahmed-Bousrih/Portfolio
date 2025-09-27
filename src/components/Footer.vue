<script setup lang="ts">
import { computed } from "vue";
import { t } from "../translations";

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Section titles
const navTitle = computed(() => t("footer.navigation"));
const connectTitle = computed(() => t("footer.connect"));
const backToTopLabel = computed(() => t("footer.backToTop"));

// Navigation links
const navLinks = computed(() => [
  { name: t("footer.home"), href: "#home" },
  { name: t("footer.about"), href: "#about" },
  { name: t("footer.skills"), href: "#skills" },
  { name: t("footer.projects"), href: "#projects" },
  { name: t("footer.contact"), href: "#contact" },
]);

// Social links (names can stay the same if desired)
const socialLinks = [
  { name: "GitHub", href: "https://github.com/Ahmed-Bousrih" },
  { name: "LinkedIn", href: "https://linkedin.com/in/ahmed-bousrih" },
  { name: "Email", href: "mailto:ahmed.bousrih@outlook.com" },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main">
        <!-- Brand -->
        <div class="footer__brand">
          <h3 class="footer__name">BOUSRIH Ahmed</h3>
          <p class="footer__tagline">{{ t("footer.tagline") }}</p>
          <p class="footer__description">{{ t("footer.description") }}</p>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <!-- Navigation -->
          <div class="footer__section">
            <h4 class="footer__section-title">{{ navTitle }}</h4>
            <ul class="footer__list">
              <li v-for="link in navLinks" :key="link.href">
                <a :href="link.href" class="footer__link">{{ link.name }}</a>
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div class="footer__section">
            <h4 class="footer__section-title">{{ connectTitle }}</h4>
            <ul class="footer__list">
              <li v-for="social in socialLinks" :key="social.name">
                <a :href="social.href" class="footer__link" target="_blank">
                  {{ social.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          &copy; {{ currentYear }} BOUSRIH Ahmed. {{ t("footer.rights") }}
        </p>
        <button @click="scrollToTop" class="footer__back-to-top">
          {{ backToTopLabel }}
        </button>
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
