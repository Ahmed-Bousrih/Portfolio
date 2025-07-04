<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="['header', { 'header--scrolled': isScrolled }]"
  >
    <div class="container">
      <nav class="nav">
        <div class="nav__brand">
          <h2>BOUSRIH Ahmed</h2>
        </div>
        
        <ul class="nav__links">
          <li><a @click="scrollToSection('home')" href="#home">Home</a></li>
          <li><a @click="scrollToSection('about')" href="#about">About</a></li>
          <li><a @click="scrollToSection('skills')" href="#skills">Skills</a></li>
          <li><a @click="scrollToSection('projects')" href="#projects">Projects</a></li>
          <li><a @click="scrollToSection('experience')" href="#experience">Experience</a></li>
          <li><a @click="scrollToSection('contact')" href="#contact">Contact</a></li>
        </ul>
        
        <button 
          class="nav__mobile-toggle"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </nav>
      
      <div :class="['nav__mobile', { 'nav__mobile--open': isMobileMenuOpen }]">
        <ul class="nav__mobile-links">
          <li><a @click="scrollToSection('home')" href="#home">Home</a></li>
          <li><a @click="scrollToSection('about')" href="#about">About</a></li>
          <li><a @click="scrollToSection('skills')" href="#skills">Skills</a></li>
          <li><a @click="scrollToSection('projects')" href="#projects">Projects</a></li>
          <li><a @click="scrollToSection('experience')" href="#experience">Experience</a></li>
          <li><a @click="scrollToSection('contact')" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--neutral-200);
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-lg);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-2) 0;
}

.nav__brand h2 {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.nav__links {
  display: flex;
  list-style: none;
  gap: var(--spacing-4);
  margin: 0;
}

.nav__links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav__links a:hover {
  color: var(--primary-600);
}

.nav__mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: var(--spacing-1);
}

.nav__mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--neutral-200);
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.nav__mobile--open {
  transform: translateY(0);
  opacity: 1;
}

.nav__mobile-links {
  list-style: none;
  padding: var(--spacing-4);
  margin: 0;
}

.nav__mobile-links li {
  margin-bottom: var(--spacing-2);
}

.nav__mobile-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav__mobile-links a:hover {
  color: var(--primary-600);
}

@media (max-width: 768px) {
  .nav__links {
    display: none;
  }
  
  .nav__mobile-toggle {
    display: block;
  }
  
  .nav__mobile {
    display: block;
  }
}
</style>