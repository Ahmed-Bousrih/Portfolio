<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const logoEPI = "/Portfolio/LogoEcoles/Logoepi.jpg";
const logoESIEA = "/Portfolio/LogoEcoles/LogoEsiea.png";

const { t } = useI18n();
</script>

<template>
  <section id="about" class="about">
    <div class="about__container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">{{ t("about.title") }}</h2>
        <p class="section-subtitle">{{ t("about.subtitle") }}</p>
      </div>

      <div class="about__content">
        <!-- Text -->
        <div class="about__text">
          <div class="about__intro">
            <h3 class="about__intro-title">{{ t("about.intro.title") }}</h3>
            <p class="about__intro-desc" v-html="t('about.intro.description')"></p>
          </div>

          <div class="about__details">
            <div class="detail-item">
              <h4>{{ t("about.education.title") }}</h4>
              <div class="education-logos">
                <img :src="logoESIEA" alt="ESIEA Logo" />
                <img :src="logoEPI" alt="EPI Logo" />
              </div>
              <p><strong>{{ t("about.education.degree") }}</strong> (08/2019 - 06/2025)</p>
              <p>{{ t("about.education.schools") }}</p>
              <p><em>{{ t("about.education.keyCourses") }}</em></p>
            </div>

            <div class="detail-item">
              <h4>{{ t("about.languages.title") }}</h4>
              <p><strong>Arabic:</strong> {{ t("about.languages.ar") }}</p>
              <p><strong>French:</strong> {{ t("about.languages.fr") }}</p>
              <p><strong>English:</strong> {{ t("about.languages.en") }}</p>
              <p><strong>Polish:</strong> {{ t("about.languages.pl") }}</p>
              <p><strong>German:</strong> {{ t("about.languages.de") }}</p>
            </div>

            <div class="detail-item">
              <h4>{{ t("about.location.title") }}</h4>
              <p>{{ t("about.location.france") }}</p>
              <p>{{ t("about.location.tunisia") }}</p>
              <p><em>{{ t("about.location.relocation") }}</em></p>
            </div>
          </div>

          <div class="about__stats">
            <div class="stat-item">
              <div class="stat-number">{{ t("about.stats.graduation") }}</div>
              <div class="stat-label">{{ t("about.stats.graduationLabel") }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ t("about.stats.technologies") }}</div>
              <div class="stat-label">{{ t("about.stats.technologiesLabel") }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ t("about.stats.projects") }}</div>
              <div class="stat-label">{{ t("about.stats.projectsLabel") }}</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="about__image">
          <div class="about__image-container">
            <img src="/image.png" alt="BOUSRIH Ahmed" class="about__photo" />
            <div class="about__image-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.about {
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  position: relative;
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.2s forwards;
}

.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__intro-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-600);
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.4s forwards;
}

.about__intro-desc {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s forwards;
}

.detail-item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-600);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.8s forwards;
}

.detail-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

:root.dark .detail-item h4 {
  color: var(--primary-300); /* or any accent for dark mode */
}

.detail-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-300), var(--primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about__image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;
}

.about__image-container {
  position: relative;
  width: 300px;
  height: 400px;
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.about__photo:hover {
  transform: scale(1.02);
}

.about__image-decoration {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: 20px;
  z-index: 1;
  opacity: 0.8;
}

.education-logos {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.education-logos img {
  width: 50px;
  height: auto;
  border-radius: 4px;
  transition: transform 0.2s;
}

.education-logos img:hover {
  transform: scale(1.5);
}

/* Animations */
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

/* Responsive */
@media (max-width: 768px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about__image {
    order: -1;
  }
  .about__image-container {
    width: 250px;
    height: 320px;
    margin: 0 auto;
  }
  .about__stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about__container {
    padding: 0 1rem;
  }
  .about__image-container {
    width: 200px;
    height: 280px;
  }
  .detail-item,
  .stat-item {
    padding: 1rem;
  }
}
</style>
