// API Base URL
const API_URL = 'http://localhost:3000/api';

// DOM Elements
const landing = document.getElementById('landing');
const app = document.getElementById('app');
const enterProfile = document.getElementById('enterProfile');
const profileMenuBtn = document.getElementById('profileMenuBtn');
const profileMenu = document.getElementById('profileMenu');
const openSettingsBtn = document.getElementById('openSettings');
const settingsModal = document.getElementById('settingsModal');
const settingsOverlay = document.getElementById('settingsOverlay');
const closeSettingsBtn = document.getElementById('closeSettings');
const doneSettingsBtn = document.getElementById('doneSettings');
const toggleAutoplay = document.getElementById('toggleAutoplay');
const featuredVideo = document.getElementById('featuredVideo');
const searchInput = document.getElementById('searchInput');
const rowFirst = document.getElementById('rowFirst');
const yearSpan = document.getElementById('yearSpan');
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
const welcomeTitle = document.getElementById('welcomeTitle');
const profileNameLanding = document.getElementById('profileNameLanding');
const footerName = document.getElementById('footerName');

yearSpan.textContent = new Date().getFullYear();

const sampleVideos = [
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
];

// Utility Functions
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Fetch portfolio data from API
async function loadPortfolioData() {
  try {
    const response = await fetch(`${API_URL}/portfolio`);
    const data = await response.json();
    
    // Update UI with portfolio data
    welcomeTitle.textContent = `Welcome, ${data.name}`;
    profileNameLanding.textContent = data.name;
    footerName.textContent = data.name;
    
    return data;
  } catch (error) {
    console.error('Error loading portfolio data:', error);
  }
}

// Fetch projects from API
async function loadProjects() {
  try {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    
    return data.projects || [];
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// Build project card
function buildCard(p) {
  const thumb = `https://app.grapesjs.com/api/assets/random-image?query=%22${p.query || 'project portfolio'}%22&w=400&h=250`;
  const hasVideo = p.video && Math.random() > 0.4;
  const videoSrc = hasVideo ? pick(sampleVideos) : '';

  const card = document.createElement('article');
  card.className = 'project-card';
  card.setAttribute('data-title', (p.title || '').toLowerCase());

  const media = document.createElement('div');
  media.className = 'project-card-media';

  const img = document.createElement('img');
  img.src = p.image || thumb;
  img.alt = p.title || 'Project';
  media.appendChild(img);

  if (hasVideo && videoSrc) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    media.appendChild(video);

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  }

  const body = document.createElement('div');
  body.className = 'project-card-body';

  const title = document.createElement('h4');
  title.className = 'project-card-title';
  title.textContent = p.title || 'Untitled Project';

  const desc = document.createElement('p');
  desc.className = 'project-card-desc';
  desc.textContent = p.description || 'No description available';

  const actions = document.createElement('div');
  actions.className = 'project-card-actions';

  const openBtn = document.createElement('button');
  openBtn.textContent = 'Open';
  openBtn.onclick = () => {
    if (p.link) window.open(p.link, '_blank');
  };

  const detailsBtn = document.createElement('button');
  detailsBtn.textContent = 'Details';
  detailsBtn.onclick = () => {
    alert(`${p.title}\n\n${p.description}\n\nTech: ${(p.technologies || []).join(', ')}`);
  };

  actions.appendChild(openBtn);
  actions.appendChild(detailsBtn);

  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(actions);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

// Render projects from API
async function renderProjects() {
  const projects = await loadProjects();
  rowFirst.innerHTML = '';
  
  if (projects.length === 0) {
    rowFirst.innerHTML = '<p style="color: #999;">No projects available yet.</p>';
    return;
  }
  
  shuffle(projects).forEach(p => rowFirst.appendChild(buildCard(p)));
}

// Initialize featured video
function initFeatured() {
  featuredVideo.src = pick(sampleVideos);
}

// Filter cards by search
function filterCards(q) {
  const allCards = document.querySelectorAll('.project-card');
  const query = q.trim().toLowerCase();
  allCards.forEach(card => {
    const title = card.getAttribute('data-title') || '';
    if (!query || title.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Show form alert
function showAlert(message, type = 'success') {
  formAlert.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
  setTimeout(() => {
    formAlert.innerHTML = '';
  }, 5000);
}

// Handle contact form submission
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('contactName').value,
    email: document.getElementById('contactEmail').value,
    subject: document.getElementById('contactSubject').value,
    message: document.getElementById('contactMessage').value
  };

  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      showAlert(result.message, 'success');
      contactForm.reset();
    } else {
      const errorMessage = result.errors?.[0]?.msg || 'Failed to send message';
      showAlert(errorMessage, 'error');
    }
  } catch (error) {
    console.error('Error sending contact message:', error);
    showAlert('Error sending message. Please try again.', 'error');
  }
});

// Scroll header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-navbar');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Landing screen interaction
enterProfile.addEventListener('click', () => {
  landing.classList.add('fade-out');
  setTimeout(() => {
    landing.classList.add('hidden');
    app.classList.remove('hidden');
    app.classList.add('active');
    initFeatured();
    renderProjects();
    loadPortfolioData();
  }, 300);
});

// Profile menu
profileMenuBtn.addEventListener('click', () => {
  profileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!profileMenu.contains(e.target) && !profileMenuBtn.contains(e.target)) {
    profileMenu.classList.add('hidden');
  }
});

// Settings modal
openSettingsBtn.addEventListener('click', () => {
  settingsOverlay.classList.remove('hidden');
  settingsModal.classList.remove('hidden');
  profileMenu.classList.add('hidden');
});

function closeSettings() {
  settingsOverlay.classList.add('hidden');
  settingsModal.classList.add('hidden');
}

settingsOverlay.addEventListener('click', closeSettings);
closeSettingsBtn.addEventListener('click', closeSettings);
doneSettingsBtn.addEventListener('click', closeSettings);

// Autoplay toggle
toggleAutoplay.addEventListener('change', () => {
  const videos = document.querySelectorAll('video');
  videos.forEach(v => {
    if (toggleAutoplay.checked) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  });
});

// Search input
searchInput.addEventListener('input', (e) => filterCards(e.target.value));

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded successfully!');
  console.log(`API Base URL: ${API_URL}`);
});
