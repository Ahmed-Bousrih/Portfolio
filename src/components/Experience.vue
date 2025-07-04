<script setup lang="ts">
import { CalendarIcon, BuildingOfficeIcon } from '@heroicons/vue/24/outline'

interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  current: boolean
  achievements: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Medtrust Consulting',
    position: 'Web Development Intern',
    period: '12/2024 - 06/2025',
    description: 'Developed a comprehensive recruitment web application called WorkIt. Leading the full-stack development with modern technologies and best practices.',
    technologies: ['Vue.js', 'Nest.js', 'JWT', 'PostgreSQL', 'Tailwind CSS'],
    current: false,
    achievements: [
      'Designing and implementing the complete application architecture',
      'Developing secure authentication system with JWT',
      'Creating responsive frontend with Vue.js and Tailwind CSS',
      'Building robust backend API with Nest.js and PostgreSQL'
    ]
  },
  {
    id: 2,
    company: 'HDM Network',
    position: 'Web Development Intern',
    period: '04/2023 - 08/2023',
    description: 'Gained comprehensive experience in web development through diverse projects including task management systems, real estate applications, and innovative VR challenges.',
    technologies: ['JavaScript', 'PHP', 'HTML', 'CSS', 'A-Frame', 'Web Scraping'],
    current: false,
    achievements: [
      'Developed a task management application for company dashboard',
      'Built front-end for real estate rental application',
      'Created VR game using A-Frame framework',
      'Implemented web scraper solutions',
      'Served as Team Leader of the development department'
    ]
  }
]

const certifications = [
  { name: 'Front End Development Libraries', provider: 'FreeCodeCamp', date: 'Mars 2023' },
  { name: 'JavaScript Algorithms and Data Structures', provider: 'FreeCodeCamp', date: 'Décembre 2022' },
  { name: 'Responsive Web Design', provider: 'FreeCodeCamp', date: 'Avril 2022' },
  { name: 'Create & Manage Cloud Resources', provider: 'Google Qwicklabs', date: 'Avril 2022' },
  { name: 'CCNA: Introduction to Networks', provider: 'CISCO', date: 'Décembre 2021' },
  { name: 'CCNA: Switching, Routing & Wireless Essentials', provider: 'CISCO', date: 'Décembre 2021' }
]
</script>

<template>
  <section id="experience" class="section experience">
    <div class="container">
      <div class="experience__header">
        <h2 class="experience__title animate-fade-in-up">Professional Experience</h2>
        <p class="experience__subtitle animate-fade-in-up">
          My professional journey and the exciting projects I've worked on
        </p>
      </div>
      
      <div class="experience__timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="timeline-item animate-fade-in-up"
          :class="{ 'timeline-item--current': exp.current }"
        >
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div v-if="index < experiences.length - 1" class="timeline-line"></div>
          </div>
          
          <div class="timeline-content">
            <div class="experience-card">
              <div class="experience-card__header">
                <div class="experience-card__title">
                  <h3 class="position">{{ exp.position }}</h3>
                  <div class="company">
                    <BuildingOfficeIcon class="company-icon" />
                    <span>{{ exp.company }}</span>
                  </div>
                </div>
                <div class="experience-card__period">
                  <CalendarIcon class="period-icon" />
                  <span>{{ exp.period }}</span>
                  <span v-if="exp.current" class="current-badge">Current</span>
                </div>
              </div>
              
              <p class="experience-card__description">{{ exp.description }}</p>
              
              <div class="experience-card__achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li v-for="achievement in exp.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
              
              <div class="experience-card__technologies">
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
      </div>
      
      <div class="certifications">
        <h3 class="certifications__title">Certifications & Training</h3>
        <div class="certifications__grid">
          <div 
            v-for="cert in certifications" 
            :key="cert.name"
            class="certification-card animate-fade-in-up"
          >
            <h4 class="certification-card__name">{{ cert.name }}</h4>
            <p class="certification-card__provider">{{ cert.provider }}</p>
            <span class="certification-card__date">{{ cert.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--bg-primary);
}

.experience__header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.experience__title {
  margin-bottom: var(--spacing-3);
  color: var(--text-primary);
}

.experience__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.experience__timeline {
  max-width: 800px;
  margin: 0 auto var(--spacing-12);
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: var(--spacing-6);
}

.timeline-item--current .timeline-dot {
  background: var(--primary-600);
  box-shadow: 0 0 0 4px rgba(71, 85, 105, 0.3);
}

.timeline-marker {
  position: relative;
  margin-right: var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--neutral-400);
  border: 3px solid var(--bg-primary);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-line {
  width: 2px;
  height: 100px;
  background: var(--neutral-300);
  margin-top: var(--spacing-1);
}

.timeline-content {
  flex: 1;
}

.experience-card {
  background: var(--bg-secondary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-600);
}

.experience-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-3);
  flex-wrap: wrap;
  gap: var(--spacing-2);
}

.experience-card__title .position {
  color: var(--text-primary);
  margin-bottom: var(--spacing-1);
  font-size: 1.25rem;
}

.company {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.company-icon {
  width: 16px;
  height: 16px;
}

.experience-card__period {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.period-icon {
  width: 16px;
  height: 16px;
}

.current-badge {
  background: var(--primary-600);
  color: white;
  padding: 2px 8px;
  border-radius: var(--border-radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
}

.experience-card__description {
  margin-bottom: var(--spacing-3);
  line-height: 1.6;
  color: var(--text-secondary);
}

.experience-card__achievements {
  margin-bottom: var(--spacing-3);
}

.experience-card__achievements h4 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
  font-size: 1rem;
}

.experience-card__achievements ul {
  list-style: none;
  padding: 0;
}

.experience-card__achievements li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-1);
  padding-left: var(--spacing-3);
  position: relative;
}

.experience-card__achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary-600);
  font-weight: bold;
}

.experience-card__technologies {
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

.certifications {
  max-width: 1000px;
  margin: 0 auto;
}

.certifications__title {
  text-align: center;
  margin-bottom: var(--spacing-6);
  color: var(--text-primary);
  font-size: 2rem;
}

.certifications__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
}

.certification-card {
  background: var(--bg-secondary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
  text-align: center;
}

.certification-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-600);
}

.certification-card__name {
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
  font-size: 1.125rem;
}

.certification-card__provider {
  color: var(--primary-600);
  margin-bottom: var(--spacing-1);
  font-weight: 500;
}

.certification-card__date {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .experience__timeline {
    padding-left: var(--spacing-2);
  }
  
  .timeline-marker {
    margin-right: var(--spacing-2);
  }
  
  .experience-card__header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .experience-card__period {
    margin-top: var(--spacing-1);
  }
  
  .certifications__grid {
    grid-template-columns: 1fr;
  }
}
</style>