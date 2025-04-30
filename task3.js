const addButton = document.getElementById("add");
const title = document.getElementById("title");
const error = document.getElementById("error");
const body = document.getElementsByTagName("tbody")[0];

const tasks = [
  { title: "Go to the Gym", done: false },
  { title: "Meditate", done: true },
];

const displayError = (title) => {
  error.innerText = title;
  error.style.display = "block";
};

const clearInput = () => {
  title.value = "";
};

const hideError = () => {
  error.style.display = "none";
};

const deleteTask = (event) => {
  const row = event.target.closest("tr");
  const title = row.children[1].innerText;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title.toLowerCase() == title.toLowerCase()) tasks.splice(i, 1);
  }
  body.removeChild(row);
};

const markAsDone = (event) => {
  const checked = event.target.checked;
  const row = event.target.closest("tr");
  const title = row.children[1];
  if (checked) {
    tasks.forEach((task) => {
      if (task.title == "title") {
        task.done = true;
      }
    });
    title.style.textDecoration = "line-through";
  } else {
    tasks.forEach((task) => {
      if (task.title == "title") {
        task.done = false;
      }
    });

    title.style.textDecoration = "none";
  }
};

const listTask = (task) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input type="checkbox" name="" id="" /></td>
    <td colspan="3">${task.title}</td>
    <td>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
    </td>
    `;
  const svg = newRow.querySelector("svg");
  const checkbox = newRow.querySelector('input[type="checkbox"');
  svg.addEventListener("click", deleteTask);
  checkbox.addEventListener("click", markAsDone);
  body.appendChild(newRow);
};

tasks.forEach((task) => {
  listTask(task);
});

const isValid = (t) => {
  let repeated = false;

  tasks.forEach((task) => {
    if (task.title.toLowerCase() == t.toLowerCase()) {
      repeated = true;
    }
  });

  if (t.trim().length == 0) {
    displayError("The title of the task cannot be empty.");
    return false;
  }

  if (repeated) {
    displayError("This task already exists");
    return false;
  }

  return true;
};

const addTask = () => {
  const newTask = {
    title: title.value,
    done: false,
  };
  if (isValid(title.value)) {
    hideError();
    clearInput();
    tasks.push(newTask);
    listTask(newTask);
  }
};

addButton.addEventListener("click", addTask);
