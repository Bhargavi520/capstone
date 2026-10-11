# CareerPilot — Agentic AI Placement & Career Guidance UI

UI-only React + Vite skeleton for the capstone project:

**Agentic AI-Based Placement and Career Guidance Assistant for Students**

## Included

- Modern light dashboard
- React Router navigation
- Reusable UI components
- Sample student data only
- Resume Analyzer
- Career & Skill Gap analysis
- Personalized Learning Roadmap
- Multi-agent Mock Interview UI
- Progress & Insights / feedback loop
- Student Profile
- Responsive layout
- Local demo interactions only

## Not included yet

- Backend
- MongoDB
- Authentication
- Real resume upload/processing
- LLM API
- Agent orchestration
- XGBoost / ML models
- Knowledge graph
- Reinforcement learning
- Real persistence

## Setup

Requirements:
- Node.js 18+ recommended
- npm

Install:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── AgentActivity.jsx
│   ├── AppLayout.jsx
│   ├── EmptyState.jsx
│   ├── PageHeader.jsx
│   ├── ProgressBar.jsx
│   ├── SectionCard.jsx
│   ├── Sidebar.jsx
│   ├── SkillBar.jsx
│   ├── StatCard.jsx
│   └── Topbar.jsx
├── data/
│   └── demoData.js
├── pages/
│   ├── CareerGuidance.jsx
│   ├── Dashboard.jsx
│   ├── LearningRoadmap.jsx
│   ├── MockInterview.jsx
│   ├── Profile.jsx
│   ├── Progress.jsx
│   └── ResumeAnalyzer.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## UI-to-objective mapping

| Capstone objective | UI page |
|---|---|
| Resume understanding | Resume Analyzer |
| Skill-gap identification | Career & Skill Gap |
| Career recommendation | Career & Skill Gap |
| Personalized learning | Learning Roadmap |
| Multi-agent interview | Mock Interview |
| Reflection / progress feedback | Progress & Insights |
| Student context | Profile |
| Overall orchestration | Dashboard Agent Workflow |

## Next implementation phase

Replace each sample-data action with real application services one module at a time. Keep the UI contracts stable so the backend can be connected without redesigning the whole frontend.
