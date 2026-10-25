# 🧠 AI/ML Complete Study Guide

A comprehensive, zero-to-hero study guide covering Python foundations, SQL for Data Science, Mathematics, Machine Learning, Deep Learning & PyTorch, NLP, Generative AI, RAG, AI Agents, and Production Model Deployment.

---

## 📁 Modular Project Structure

The project has been modularized into clean, maintainable section files so you never have to navigate a monolithic HTML document:

```text
aiml-guide/
├── index.html                  # Compiled standalone production file (GitHub Pages & offline ready)
├── css/
│   └── style.css               # Design system, theme variables, syntax highlighting & responsive rules
├── js/
│   └── main.js                 # Smooth scrolling, search filter, theme toggle & dynamic scroll-spy
├── src/
│   ├── template.html           # Shell template: <head>, sidebar navigation, hero header & footer
│   └── chapters/               # 14 standalone, modular chapter files
│       ├── 00-what-is-ai.html
│       ├── 01-setup.html
│       ├── 02-python-basics.html
│       ├── 03-sql.html
│       ├── 04-python-libraries.html
│       ├── 05-math-foundations.html
│       ├── 06-data-preprocessing.html
│       ├── 07-machine-learning.html
│       ├── 08-deep-learning.html
│       ├── 09-nlp.html
│       ├── 10-generative-ai.html
│       ├── 11-rag-agents.html
│       ├── 12-deployment.html
│       └── 13-projects-roadmap.html
├── build.py / build.js         # Blazing fast compiler (<5ms) to bundle src/ into index.html
├── watch.py / watch.js         # Auto-rebuild watcher on file save
└── package.json                # npm scripts for development
```

---

## 🛠️ How to Edit & Maintain

### 1. Editing Content
- To update or add content to any chapter, open its individual file in `src/chapters/` (e.g. `src/chapters/08-deep-learning.html`).
- To update the sidebar navigation, header, or footer, open `src/template.html`.

### 2. Building `index.html`
You can build using either **Node.js** or **Python** (no external packages required):

```bash
# Using Node / npm
npm run build
# OR: node build.js

# Using Python
python build.py
```

### 3. Live Auto-Rebuild on File Save
To automatically rebuild `index.html` as you edit:

```bash
# Using Node / npm
npm run dev
# OR: node watch.js

# Using Python
python watch.py
```

---

## 🚀 Viewing the Guide
- **Direct Offline Viewing**: Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari) by double-clicking it. No web server required!
- **Local Dev Server** (Optional):
  ```bash
  python -m http.server 8000
  # Open http://localhost:8000 in your browser
  ```
- **GitHub Pages**: Since `index.html` is compiled in the repository root, you can enable GitHub Pages directly from the `main` branch with zero configuration.
