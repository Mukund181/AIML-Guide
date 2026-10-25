
  // Progress bar
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    document.getElementById('progress-bar').style.transform = `scaleX(${scrolled})`;

    // Back to top button
    const btn = document.getElementById('back-to-top');
    if (winScroll > 600) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  // Toggle nav groups
  function toggleNav(el) {
    const group = el.closest('.nav-group');
    group.classList.toggle('open');
  }

  // Highlight active nav section on scroll
  const navSections = document.querySelectorAll('.nav-section');
  const navGroups = document.querySelectorAll('.nav-group');
  window.addEventListener('scroll', () => {
    let current = 0;
    navSections.forEach((sec, i) => {
      const onclickAttr = sec.getAttribute('onclick') || '';
      const match = onclickAttr.match(/scrollTo\(['"]([^'"]+)['"]\)/);
      if (match) {
        const el = document.getElementById(match[1]);
        if (el && window.scrollY >= el.offsetTop - 200) current = i;
      }
    });
    navSections.forEach((el, i) => {
      el.classList.toggle('active', i === current);
    });

    // Auto-open the active group
    navGroups.forEach((g, i) => {
      if (i === current) {
        g.classList.add('open');
      }
    });
  });

  // Search functionality
  function searchTopics(query) {
    const q = query.toLowerCase().trim();
    const sections = document.querySelectorAll('.section');

    sections.forEach(sec => {
      if (!q) {
        sec.style.display = '';
        return;
      }
      const text = sec.textContent.toLowerCase();
      sec.style.display = text.includes(q) ? '' : 'none';
    });
  }

  // Theme Toggle Functionality
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.innerText = isLight ? 'ðŸŒ™' : 'â˜€ï¸';
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  // Restore theme on load
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.innerText = 'ðŸŒ™';
    }
  }

