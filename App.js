// Store task details like title, description, deadline, and completion status.
// 
const task1 = {
    title: "Buy groceries",
    description: "Milk, eggs, bread",
    deadline: "2023-10-25",
    isComplete: false,
  };
  
  console.log(`Task: ${task1.title}, Deadline: ${task1.deadline}`);
  
  // ==========================================
  // Skill: Stringing Characters Together
  // ==========================================
  // Create a status message using template literals.
  const statusMessage = `Task "${task1.title}" is ${task1.isComplete ? "complete" : "pending"}.`;
  
  console.log(statusMessage); // Output: "Task 'Buy groceries' is pending."
  
  // ==========================================
  // Skill: Control Structures and Logic
  // ==========================================
  // Check if a task is overdue based on its deadline.
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format.
  
  if (task1.deadline < today && !task1.isComplete) {
    console.log(`Task "${task1.title}" is overdue!`);
  } else {
    console.log(`Task "${task1.title}" is on track.`);
  }
  
  // ==========================================
  // Skill: Working with Loops
  // ==========================================
  // Display all tasks in the to-do list using a loop.
  const tasks = [
    { title: "Buy groceries", isComplete: false },
    { title: "Finish project", isComplete: true },
    { title: "Call mom", isComplete: false },
  ];
  
  for (let i = 0; i < tasks.length; i++) {
    console.log(`Task: ${tasks[i].title}, Status: ${tasks[i].isComplete ? "Complete" : "Pending"}`);
  }
  
  // ==========================================
  // Skill: Building Arrays
  // ==========================================
  // Store a list of tasks in an array.
  const todoList = [
    { title: "Buy groceries", isComplete: false },
    { title: "Finish project", isComplete: true },
    { title: "Call mom", isComplete: false },
  ];
  
  console.log("All tasks:", todoList);
  
  // ==========================================
  // Skill: Using Arrays
  // ==========================================
  // Use array methods to filter and display only pending tasks.
  const pendingTasks = todoList.filter(task => !task.isComplete);
  
  console.log("Pending tasks:", pendingTasks);
  