<script setup lang="ts">
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PaintBrushIcon,
} from "@heroicons/vue/24/outline";
import { computed, onBeforeUnmount, onMounted } from "vue";

interface Skill {
  name: string;
  level: number;
  category: string;
}
import { t } from "../translations";

const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "Vue.js", level: 90, category: "Frontend" },
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },

  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Nest.js", level: 90, category: "Backend" },
  { name: "TypeORM", level: 90, category: "Backend" },
  { name: "PrismaORM", level: 90, category: "Backend" },
  { name: "JWT", level: 85, category: "Backend" },
  { name: "RESTful APIs", level: 90, category: "Backend" },

  { name: "MySQL", level: 85, category: "Database" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "NoSQL", level: 75, category: "Database" },
  { name: "UML", level: 80, category: "Database" },
  { name: "Prisma", level: 85, category: "Database" },
  { name: "Supabase", level: 80, category: "Database" },

  { name: "Git", level: 90, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Docker", level: 78, category: "Tools" },
  { name: "Jira", level: 85, category: "Tools" },
  { name: "Cursor", level: 85, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },
  { name: "Postman", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
];

const categories = [
  { name: "Frontend", icon: CodeBracketIcon, color: "var(--primary-600)" },
  { name: "Backend", icon: ServerIcon, color: "var(--primary-600)" },
  { name: "Database", icon: PaintBrushIcon, color: "var(--primary-600)" },
  { name: "Tools", icon: DevicePhoneMobileIcon, color: "var(--primary-600)" },
];

// Simple helpers
const parsePercent = (s: string | null) => {
  const n = parseInt(s ?? "0", 10);
  return isNaN(n) ? 0 : Math.max(0, Math.min(100, n));
};

// Animate numeric counter inside the SVG <text>
function animateCounter(el: Element | null, to: number, duration = 900) {
  if (!el) return;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const current = Math.round(t * to);
    (el as HTMLElement).textContent = `${current}%`;

    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

// Fill all circles (manual trigger)
const fillSkills = () => {
  // reset first
  resetSkills();

  // then trigger filling after a short delay
  setTimeout(() => {

    const blocks = Array.from(document.querySelectorAll<HTMLElement>(".skill-circle"));

    blocks.forEach((block) => {
      const path = block.querySelector<SVGPathElement>(".circle");
      const text = block.querySelector<SVGTextElement>(".percentage");
      const percent = parsePercent(path?.dataset.percent ?? null);

      if (path) {
        // set transition and dasharray
        path.style.transition = "stroke-dasharray 1.2s ease-out, stroke 0.3s";
        path.style.strokeDasharray = `${percent} 100`;
      }
      animateCounter(text, percent);
    });
  }, 300);
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const section = document.querySelector("#skills");
  if (!section) return;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillSkills();
        }
      });
    },
    { threshold: 0.3 } // 30% visible triggers
  );

  observer.observe(section);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

// Reset back to zero
const resetSkills = () => {
  const paths = Array.from(
    document.querySelectorAll<SVGPathElement>(".skill-circle .circle")
  );
  const texts = Array.from(
    document.querySelectorAll<SVGTextElement>(".skill-circle .percentage")
  );
  paths.forEach((p) => {
    p.style.transition = "stroke-dasharray 0.5s ease";
    p.style.strokeDasharray = "0 100";
  });
  texts.forEach((t) => (t.textContent = "0%"));
};
// Computed translations
const skillsTitle = computed(() => t("skills.title"));
const skillsSubtitle = computed(() => t("skills.subtitle"));
const fillButtonText = computed(() => t("skills.fillButton"));
const resetButtonText = computed(() => t("skills.resetButton"));
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="skills__header">
        <h2 class="skills__title">{{ skillsTitle}}</h2>
        <p class="skills__subtitle">
          {{ skillsSubtitle }}
        </p>

        <div
          style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center"
        >
          <button class="fill-button" @click="fillSkills" aria-label="Fill skills">
             {{ fillButtonText }}
          </button>
          <button class="reset-button" @click="resetSkills" aria-label="Reset skills">
           {{ resetButtonText }}
          </button>
        </div>
      </div>

      <div class="skills__categories">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category"
          :style="{ borderLeftColor: category.color }"
        >
          <div class="category__header">
            <component :is="category.icon" class="category__icon" />
            <h3 class="category__name">{{ category.name }}</h3>
          </div>

          <div class="category__skills">
            <div
              v-for="skill in skills.filter((s) => s.category === category.name)"
              :key="skill.name"
              class="skill-circle"
            >
              <svg
                viewBox="0 0 36 36"
                class="circular-chart"
                role="img"
                :aria-label="skill.name + ' ' + skill.level + '%'"
              >
                <path
                  class="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle"
                  :stroke="category.color"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  :data-percent="skill.level"
                  stroke-dasharray="0 100"
                />
                <text x="18" y="20.35" class="percentage">0%</text>
              </svg>

              <div class="skill-name">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* buttons */
.fill-button,
.reset-button {
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: var(--text-primary);
}

:root.dark .fill-button,
:root.dark .reset-button {
  color: #a5b4fc;
  background: linear-gradient(135deg, var(--neutral-600), var(--neutral-700));
}

/* layout */
.skills {
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 6rem 0;
}
.skills__header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.skills__title {
  font-size: 2rem;
  font-weight: 700;
}
.skills__subtitle {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 720px;
  margin: 0.4rem auto 0;
}

.skills__categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.category {
  background: var(--bg-secondary);
  padding: 1.25rem;
  border-radius: 12px;
  border-left: 4px solid var(--primary-600);
  transition: all 0.25s ease;
}
.category:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.category__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.category__icon {
  width: 24px;
  height: 24px;
}
.category__name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.category__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
}

/* circular meters */
.skill-circle {
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.circular-chart {
  width: 80px;
  height: 80px;
  display: block;
}
.circle-bg {
  fill: none;
  stroke: var(--neutral-200);
  stroke-width: 3.8;
}
.circle {
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: 0 100;
}
.percentage {
  fill: var(--text-primary);
  font-size: 0.6rem;
  text-anchor: middle;
  dominant-baseline: middle;
}

.skill-name {
  font-size: 0.85rem;
  margin-top: 0.35rem;
  color: var(--text-primary);
}

/* responsiveness */
@media (max-width: 768px) {
  .skills__categories {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .skills__categories {
    grid-template-columns: 1fr;
  }

  .category__skills {
    justify-content: center;
  }
}
</style>
