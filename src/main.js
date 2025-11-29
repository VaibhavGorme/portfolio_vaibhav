import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="bg-glow bg-glow-1"></div>
  <div class="bg-glow bg-glow-2"></div>

  <!-- Navbar -->
  <header class="nav">
    <div class="nav-inner">
      <div class="nav-logo">VG<span>.</span></div>
      <nav class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#highlights">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section id="home" class="section hero reveal">
    <div class="container hero-grid">
      <div class="hero-left">
        <p class="hero-tag">Electronics • Embedded • PCB Design</p>
        <h1>Hi, I'm <span class="accent">Vaibhav Gorme</span></h1>
        <h2 class="hero-role">Electronics Engineer</h2>
        <p class="hero-text">
          I design and build circuits, embedded systems and audio electronics –
          from gesture controlled robots to custom 2.1 subwoofer amplifiers, filters and real-world hardware.
        </p>
        <div class="hero-buttons">
          <a href="#projects" class="btn primary">View My Projects</a>
          <a href="#contact" class="btn ghost">Contact Me</a>
          <!-- Replace href with your actual resume file -->
          <a href="Vaibhav_Gorme_Resume.pdf" class="btn ghost" download>Download Resume</a>
        </div>
        <div class="hero-meta">
          <div>
            <span class="meta-label">Email</span>
            <span class="meta-value">202301060034@mitaoe.ac.in</span>
          </div>
          <div>
            <span class="meta-label">GitHub</span>
            <a href="https://github.com/VaibhavGorme" target="_blank" class="meta-value link">
              github.com/VaibhavGorme
            </a>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="profile-card">
          <div class="profile-chip">Electronics Engineer</div>
          <div class="profile-circle">
            <div class="profile-initials">VG</div>
          </div>
          <div class="profile-info">
            <p class="profile-name">Vaibhav Gorme</p>
            <p class="profile-title">B.Tech – Electronics Engineering</p>
            <p class="profile-subtitle">
              Core electronics, embedded systems, PCB design and audio / RF circuits.
            </p>
          </div>
          <div class="profile-stats">
            <div>
              <span class="stat-number">15+</span>
              <span class="stat-label">Hardware Projects</span>
            </div>
            <div>
              <span class="stat-number">8+</span>
              <span class="stat-label">PCB Designs</span>
            </div>
            <div>
              <span class="stat-number">5+</span>
              <span class="stat-label">Embedded Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="section reveal">
    <div class="container">
      <div class="section-header">
        <h2>About Me</h2>
        <p>I am a passionate and dedicated electronics engineer with a strong background
          in circuit design, embedded systems and hardware development. I enjoy designing,
          testing and implementing projects – from gesture-controlled robots to custom
          2.1 subwoofer amplifiers and filter circuits.</p>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <h3>Background</h3>
          <p>
            I am an electronics engineering student with hands-on experience in
            embedded systems, audio amplifier design, sensor interfacing and PCB implementation.
          </p>
          <p>
            I enjoy taking an idea from block diagram → circuit → simulation →
            PCB → soldering → hardware testing → final working prototype.
          </p>
        </div>
        <div class="about-card">
          <h3>What I work with</h3>
          <ul class="about-list">
            <li>Microcontrollers: Arduino, STM32 and other ARM-based MCUs</li>
            <li>Embedded & EV track: CAN tools like Kvaser, BusMaster</li>
            <li>Circuits: Op-amp filters, audio amplifiers, oscillators, sensor interfaces</li>
            <li>Focus: Debugging, measurements, documentation & reliability</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="skills" class="section alt reveal">
    <div class="container">
      <div class="section-header">
        <h2>Skills</h2>
        <p>Core electronics, embedded systems and hardware-focused skills.</p>
      </div>

      <div class="skills-grid">
        <!-- Core Electronics -->
        <div class="skill-col">
          <h3>Core Electronics</h3>

          <div class="skill">
            <div class="skill-head">
              <span>Circuit Design & Analysis</span>
              <span>Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="88"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Analog & Digital Signal Processing</span>
              <span>Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="84"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Filters, Oscillators & Audio Circuits</span>
              <span>Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="86"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>PCB Layout & Prototyping</span>
              <span>Proficient</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="80"></div>
            </div>
          </div>
        </div>

        <!-- Embedded & IoT -->
        <div class="skill-col">
          <h3>Embedded & IoT</h3>

          <div class="skill">
            <div class="skill-head">
              <span>Embedded Systems (Arduino, STM32, MCUs)</span>
              <span>Proficient</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="82"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Hardware Testing & Debugging</span>
              <span>Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="86"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>IoT & Communication Protocols</span>
              <span>Proficient</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="78"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Automotive / EV Bus Tools</span>
              <span>Working Experience</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="72"></div>
            </div>
          </div>
        </div>

        <!-- Programming + Tools -->
        <div class="skill-col">
          <h3>Programming & Tools</h3>

          <!-- Programming bars -->
          <div class="skill">
            <div class="skill-head">
              <span>C / Embedded C</span>
              <span>Proficient</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="82"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>C++</span>
              <span>Proficient</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="78"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Python</span>
              <span>Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="65"></div>
            </div>
          </div>

          <div class="skill">
            <div class="skill-head">
              <span>Verilog (RTL – basic)</span>
              <span>Familiar</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-level="55"></div>
            </div>
          </div>

          <!-- Tools chips -->
          <ul class="chip-list">
            <li>KiCad</li>
            <li>Eagle</li>
            <li>Proteus</li>
            <li>MATLAB</li>
            <li>Simulink</li>
            <li>Arduino IDE</li>
            <li>STM32CubeIDE</li>
            <li>VS Code</li>
            <li>ESP32 / ESP8266</li>
            <li>Kvaser tools</li>
            <li>BusMaster</li>
            <li>Bluetooth</li>
            <li>Zigbee</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience / Highlights -->
  <section id="highlights" class="section alt reveal">
    <div class="container">
      <div class="section-header">
        <h2>Experience & Highlights</h2>
        <p>Where I’ve applied my electronics skills beyond regular coursework.</p>
      </div>
      <div class="about-grid">
        <div class="about-card">
          <h3>Academic & Lab Work</h3>
          <ul class="about-list">
            <li>Designed and tested multiple analog & digital circuits in lab environment.</li>
            <li>Completed PCB design and assembly for audio amplifiers and filter boards.</li>
            <li>Worked with sensors, motor drivers and communication modules in embedded projects.</li>
          </ul>
        </div>
        <div class="about-card">
          <h3>Responsibilities & Team Work</h3>
          <ul class="about-list">
            <li>Led small teams for project planning, documentation and final presentation.</li>
            <li>Handled debugging, wiring and measurement setup for team hardware projects.</li>
            <li>Shared learnings with juniors on PCB design basics and embedded debugging.</li>
          </ul>
        </div>
        <div class="about-card">
          <h3>Achievements & Certifications</h3>
          <ul class="about-list">
            <li>Hands-on experience in EV communication tools (Kvaser, BusMaster) for CAN analysis.</li>
            <li>Completed coursework in embedded systems, VLSI basics and signal processing.</li>
            <li>Presented academic projects covering audio, RF and automation applications.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="section reveal">
    <div class="container">
      <div class="section-header">
        <h2>Projects</h2>
        <p>A selection of electronics, embedded and RF projects I’ve worked on.</p>
      </div>

      <div class="projects-grid">
        <article class="project-card">
          <div class="project-tag">Embedded • Wireless</div>
          <h3>Hand Gesture Controlled Car</h3>
          <p>
            Wireless car controlled using hand gestures with Arduino, ADXL345
            accelerometer and NRF24L01 modules. Designed the control algorithm,
            interfacing and complete circuit.
          </p>
          <ul class="project-tech">
            <li>Arduino</li>
            <li>ADXL345</li>
            <li>NRF24L01</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Audio • PCB</div>
          <h3>2.1 Stereo Subwoofer Amplifier</h3>
          <p>
            Designed and implemented a 2.1 channel audio amplifier with focus on PCB
            layout, grounding, noise reduction and thermal considerations.
          </p>
          <ul class="project-tech">
            <li>Analog Electronics</li>
            <li>PCB Design</li>
            <li>Audio</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Analog • Filters</div>
          <h3>Passive & Active HPF / LPF</h3>
          <p>
            Designed passive RC and active op-amp based high-pass and low-pass filters.
            Calculated cut-off frequency, gain and verified responses through simulation
            and practical breadboard / PCB implementation.
          </p>
          <ul class="project-tech">
            <li>Op-Amp</li>
            <li>Passive RC</li>
            <li>Filters</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Sensors • Utility</div>
          <h3>Water Level Indicator using ULN2003</h3>
          <p>
            Multi-level water tank indicator circuit using probes, transistor interface
            and ULN2003 driver IC to control LEDs / buzzer. Focused on safe sensing and
            reliable indication.
          </p>
          <ul class="project-tech">
            <li>ULN2003</li>
            <li>Transistor Logic</li>
            <li>Indicator Circuit</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">RF • Antenna</div>
          <h3>Microstrip Patch Antenna for 5G</h3>
          <p>
            Designed and simulated a microstrip patch antenna for 5G band, optimising
            dimensions for desired resonance, bandwidth and radiation pattern using EM
            simulation tools and theoretical calculations.
          </p>
          <ul class="project-tech">
            <li>RF Design</li>
            <li>Microstrip</li>
            <li>Antenna Theory</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Embedded • Automation</div>
          <h3>Plant Watering Imitation System (STM32)</h3>
          <p>
            Concept project using STM32 for automatic plant watering imitation with
            sensor readings and control logic (prototype-level design and testing).
          </p>
          <ul class="project-tech">
            <li>STM32</li>
            <li>Embedded C</li>
            <li>Sensors</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Physics • Structure</div>
          <h3>Tensegrity Structure Model</h3>
          <p>
            Built a working tensegrity structure as an engineering physics project and
            demonstrated its stability and mechanics through experiment.
          </p>
          <ul class="project-tech">
            <li>Mechanics</li>
            <li>Model Making</li>
          </ul>
        </article>

        <article class="project-card">
          <div class="project-tag">Electronics • Hobby</div>
          <h3>Metal Detector & Oscillator Circuits</h3>
          <p>
            Experimented with transistor-based oscillator circuits and metal detection
            principles, focusing on resonance and frequency shift.
          </p>
          <ul class="project-tech">
            <li>Transistors</li>
            <li>Oscillator</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="section alt reveal">
    <div class="container">
      <div class="section-header">
        <h2>Contact</h2>
        <p>Let’s talk about projects, internships or collaborations.</p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <h3>Let’s connect</h3>
          <p>
            I’m open to electronics project work, internships and opportunities
            related to embedded systems, PCB design, IoT and EV electronics.
          </p>
          <div class="contact-item">
            <span class="contact-label">Email</span>
            <span class="contact-value">202301060034@mitaoe.ac.in</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">GitHub</span>
            <a class="contact-value link" href="https://github.com/VaibhavGorme" target="_blank">
              github.com/VaibhavGorme
            </a>
          </div>
        </div>

        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <label for="name">Name *</label>
            <input id="name" type="text" required />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input id="email" type="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn primary full">Send Message (Demo)</button>
          <p class="form-status" id="form-status"></p>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-inner">
      <p>© <span id="year"></span> Vaibhav Gorme. All rights reserved.</p>
      <p>Portfolio built with Vite (Rolldown) + HTML, CSS & JavaScript.</p>
    </div>
  </footer>
`;

// ===== JS ANIMATIONS & LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Skill bar animation when skills section enters view
  const skillBars = document.querySelectorAll(".skill-fill");
  const skillsSection = document.getElementById("skills");

  if (skillsSection && skillBars.length) {
    const skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillBars.forEach((bar) => {
              const level = bar.getAttribute("data-level") || "0";
              bar.style.width = level + "%";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    skillsObserver.observe(skillsSection);
  }

  // Section reveal animation
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Contact form (demo only)
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        statusEl.textContent = "Please fill all required fields.";
        statusEl.style.color = "#f97373";
        return;
      }

      statusEl.textContent =
        "Thank you! This is a demo form – no real email is sent.";
      statusEl.style.color = "#22c55e";
      form.reset();
    });
  }
});

// =========================
// NEON CURSOR TRAIL EFFECT
// =========================

const cursorCanvas = document.querySelector("#cursor-trail");

if (cursorCanvas && cursorCanvas.getContext) {
  const cctx = cursorCanvas.getContext("2d");
  const MAX_POINTS = 40;
  const trail = [];

  function resizeCursorCanvas() {
    const dpr = window.devicePixelRatio || 1;

    cursorCanvas.style.width = window.innerWidth + "px";
    cursorCanvas.style.height = window.innerHeight + "px";

    cursorCanvas.width = window.innerWidth * dpr;
    cursorCanvas.height = window.innerHeight * dpr;

    // reset transform then scale
    cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCursorCanvas();
  window.addEventListener("resize", resizeCursorCanvas);

  window.addEventListener("mousemove", (e) => {
    trail.push({
      x: e.clientX,
      y: e.clientY,
      alpha: 1,
    });
    if (trail.length > MAX_POINTS) trail.shift();
  });

  function drawTrail() {
    cctx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

    for (const p of trail) {
      cctx.beginPath();
      cctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
      cctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      cctx.shadowBlur = 25;
      cctx.shadowColor = "rgba(56, 189, 248, 1)";
      cctx.fill();
      p.alpha -= 0.03;
    }

    requestAnimationFrame(drawTrail);
  }

  drawTrail();
}