<script setup lang="ts">
import { CalendarIcon, BuildingOfficeIcon } from "@heroicons/vue/24/outline";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
  achievements: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "SW Consulting",
    position: "Full Stack Developer",
    period: "08/2025 - Present",
    description:
      "Developed scalable APIs and revamped the Credit Win web application for banks, enhancing system reliability and performance.",
    technologies: ["TypeScript", "Nest.js", "Next.js", "PostgreSQL", "Jira", "Git"],
    current: true,
    achievements: [
      "Designed and implemented RESTful APIs for core banking features including user roles, OVH mailing system, and banking feasibility calculations",
      "Optimized Prisma database schema and queries for large-scale banking data",
      "Built reusable DTOs, validation pipes, and error handling utilities to standardize backend logic",
      "Collaborated with frontend teams to ensure smooth Next.js integration and data consistency",
      "Contributed to agile development with Jira, Git, and code reviews to maintain high code quality",
    ],
    logo: "/Portfolio/LogosEntreprises/Sw.jpg",
  },
  {
    id: 2,
    company: "Medtrust Consulting",
    position: "Web Development Intern",
    period: "12/2024 - 06/2025",
    description:
      "Led full-stack development of WorkIt, a recruitment web app, implementing modern technologies and best practices.",
    technologies: ["Vue.js", "Nest.js", "JWT", "PostgreSQL", "Tailwind CSS"],
    current: false,
    achievements: [
      "Designed and implemented the complete application architecture",
      "Developed secure authentication system with JWT",
      "Built responsive frontend with Vue.js and Tailwind CSS",
      "Created robust backend API with Nest.js and PostgreSQL",
    ],
    logo: "/Portfolio/LogosEntreprises/Medtrust.png",
  },
  {
    id: 3,
    company: "HDM Network",
    position: "Web Development Intern",
    period: "04/2023 - 08/2023",
    description:
      "Built web applications including task management systems, real estate platforms, and an innovative VR game, gaining diverse development experience.",
    technologies: ["JavaScript", "PHP", "HTML", "CSS", "A-Frame", "Web Scraping"],
    current: false,
    achievements: [
      "Developed a task management application for company dashboard",
      "Built frontend for real estate rental application",
      "Created a VR game using A-Frame framework",
      "Implemented web scraping solutions for data collection",
      "Served as Team Leader of the development department",
    ],
    logo: "/Portfolio/LogosEntreprises/HDM.jpg",
  },
];

const certifications = [
  {
    name: "Front End Development Libraries",
    provider: "FreeCodeCamp",
    date: "March 2023",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    provider: "FreeCodeCamp",
    date: "December 2022",
  },
  {
    name: "Responsive Web Design",
    provider: "FreeCodeCamp",
    date: "April 2022",
  },
  {
    name: "Create & Manage Cloud Resources",
    provider: "Google Qwicklabs",
    date: "April 2022",
  },
  {
    name: "CCNA: Introduction to Networks",
    provider: "CISCO",
    date: "December 2021",
  },
  {
    name: "CCNA: Switching, Routing & Wireless Essentials",
    provider: "CISCO",
    date: "December 2021",
  },
];
</script>

<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="experience__header">
        <h2>Professional Experience</h2>
        <p>My professional journey and the exciting projects I've worked on</p>
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
                <span v-if="exp.current" class="current-badge">Current</span>
              </div>
            </div>

            <p>{{ exp.description }}</p>

            <div class="achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li v-for="ach in exp.achievements" :key="ach">{{ ach }}</li>
              </ul>
            </div>

            <div class="technologies">
              <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="certifications">
        <h3>Certifications & Training</h3>
        <div class="certifications__grid">
          <div v-for="cert in certifications" :key="cert.name" class="certification-card">
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
