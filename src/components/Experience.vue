<script setup lang="ts">
import { CalendarIcon, BuildingOfficeIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { t } from "../translations";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
  achievements: string[];
  logo: string;
}

// Section titles
const expTitle = computed(() => t("experience.title"));
const expSubtitle = computed(() => t("experience.subtitle"));
const expAchievementsTitle = computed(() => t("experience.achievementsTitle"));
const expCertificationsTitle = computed(() =>
  t("experience.certificationsTitle")
);
const expCurrent = computed(() => t("experience.currentBadge"));

// Experiences from translations
const experiences = computed<Experience[]>(() => {
  return Object.entries(t("experience.experiences") as Record<string, any>).map(
    ([id, exp]) => ({
      id,
      ...exp,
      logo:
        id === "1"
          ? "/Portfolio/LogosEntreprises/Sw.jpg"
          : id === "2"
          ? "/Portfolio/LogosEntreprises/Medtrust.png"
          : "/Portfolio/LogosEntreprises/HDM.jpg",
      technologies:
        id === "1"
          ? ["TypeScript", "Nest.js", "Next.js", "PostgreSQL", "Jira", "Git"]
          : id === "2"
          ? ["Vue.js", "Nest.js", "JWT", "PostgreSQL", "Tailwind CSS"]
          : ["JavaScript", "PHP", "HTML", "CSS", "A-Frame", "Web Scraping"],
      current: id === "1", // mark only first as current
    })
  );
});

// Certifications from translations
const certifications = computed(() =>
  Object.values(t("experience.certifications") as Record<string, any>)
);
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="experience__header">
        <h2>{{ expTitle }}</h2>
        <p>{{ expSubtitle }}</p>
      </div>

      <div class="timeline">
        <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
          <div class="timeline-dot" :class="{ current: exp.current }"></div>
          <div class="timeline-card">
            <div class="timeline-card-header">
              <div>
                <h3>{{ exp.position }}</h3>
                <div class="company">
                  <img
                    v-if="exp.logo"
                    :src="exp.logo"
                    :alt="exp.company + ' logo'"
                    class="company-logo"
                  />
                  <BuildingOfficeIcon v-else class="company-icon" />
                  <span>{{ exp.company }}</span>
                </div>
              </div>
              <div class="period">
                <CalendarIcon class="period-icon" />
                <span>{{ exp.period }}</span>
                <span v-if="exp.current" class="current-badge">
                  {{ expCurrent }}
                </span>
              </div>
            </div>

            <p>{{ exp.description }}</p>

            <div class="achievements">
              <h4 class="achievements-title">{{ expAchievementsTitle }}</h4>
              <ul>
                <li v-for="ach in exp.achievements" :key="ach">{{ ach }}</li>
              </ul>
            </div>

            <div class="technologies">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="certifications">
        <h3>{{ expCertificationsTitle }}</h3>
        <div class="certifications__grid">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="certification-card"
          >
            <h4>{{ cert.name }}</h4>
            <p>{{ cert.provider }}</p>
            <span>{{ cert.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-title {
  font-size: 1rem; /* smaller than default h4 */
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  padding-top: 10px;
}
.experience {
  background: var(--bg-primary);
  padding: 50px 20px;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}
.experience__header {
  text-align: center;
  margin-bottom: 50px;
}
.experience__header h2 {
  color: var(--text-primary);
  margin-bottom: 10px;
}
.experience__header p {
  color: var(--text-secondary);
}

/* Timeline */
.timeline {
  position: relative;
  margin: 0;
  padding: 0;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 20px;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--text-secondary);
  border-radius: 2px;
}

/* Timeline Item */
.timeline-item {
  position: relative;
  margin-bottom: 50px;
  padding-left: 60px;
}
.timeline-dot {
  position: absolute;
  left: 12px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--text-secondary);
  border: 3px solid var(--bg-primary);
}
.timeline-dot.current {
  background: var(--primary);
}

/* Card */
.timeline-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.timeline-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.timeline-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}
.company {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}
.company-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 4px;
  background: var(--bg-primary);
}
.company-logo:hover {
  transform: scale(1.5);
}
.company-icon {
  width: 20px;
  height: 20px;
}
.period {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-secondary);
}
.period-icon {
  width: 16px;
  height: 16px;
}
.current-badge {
  background: var(--primary-500);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
}
.achievements ul {
  list-style: none;
  padding-left: 16px;
}
.achievements li::before {
  content: "▸";
  margin-right: 5px;
  color: var(--primary);
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
.tech-tag {
  background: var(--bg-primary);
  color: var(--primary);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
}

/* Certifications */
.certifications {
  margin-top: 50px;
}
.certifications h3 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 20px;
}
.certifications__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.certification-card {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-item {
    padding-left: 40px;
  }
  .timeline-card-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
