<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(document.documentElement.classList.contains('dark'))

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

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="container">
      <nav class="nav" role="navigation" aria-label="Main Navigation">
        <!-- Brand -->
        <div class="nav__brand">
          <h2 class="nav__brand-text" @click="scrollToSection('home')">BOUSRIH Ahmed</h2>
        </div>

        <!-- Desktop Links -->
        <ul class="nav__links">
          <li><a @click="scrollToSection('home')" href="#home">Home</a></li>
          <li><a @click="scrollToSection('about')" href="#about">About</a></li>
          <li><a @click="scrollToSection('skills')" href="#skills">Skills</a></li>
          <li><a @click="scrollToSection('projects')" href="#projects">Projects</a></li>
          <li><a @click="scrollToSection('experience')" href="#experience">Experience</a></li>
          <li><a @click="scrollToSection('contact')" href="#contact">Contact</a></li>
        </ul>

        <!-- Dark Mode Toggle -->
        <button class="nav__dark-toggle" @click="toggleDarkMode">
          {{ isDarkMode ? '🌙' : '☀️' }}
        </button>

        <!-- Mobile Toggle (Hamburger) -->
        <button
          class="nav__mobile-toggle"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <span class="line" :class="{ 'line--top': true, 'open': isMobileMenuOpen }"></span>
          <span class="line" :class="{ 'line--middle': true, 'open': isMobileMenuOpen }"></span>
          <span class="line" :class="{ 'line--bottom': true, 'open': isMobileMenuOpen }"></span>
        </button>
      </nav>

      <!-- Mobile Menu -->
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
/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid #e5e7eb;
}
.header--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
:root.dark .header {
  background: rgba(15, 23, 42, 0.95);
  border-bottom: 1px solid #374151;
}
:root.dark .header--scrolled {
  background: rgba(15, 23, 42, 0.98);
}

/* Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  position: relative;
}

/* Brand */
.nav__brand-text {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  background-clip: text;          /* standard property */
  -webkit-background-clip: text;  /* vendor-prefixed for Safari */
  -webkit-text-fill-color: transparent;
}
.nav__brand-text:hover {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text; 
}
/* Dark mode brand */ 
:root.dark .nav__brand-text { 
  background: linear-gradient(135deg, #a5b4fc, #c7d2fe); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text; 
} 
:root.dark .nav__brand-text:hover { 
  background: linear-gradient(135deg, #dbeafe, #e0e7ff); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text; 
}

/* Desktop links */
.nav__links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
}
.nav__links a {
  text-decoration: none;
  font-weight: 500;
  color: #6b7280;
  cursor: pointer;
}
.nav__links a:hover {
  color: #2563eb;
}
:root.dark .nav__links a {
  color: #d1d5db;
}
:root.dark .nav__links a:hover {
  color: #93c5fd;
}

/* Dark mode toggle */
.nav__dark-toggle {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #111827;
  padding: 0.25rem;
}
:root.dark .nav__dark-toggle {
  color: #f9fafb;
}

/* Mobile toggle */
.nav__mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  padding: 0;
  z-index: 1100;
}
.nav__mobile-toggle .line {
  display: block;
  height: 2px;
  width: 100%;
  background-color: #1f2937;
  margin: 5px 0;
  transition: all 0.3s ease;
}
:root.dark .nav__mobile-toggle .line {
  background-color: #f9fafb;
}
/* Hamburger animation */
.nav__mobile-toggle .line--top.open {
  transform: rotate(45deg) translate(5px, 5px);
}
.nav__mobile-toggle .line--middle.open {
  opacity: 0;
}
.nav__mobile-toggle .line--bottom.open {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile menu */
.nav__mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.3s ease;
  z-index: 999;
}
.nav__mobile--open {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
:root.dark .nav__mobile {
  background: rgba(15, 23, 42, 0.98);
}

/* Mobile links */
.nav__mobile-links {
  list-style: none;
  padding: 1rem;
  margin: 0;
}
.nav__mobile-links li {
  margin-bottom: 0.5rem;
}
.nav__mobile-links a {
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  color: #6b7280;
}
.nav__mobile-links a:hover {
  color: #2563eb;
}
:root.dark .nav__mobile-links a {
  color: #d1d5db;
}
:root.dark .nav__mobile-links a:hover {
  color: #93c5fd;
}

/* Responsive */
@media (max-width: 768px) {
  .nav__links {
    display: none;
  }
  .nav__mobile-toggle {
    display: block;
  }
}
</style>
