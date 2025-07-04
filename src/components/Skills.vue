<script setup lang="ts">
import { CodeBracketIcon, DevicePhoneMobileIcon, ServerIcon, PaintBrushIcon } from '@heroicons/vue/24/outline'

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 85, category: 'Frontend' },
  { name: 'Vue.js', level: 88, category: 'Frontend' },
  { name: 'HTML', level: 95, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'Bootstrap', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PHP', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Nest.js', level: 82, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'NoSQL', level: 75, category: 'Database' },
  { name: 'UML', level: 80, category: 'Database' },
  { name: 'Git', level: 90, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
  { name: 'GitLab', level: 85, category: 'Tools' },
  { name: 'Docker', level: 78, category: 'Tools' },
  { name: 'JWT', level: 80, category: 'Tools' },
  { name: 'Agile', level: 85, category: 'Tools' }
]

const categories = [
  { name: 'Frontend', icon: CodeBracketIcon, color: 'var(--primary-600)' },
  { name: 'Backend', icon: ServerIcon, color: 'var(--primary-700)' },
  { name: 'Database', icon: PaintBrushIcon, color: 'var(--primary-500)' },
  { name: 'Tools', icon: DevicePhoneMobileIcon, color: 'var(--primary-800)' },
]
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="skills__header">
        <h2 class="skills__title animate-fade-in-up">Skills & Technologies</h2>
        <p class="skills__subtitle animate-fade-in-up">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div class="skills__categories">
        <div 
          v-for="category in categories" 
          :key="category.name"
          class="category animate-fade-in-up"
        >
          <div class="category__header">
            <component :is="category.icon" class="category__icon" />
            <h3 class="category__name">{{ category.name }}</h3>
          </div>

          <div class="category__skills">
            <div 
              v-for="skill in skills.filter(s => s.category === category.name)" 
              :key="skill.name"
              class="skill"
            >
              <div class="skill__header">
                <span class="skill__name">{{ skill.name }}</span>
                <span class="skill__level">{{ skill.level }}%</span>
              </div>
              <div class="skill__bar">
                <div 
                  class="skill__fill" 
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category__skills {
  margin-top: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}
.skills {
  background: var(--bg-primary);
}

.skills__header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.skills__title {
  margin-bottom: var(--spacing-3);
  color: var(--text-primary);
}

.skills__subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.skills__categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.category {
  background: var(--bg-secondary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-600);
}

.category__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.category__icon {
  width: 24px;
  height: 24px;
  color: var(--primary-600);
}

.category__name {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.skills__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
}

.skill {
  background: var(--bg-secondary);
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.skill:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.skill__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-2);
}

.skill__name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill__level {
  font-size: 0.875rem;
  color: var(--primary-600);
  font-weight: 600;
}

.skill__bar {
  height: 8px;
  background: var(--neutral-200);
  border-radius: 4px;
  overflow: hidden;
}

.skill__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-600), var(--primary-700));
  border-radius: 4px;
  transition: width 0.8s ease;
}

@media (max-width: 768px) {
  .skills__categories {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .skills__list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .skills__categories {
    grid-template-columns: 1fr;
  }
}
</style>