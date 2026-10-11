export const student = {
  name: "Bhargavi Dasari",
  initials: "BD",
  degree: "B.Tech CSE",
  university: "GITAM University",
  targetRole: "Full Stack Developer",
  profileCompletion: 82,
};

export const stats = [
  { label: "Profile completion", value: "82%", change: "+12%", tone: "blue" },
  { label: "Skill match", value: "74%", change: "+8%", tone: "violet" },
  { label: "Learning progress", value: "61%", change: "+14%", tone: "green" },
  { label: "Interview readiness", value: "68%", change: "+9%", tone: "orange" },
];

export const skills = [
  { name: "Java", level: 82, status: "Strong" },
  { name: "DSA", level: 70, status: "Good" },
  { name: "React.js", level: 76, status: "Good" },
  { name: "Node.js", level: 62, status: "Developing" },
  { name: "SQL", level: 58, status: "Developing" },
  { name: "System Design", level: 38, status: "Gap" },
];

export const requiredSkills = [
  { name: "Java", current: 82, required: 75 },
  { name: "React.js", current: 76, required: 70 },
  { name: "Node.js", current: 62, required: 75 },
  { name: "SQL", current: 58, required: 72 },
  { name: "System Design", current: 38, required: 65 },
  { name: "DSA", current: 70, required: 80 },
];

export const careerRoles = [
  {
    title: "Full Stack Developer",
    match: 88,
    description: "Build end-to-end web applications across frontend, backend and databases.",
    skills: ["React.js", "Node.js", "SQL", "REST APIs"],
    demand: "High demand",
  },
  {
    title: "Java Backend Developer",
    match: 82,
    description: "Develop scalable backend services and APIs using Java and Spring.",
    skills: ["Java", "Spring Boot", "SQL", "REST APIs"],
    demand: "High demand",
  },
  {
    title: "Data Analyst",
    match: 71,
    description: "Turn business data into insights using SQL, Python and visualization.",
    skills: ["SQL", "Python", "Excel", "Power BI"],
    demand: "Growing",
  },
];

export const learningItems = [
  {
    id: 1,
    title: "Master SQL Joins & Window Functions",
    skill: "SQL",
    type: "Practice",
    duration: "2h 30m",
    progress: 72,
    priority: "High",
  },
  {
    id: 2,
    title: "Node.js REST API Fundamentals",
    skill: "Node.js",
    type: "Course",
    duration: "4h 10m",
    progress: 45,
    priority: "High",
  },
  {
    id: 3,
    title: "System Design for Beginners",
    skill: "System Design",
    type: "Video",
    duration: "3h 20m",
    progress: 20,
    priority: "High",
  },
  {
    id: 4,
    title: "DSA: Graphs & Shortest Paths",
    skill: "DSA",
    type: "Practice",
    duration: "3h 00m",
    progress: 64,
    priority: "Medium",
  },
];

export const interviewQuestions = [
  {
    id: 1,
    category: "Java",
    difficulty: "Medium",
    question: "Explain the difference between an interface and an abstract class in Java. When would you use each?",
  },
  {
    id: 2,
    category: "DSA",
    difficulty: "Medium",
    question: "How would you find the first non-repeating character in a string? Explain your approach and complexity.",
  },
  {
    id: 3,
    category: "React",
    difficulty: "Easy",
    question: "What is the purpose of React state, and how is it different from props?",
  },
];

export const activities = [
  { time: "10 min ago", title: "Interview Evaluator Agent", detail: "Reviewed your Java answer", icon: "check" },
  { time: "1 hr ago", title: "Learning Agent", detail: "Updated SQL learning priority", icon: "book" },
  { time: "Yesterday", title: "Skill Gap Agent", detail: "Found 3 priority skill gaps", icon: "target" },
  { time: "Yesterday", title: "Resume Parsing Agent", detail: "Extracted 14 skills from resume", icon: "file" },
];

export const weeklyProgress = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 48 },
  { day: "Thu", value: 72 },
  { day: "Fri", value: 64 },
  { day: "Sat", value: 82 },
  { day: "Sun", value: 68 },
];

export const resumeData = {
  education: [
    { title: "B.Tech — Computer Science & Engineering", subtitle: "GITAM University · CGPA 8.86" },
    { title: "10th / Secondary Education", subtitle: "Academic record imported from sample resume" },
  ],
  experience: [
    { title: "Student Developer", subtitle: "Academic & personal projects" },
    { title: "Hackathon Participant", subtitle: "Collaborative problem solving" },
  ],
  extractedSkills: ["Java", "DSA", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Git"],
};

export const agentSteps = [
  { label: "Resume Parsing Agent", state: "complete", text: "Profile data extracted" },
  { label: "Skill Gap Agent", state: "complete", text: "Priority gaps identified" },
  { label: "Career Recommendation Agent", state: "complete", text: "Roles ranked by fit" },
  { label: "Learning Agent", state: "active", text: "Roadmap being personalized" },
  { label: "Interview Agent", state: "pending", text: "Ready when you start practice" },
];
