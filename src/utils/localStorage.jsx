const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create wireframes and UI design for the landing page",
        date: "2025-09-10",
        category: "design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        description: "Resolve the issue with incorrect password validation",
        date: "2025-09-12",
        category: "development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend weekly project sync meeting",
        date: "2025-09-08",
        category: "management",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Improve queries for faster load times",
        date: "2025-09-15",
        category: "backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "API Testing",
        description: "Write unit tests for authentication APIs",
        date: "2025-09-11",
        category: "testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Presentation",
        description: "Prepare slides for quarterly review",
        date: "2025-09-13",
        category: "management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Mobile UI Update",
        description: "Redesign profile screen for mobile app",
        date: "2025-09-14",
        category: "design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy to Staging",
        description: "Push latest build to staging environment",
        date: "2025-09-09",
        category: "devops",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review pull requests from frontend team",
        date: "2025-09-12",
        category: "development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Report Analysis",
        description: "Analyze and categorize reported bugs",
        date: "2025-09-08",
        category: "support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write Documentation",
        description: "Update onboarding documentation",
        date: "2025-09-16",
        category: "documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
};

// ✅ Save into localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// ✅ Get from localStorage (parsed JSON)
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};
