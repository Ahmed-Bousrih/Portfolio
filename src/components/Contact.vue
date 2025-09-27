<script setup lang="ts">
import { EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/outline";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "ahmed.bousrih@outlook.com",
    href: "mailto:ahmed.bousrih@outlook.com",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Cachan, Ile de France, 94230",
    href: "#",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Lamta, Monastir, Tunisia, 5099",
    href: "#",
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Ahmed-Bousrih", icon: "🐙" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ahmed-bousrih",
    icon: "💼",
  },
  { name: "Email", url: "mailto:ahmed.bousrih@outlook.com", icon: "✉️" },
];

const interests = [
  { icon: "🎮", label: "Gaming" },
  { icon: "💻", label: "Competitive Programming" },
  { icon: "👨‍🏫", label: "Instructor" },
  { icon: "🏆", label: "Event Orgznizer" },
];
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <h2>Get In Touch</h2>
        <p>
          I'm always excited to discuss new opportunities and projects. Let's build
          something amazing together!
        </p>
      </div>

      <div class="cards-wrapper">
        <!-- Contact Info -->
        <div class="card contact-card">
          <h3>Contact Info</h3>
          <div class="contact-items">
            <div v-for="info in contactInfo" :key="info.label" class="contact-item">
              <component :is="info.icon" class="icon" />
              <div>
                <span class="label">{{ info.label }}</span>
                <a
                  :href="info.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="value"
                  >{{ info.value }}</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="card social-card">
          <h3>Connect With Me</h3>
          <div class="social-items">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="social-icon">{{ social.icon }}</span>
              <span class="social-name">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <!-- Interests -->
        <div class="card interests-card">
          <h3>Interests & Activities</h3>
          <div class="interests-items">
            <div
              v-for="interest in interests"
              :key="interest.label"
              class="interest-item"
            >
              <span class="interest-icon">{{ interest.icon }}</span>
              <span class="interest-label">{{ interest.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: var(--bg-secondary);
  padding: 6rem 1.5rem;
  color: var(--text-primary);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.card {
  background: var(--bg-primary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgb(0 0 0 / 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 400px;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgb(0 0 0 / 0.12);
}

.card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-600);
  padding-bottom: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-item .icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--primary-600);
  flex-shrink: 0;
}

.contact-item .label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-muted);
}

.contact-item .value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
}

.contact-item .value:hover {
  color: var(--primary-600);
  text-decoration: underline;
}

.social-items {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  color: var(--text-secondary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.05);
}

.social-link:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgb(0 0 0 / 0.2);
}

.social-icon {
  font-size: 1.25rem;
}

.interests-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.05);
  transition: background 0.3s ease, color 0.3s ease;
}

.interest-item:hover {
  background: var(--primary-100);
  color: var(--primary-600);
}

.interest-icon {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .cards-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
