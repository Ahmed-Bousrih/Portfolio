<script setup lang="ts">
import { computed } from "vue";
import { t } from "../translations";

// Optional: computed version if you want reactive updates
const heroGreeting = computed(() => t("hero.greeting"));
const heroName = computed(() => t("hero.name"));
const heroSubtitle = computed(() => t("hero.subtitle"));
const heroDescription = computed(() => t("hero.description"));
const heroCtaContact = computed(() => t("hero.cta.contact"));
const heroCtaProjects = computed(() => t("hero.cta.projects"));
</script>

<template>
  <section id="home" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <!-- Text -->
        <div class="hero__text">
          <h1 class="hero__title">
            <span class="hero__greeting">{{ heroGreeting }}</span>
            <span class="hero__name">{{ heroName }}</span>
          </h1>
          <p class="hero__subtitle">{{ heroSubtitle }}</p>
          <p class="hero__description" v-html="heroDescription"></p>
<div class="hero__actions">
  <div class="cta-buttons">
    <a href="#contact" class="btn btn--main">{{ heroCtaContact }}</a>
    <a href="#projects" class="btn btn--outline">{{ heroCtaProjects }}</a>
  </div>

  <div class="cv-buttons">
    <a href="/Portfolio/AhmedBousrih(ENG).pdf" target="_blank" rel="noopener noreferrer" class="btn btn--cv">
      English CV
    </a>
    <a href="/Portfolio/AhmedBousrih(FR).pdf" target="_blank" rel="noopener noreferrer" class="btn btn--cv">
      CV Français
    </a>
  </div>
</div>
        </div>

        <!-- Image -->
        <div class="hero__image">
          <div class="hero__image-container">
            <img src="/image.png" alt="Ahmed Bousrih" class="hero__photo" />
            <div class="hero__image-bg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  padding-top: 100px;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
}

.hero__text {
  animation: slideInLeft 1s ease-out forwards;
}

.hero__greeting {
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary) !important;
  opacity: 1 !important;
}

:root.dark .hero__greeting {
  color: #a5b4fc !important;
}

.hero__name {
  display: block;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out 0.4s forwards;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text !important;
  color: var(--primary-700) !important;
}

.hero__subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  animation: fadeInUp 1s ease-out 0.6s forwards;
  color: var(--text-secondary);
}

.hero__description {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px;
  animation: fadeInUp 1s ease-out 0.8s forwards;
  color: var(--text-secondary);
}

.hero__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  animation: fadeInUp 1s ease-out 1s forwards;
  margin-top: 1rem;
}

/* === CTA and CV button grouping === */
.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cv-buttons {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
}

/* === Base button === */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* === Main CTA (Get in Touch) === */
.btn--main {
  background: linear-gradient(135deg, #6366f1, #4338ca);
  color: #fff;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

.btn--main:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
}

/* === Outline CTA (View My Work) === */
.btn--outline {
  background: transparent;
  color: #6366f1;
  border: 2px solid #6366f1;
}

.btn--outline:hover {
  background: linear-gradient(135deg, #6366f1, #4338ca);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
}

/* === CV Buttons === */
.btn--cv {
  font-size: 0.9rem;
  padding: 0.6rem 1.25rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 2px solid #818cf8;
  color: #818cf8;
  background: transparent;
}

.btn--cv:hover {
  background: linear-gradient(135deg, #6366f1, #4338ca);
  color: #fff;
  transform: translateY(-2px);
}

/* === Dark Mode Adjustments === */
:root.dark .btn--main {
  background: linear-gradient(135deg, #818cf8, #4f46e5);
  box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
}

:root.dark .btn--outline {
  color: #a5b4fc;
  border-color: #a5b4fc;
}

:root.dark .btn--cv {
  border-color: #a5b4fc;
  color: #a5b4fc;
}

/* === Image === */
.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 1s ease-out forwards;
}

.hero__image-container {
  position: relative;
  width: 350px;
  height: 350px;
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--neutral-700);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.hero__photo:hover {
  transform: scale(1.05);
}

.hero__image-bg {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  border-radius: 50%;
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

/* === Animations === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero {
    padding-top: 120px;
  }

  .hero__content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero__image {
    order: -1;
  }

  .hero__image-container {
    width: 280px;
    height: 280px;
  }

  .hero__actions {
    align-items: center;
    justify-content: center;
  }

  .cta-buttons,
  .cv-buttons {
    justify-content: center;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero__container {
    padding: 0 1rem;
  }

  .hero__image-container {
    width: 240px;
    height: 240px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}
</style>
