<script setup lang="ts">
import { CodeBracketIcon } from "@heroicons/vue/24/outline";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WorkIt - Full-Stack Recruitment App",
    description:
      "Full-stack recruitment platform with JWT-based authentication, PostgreSQL backend, and responsive Vue.js + TailwindCSS frontend for seamless candidate and employer management.",
    image: new URL("../assets/logoworkit.jpg", import.meta.url).href,
    technologies: [
      "Vue.js",
      "Nest.js",
      "JWT",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeScript",
      "TypeORM",
    ],
    githubUrl: "https://github.com/Ahmed-Bousrih/Workit",
    featured: true,
    year: "2024-2025",
  },
  {
    id: 2,
    title: "City Trip Mapper - Interactive Travel Planner",
    description:
      "Interactive travel planner built with React and Mapbox API. Users can plan trips, mark destinations, and visualize routes on dynamic maps.",
    image: new URL("../assets/citytrip.png", import.meta.url).href,
    technologies: ["React.js", "Mapbox API", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Ahmed-Bousrih/City-Trip-Mapper",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Certification Management System",
    description:
      "Web application for generating and managing certificates for educational institutions, featuring a secure admin dashboard and user management system.",
    image: new URL("../assets/logodiplome.svg", import.meta.url).href,
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "PHPMailer",
      "FTP",
      "PHP GD Library",
      "PHPmyAdmin",
    ],
    githubUrl: "https://github.com/Ahmed-Bousrih/Diplomes",
    featured: false,
    year: "2024",
  },
  {
    id: 4,
    title: "CheckMyHTTPS - SSL/TLS Verifier",
    description:
      "Browser extension and mobile app to verify SSL/TLS certificates, ensuring secure website connections and protecting users from insecure sites.",
    image: new URL("../assets/Checkmyhttps.png", import.meta.url).href,
    technologies: [
      "JavaScript",
      "Mobile Development",
      "Security",
      "Browser Extensions",
    ],
    githubUrl: "https://github.com/checkmyhttps/checkmyhttps",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    title: "CMDB REST API - IT Infrastructure Manager",
    description:
      "TypeScript-based REST API for managing IT infrastructure and configuration items, providing scalable and reliable endpoints for CMDB operations.",
    image: new URL("../assets/CMDBlogo.png", import.meta.url).href,
    technologies: ["TypeScript", "Node.js", "REST API", "Database", "Prisma"],
    githubUrl: "https://github.com/Ahmed-Bousrih/CMBD",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "Student Grades App - Academic Performance Tracker",
    description:
      "Web application for schools to manage classes, subjects, and student grades, with visualization features for monitoring academic performance.",
    image: new URL("../assets/grades.jpg", import.meta.url).href,
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHPmyAdmin",
      "XAMPP",
    ],
    githubUrl: "https://github.com/Ahmed-Bousrih/Student-Grades-PHP-",
    featured: false,
    year: "2020",
  },
  {
    id: 7,
    title: "Football Quiz - Interactive SPA",
    description:
      "Single-page quiz application with 10 football questions, built using vanilla HTML, CSS, and JavaScript for interactive learning and fun.",
    image: new URL("../assets/quizz.png", import.meta.url).href,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "Local Storage",
    ],
    githubUrl: "https://github.com/Ahmed-Bousrih/Football-Quizz-Basic-WEB",
    featured: false,
    year: "2019",
  },
  {
    id: 8,
    title: "Minesweeper Console Game",
    description:
      "Console-based Minesweeper game developed in C, featuring both English and Tunisian Arabic instructions for enhanced accessibility.",
    image: new URL("../assets/mines.jpg", import.meta.url).href,
    technologies: ["C", "Console Application"],
    githubUrl: "https://github.com/Ahmed-Bousrih/Minesweeper-in-c",
    featured: false,
    year: "2020",
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="projects__header">
        <h2 class="projects__title animate-fade-in-up">Featured Projects</h2>
        <p class="projects__subtitle animate-fade-in-up">
          A selection of projects that highlight my skills, problem-solving, and
          creativity.
        </p>
      </div>

      <div class="projects__featured">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="project-card project-card--featured animate-fade-in-up"
        >
          <div class="project-card__image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-card__overlay">
              <div class="project-card__actions">
                <a
                  :href="project.githubUrl"
                  class="action-btn action-btn--code"
                  title="View Code"
                  target="_blank"
                  rel="noopener"
                >
                  <CodeBracketIcon class="w-5 h-5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
          <div class="project-card__content">
            <div class="project-card__header">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <span class="project-card__year">{{ project.year }}</span>
            </div>
            <p class="project-card__description">{{ project.description }}</p>
            <div class="project-card__technologies">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="projects__other">
        <h3 class="projects__other-title">Other Projects</h3>
        <div class="projects__grid">
          <div
            v-for="project in otherProjects"
            :key="project.id"
            class="project-card animate-fade-in-up"
          >
            <div class="project-card__image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-card__overlay">
                <div class="project-card__actions">
                  <a
                    :href="project.githubUrl"
                    class="action-btn action-btn--code"
                    title="View Code"
                    target="_blank"
                    rel="noopener"
                  >
                    <CodeBracketIcon class="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card__content">
              <div class="project-card__header">
                <h4 class="project-card__title">{{ project.title }}</h4>
                <span class="project-card__year">{{ project.year }}</span>
              </div>
              <p class="project-card__description">{{ project.description }}</p>
              <div class="project-card__technologies">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--bg-secondary);
}

.projects__header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.projects__title {
  margin-bottom: var(--spacing-3);
  color: var(--text-primary);
}

.projects__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.projects__featured {
  margin-bottom: var(--spacing-12);
}

.projects__other-title {
  text-align: center;
  margin-bottom: var(--spacing-6);
  color: var(--text-primary);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-4);
}

.project-card {
  background: var(--bg-primary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-600);
}

.project-card--featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-bottom: var(--spacing-6);
}

.project-card__image {
  position: relative;
  overflow: hidden;
  height: 250px;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card--featured .project-card__image {
  height: 350px;
}

.project-card__image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  margin: auto;
  transition: transform 0.3s ease;
}

.project-card:hover .project-card__image img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .project-card__image {
    height: 200px;
  }
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__actions {
  display: flex;
  gap: var(--spacing-3);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius-md);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.action-btn--code {
  background: transparent;
  color: white;
  border-color: white;
}

.action-btn--code:hover {
  background: white;
  color: black;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

.project-card__content {
  padding: var(--spacing-4);
}

.project-card--featured .project-card__content {
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-2);
  gap: var(--spacing-2);
}

.project-card__title {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.25rem;
  flex: 1;
}

.project-card--featured .project-card__title {
  font-size: 1.75rem;
}

.project-card__year {
  font-size: 0.875rem;
  color: var(--primary-600);
  font-weight: 500;
  background: var(--neutral-100);
  padding: 4px 10px;
  border-radius: var(--border-radius-sm);
  white-space: nowrap;
}

.project-card__description {
  margin-bottom: var(--spacing-3);
  color: var(--text-secondary);
  line-height: 1.6;
}

.project-card__technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-1);
}

.tech-tag {
  padding: 4px 8px;
  background: var(--neutral-100);
  color: var(--primary-600);
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .project-card--featured {
    grid-template-columns: 1fr;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }

  .project-card__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-card__actions {
    flex-direction: column;
    gap: var(--spacing-2);
  }

  .action-btn {
    justify-content: center;
  }
}
</style>
