// Renderer process (frontend logic)
// This script runs in the browser window

document.addEventListener('DOMContentLoaded', () => {
  console.log('Personal Assistant app loaded!');

  // Initialize your app here
  initializeApp();
});

function initializeApp() {
  // Set up event listeners
  setupEventListeners();

  // Load any saved data
  loadData();
}

function setupEventListeners() {
  const addTaskBtn = document.getElementById('add-task-btn');
  const clearAllBtn = document.getElementById('clear-all-btn');

  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', handleAddTask);
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', handleClearAll);
  }
}

function handleAddTask() {
  const input = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  if (input.value.trim() === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = createTaskElement(input.value);
  taskList.appendChild(taskItem);

  // Save to local storage
  saveTasks();

  input.value = '';
  input.focus();
}

function handleClearAll() {
  const taskList = document.getElementById('task-list');
  if (confirm('Are you sure you want to clear all tasks?')) {
    taskList.innerHTML = '';
    saveTasks();
  }
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕';
  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function saveTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = Array.from(taskList.querySelectorAll('.task-item span')).map(
    (span) => span.textContent
  );
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadData() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const taskList = document.getElementById('task-list');

  tasks.forEach((task) => {
    const taskItem = createTaskElement(task);
    taskList.appendChild(taskItem);
  });
}
