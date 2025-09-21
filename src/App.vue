<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
}
</style>
