<template>
  <section id="home" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title">
            <span class="hero__greeting">Hello, I'm</span>
            <span class="hero__name">BOUSRIH Ahmed</span>
          </h1>
          <p class="hero__subtitle">Software Engineering Graduate</p>
          <p class="hero__description">
            I am a recent graduate in Software Engineering from ESIEA Paris, seeking 
            a position in software development where I can apply my skills and 
            contribute to innovative projects.
          </p>
          <div class="hero__actions">
            <a href="#contact" class="btn btn--primary">Get In Touch</a>
            <a href="#projects" class="btn btn--secondary">View My Work</a>
          </div>
        </div>
        <div class="hero__image">
          <div class="hero__image-container">
            <img src="/image.png" alt="BOUSRIH Ahmed" class="hero__photo" />
            <div class="hero__image-bg"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--neutral-50) 0%, var(--neutral-100) 50%, var(--bg-primary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  animation: float 20s ease-in-out infinite;
}

.hero__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
}

.hero__text {
  animation: slideInLeft 1s ease-out;
}

.hero__greeting {
  display: block;
  font-size: 1.25rem;
  color: var(--primary-600);
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.2s forwards;
}

.hero__name {
  display: block;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.4s forwards;
}

.hero__subtitle {
  font-size: 1.5rem;
  color: var(--primary-700);
  font-weight: 600;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s forwards;
}

.hero__description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 500px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.8s forwards;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
}

.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInRight 1s ease-out;
}

.hero__image-container {
  position: relative;
  width: 350px;
  height: 350px;
}

.hero__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--neutral-200);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.hero__photo:hover {
  transform: scale(1.05);
}

.hero__image-bg {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  border-radius: 50%;
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

.btn--primary {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  box-shadow: 0 4px 15px rgba(71, 85, 105, 0.3);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(71, 85, 105, 0.4);
}

.btn--secondary {
  background: transparent;
  color: var(--primary-600);
  border-color: var(--primary-600);
}

.btn--secondary:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-2px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.9; }
}

@media (max-width: 768px) {
  .hero__content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .hero__image {
    order: -1;
  }
  
  .hero__image-container {
    width: 280px;
    height: 280px;
  }
  
  .hero__actions {
    justify-content: center;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero__container {
    padding: 0 1rem;
  }
  
  .hero__image-container {
    width: 240px;
    height: 240px;
  }
  
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}
</style>