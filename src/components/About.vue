<script setup lang="ts">
import { computed } from "vue";
import { t } from "../translations"; // import your translations

const logoEPI = "/Portfolio/LogoEcoles/Logoepi.jpg";
const logoESIEA = "/Portfolio/LogoEcoles/LogoEsiea.png";

// Computed properties for reactivity
const aboutTitle = computed(() => t("about.title"));
const aboutSubtitle = computed(() => t("about.subtitle"));

const aboutIntroTitle = computed(() => t("about.intro.title"));
const aboutIntroDesc = computed(() => t("about.intro.description"));

const educationTitle = computed(() => t("about.education.title"));
const educationDegree = computed(() => t("about.education.degree"));
const educationSchools = computed(() => t("about.education.schools"));
const educationKeyCourses = computed(() => t("about.education.keyCourses"));

const locationTitle = computed(() => t("about.location.title"));
const locationFrance = computed(() => t("about.location.france"));
const locationTunisia = computed(() => t("about.location.tunisia"));
const locationRelocation = computed(() => t("about.location.relocation"));

const statsGraduation = computed(() => t("about.stats.graduation"));
const statsGraduationLabel = computed(() => t("about.stats.graduationLabel"));
const statsTechnologies = computed(() => t("about.stats.technologies"));
const statsTechnologiesLabel = computed(() =>
  t("about.stats.technologiesLabel")
);
const statsProjects = computed(() => t("about.stats.projects"));
const statsProjectsLabel = computed(() => t("about.stats.projectsLabel"));
// language names
const languagesArName = computed(() => t("about.languages.names.ar"));
const languagesFrName = computed(() => t("about.languages.names.fr"));
const languagesEnName = computed(() => t("about.languages.names.en"));
const languagesPlName = computed(() => t("about.languages.names.pl"));
const languagesDeName = computed(() => t("about.languages.names.de"));

// language levels
const languagesArLevel = computed(() => t("about.languages.levels.ar"));
const languagesFrLevel = computed(() => t("about.languages.levels.fr"));
const languagesEnLevel = computed(() => t("about.languages.levels.en"));
const languagesPlLevel = computed(() => t("about.languages.levels.pl"));
const languagesDeLevel = computed(() => t("about.languages.levels.de"));
</script>

<template>
  <section id="about" class="about">
    <div class="about__container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">{{ aboutTitle }}</h2>
        <p class="section-subtitle">{{ aboutSubtitle }}</p>
      </div>

      <div class="about__content">
        <!-- Text -->
        <div class="about__text">
          <div class="about__intro">
            <h3 class="about__intro-title">{{ aboutIntroTitle }}</h3>
            <p class="about__intro-desc" v-html="aboutIntroDesc"></p>
          </div>

          <div class="about__details">
            <div class="detail-item">
              <h4>{{ educationTitle }}</h4>
              <div class="education-logos">
                <img :src="logoESIEA" alt="ESIEA Logo" />
                <img :src="logoEPI" alt="EPI Logo" />
              </div>
              <p>
                <strong>{{ educationDegree }}</strong> (08/2019 - 06/2025)
              </p>
              <p>{{ educationSchools }}</p>
              <p>
                <em>{{ educationKeyCourses }}</em>
              </p>
            </div>

            <div class="detail-item">
              <h4>{{ t("about.languages.title") }}</h4>
              <p>
                <strong>{{ languagesArName }}</strong
                >: {{ languagesArLevel }}
              </p>
              <p>
                <strong>{{ languagesFrName }}</strong
                >: {{ languagesFrLevel }}
              </p>
              <p>
                <strong>{{ languagesEnName }}</strong
                >: {{ languagesEnLevel }}
              </p>
              <p>
                <strong>{{ languagesPlName }}</strong
                >: {{ languagesPlLevel }}
              </p>
              <p>
                <strong>{{ languagesDeName }}</strong
                >: {{ languagesDeLevel }}
              </p>
            </div>

            <div class="detail-item">
              <h4>{{ locationTitle }}</h4>
              <p>{{ locationFrance }}</p>
              <p>{{ locationTunisia }}</p>
              <p>
                <em>{{ locationRelocation }}</em>
              </p>
            </div>
          </div>

          <div class="about__stats">
            <div class="stat-item">
              <div class="stat-number">{{ statsGraduation }}</div>
              <div class="stat-label">{{ statsGraduationLabel }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ statsTechnologies }}</div>
              <div class="stat-label">{{ statsTechnologiesLabel }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ statsProjects }}</div>
              <div class="stat-label">{{ statsProjectsLabel }}</div>
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
