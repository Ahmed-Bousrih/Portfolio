<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="section-header">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Get to know more about my background and expertise</p>
      </div>
      
      <div class="about__content">
        <div class="about__text">
          <div class="about__intro">
            <h3>Software Engineering Graduate</h3>
            <p>
              I am a recent graduate in Software Engineering from ESIEA Paris, passionate about 
              creating innovative solutions and contributing to meaningful projects. My academic 
              journey has equipped me with a solid foundation in software development principles 
              and modern technologies.
            </p>
          </div>
          
          <div class="about__details">
            <div class="detail-item">
              <h4>Education</h4>
              <p><strong>Engineering Degree: Computer Science</strong> (08/2019 - 06/2025)</p>
              <p>ESIEA - Laval + ESIEA - Paris, France</p>
              <p><em>Key courses:</em> System Programming, Network Design, Application Architecture and Design, Database Management System, FullStack Development</p>
            </div>
            <div class="detail-item">
              <h4>Languages</h4>
              <p><strong>Arabic:</strong> Native Language</p>
              <p><strong>French:</strong> Intermediate</p>
              <p><strong>English:</strong> 870 TOEIC (2023)</p>
            </div>
            <div class="detail-item">
              <h4>Location</h4>
              <p>Cachan, Ile de France, 94230</p>
            </div>
          </div>
          
          <div class="about__stats">
            <div class="stat-item">
              <div class="stat-number">2025</div>
              <div class="stat-label">Graduate</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Technologies</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Projects</div>
            </div>
          </div>
        </div>
        
        <div class="about__image">
          <div class="about__image-container">
            <img src="/image.png" alt="BOUSRIH Ahmed" class="about__photo" />
            <div class="about__image-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 0;
  background: var(--bg-secondary);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, var(--neutral-100) 50%, transparent 100%);
  opacity: 0.7;
}

.about__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__intro h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-600);
  margin-bottom: 1rem;
}

.about__intro p {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.about__details {
  margin-bottom: 2.5rem;
}

.detail-item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-600);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.detail-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.detail-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-600);
  margin-bottom: 0.5rem;
}

.detail-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.detail-item p:last-child {
  margin-bottom: 0;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.about__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__image-container {
  position: relative;
  width: 300px;
  height: 400px;
}

.about__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.about__photo:hover {
  transform: scale(1.02);
}

.about__image-decoration {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: 20px;
  z-index: 1;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 0;
  }
  
  .about__content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about__image {
    order: -1;
  }
  
  .about__image-container {
    width: 250px;
    height: 320px;
  }
  
  .about__stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about__container {
    padding: 0 1rem;
  }
  
  .about__image-container {
    width: 200px;
    height: 280px;
  }
  
  .detail-item {
    padding: 1rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
}
</style>