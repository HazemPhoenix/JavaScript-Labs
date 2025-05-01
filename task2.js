const body = document.getElementsByTagName("tbody")[0];
const studName = document.getElementById("stud-name");
const studGrade = document.getElementById("stud-grade");
const addButton = document.getElementById("add");
const dept = document.getElementsByName("dept");

const deleteButtons = document.getElementsByTagName("svg");

const sort = document.getElementById("sort");
const filter = document.getElementById("filter");

const invalidNameError = document.getElementById("invalid-name");

const invalidGradeError = document.getElementById("invalid-grade");

sort.options[sort.options.selectedIndex].value;

let students = [
  { name: "Hazem", grade: 100, dept: "OS" },
  { name: "Steven", grade: 90, dept: "OS" },
  { name: "Ali", grade: 76, dept: "SD" },
  { name: "Essam", grade: 75, dept: "SD" },
  { name: "Wael", grade: 60, dept: "SD" },
  { name: "Moamen", grade: 0, dept: "EL" },
  { name: "Seif", grade: 50, dept: "EL" },
];

const isValidName = (n) => {
  let isRepeated = false;
  students.forEach((stud) => {
    if (stud.name == n) {
      isRepeated = true;
    }
  });
  if (isRepeated) {
    invalidNameError.innerText = "This name already exists.";
    invalidNameError.style.display = "block";
    return false;
  }
  if (n.trim().length == 0) {
    invalidNameError.innerText = "Name cannot be empty.";
    invalidNameError.style.display = "block";
    return false;
  }

  invalidNameError.style.display = "none";
  return true;
};

const isValidGrade = (g) => {
  const parsedGrade = parseInt(g.trim());
  if (!isFinite(parsedGrade)) {
    invalidGradeError.innerText = "Grade must be a number.";
    invalidGradeError.style.display = "block";
    return false;
  }
  if (parsedGrade < 0 || parsedGrade > 100) {
    invalidGradeError.innerText = "Grade must be between 0 and 100.";
    invalidGradeError.style.display = "block";
    return false;
  }

  invalidGradeError.style.display = "none";
  return true;
};

const getSelectedDept = () => {
  for (let i = 0; i < dept.length; i++) {
    if (dept[i].checked) {
      return dept[i].value;
    }
  }
};

const validateAndAdd = (event) => {
  event.preventDefault();
  const nameValid = isValidName(studName.value);
  const gradeValid = isValidGrade(studGrade.value);
  if (nameValid && gradeValid) {
    const dept = getSelectedDept();
    const student = {
      name: studName.value.trim(),
      grade: parseInt(studGrade.value),
      dept,
    };
    students.push(student);

    const newRow = document.createElement("tr");
    const capitalizedName =
      student.name[0].toUpperCase() + student.name.slice(1);

    newRow.innerHTML = `
        <td>${capitalizedName}</td>
        <td>${student.grade}</td>
        <td>${student.dept}</td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-6 delete-icon" style="cursor:pointer;">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </td>
      `;

    const svg = newRow.querySelector("svg");
    svg.addEventListener("click", deleteStudent);

    let color = "";
    if (student.grade >= 76) color = "#90EE90";
    else if (student.grade >= 61) color = "#FFFFC5";
    else if (student.grade == 60) color = "#FF8C00";
    else color = "#FF8488";

    newRow.style.backgroundColor = color;
    body.appendChild(newRow);

    studName.value = "";
    studGrade.value = "";
  }
};

const deleteStudent = (event) => {
  const tr = event.target.closest("tr");
  const name = tr.children[0].innerText;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() == name.toLowerCase())
      students.splice(i, 1);
  }
  body.removeChild(tr);
};

addButton.addEventListener("click", validateAndAdd);

const listStudents = (s) => {
  body.innerText = "";
  s.forEach((stud) => {
    const newRow = document.createElement("tr");
    const capitalizedName = stud.name[0].toUpperCase() + stud.name.slice(1);
    let color = "";
    if (stud.grade >= 76) color = "#90EE90";
    else if (stud.grade >= 61) color = "#FFFFC5";
    else if (stud.grade == 60) color = "#FF8C00";
    else color = "#FF8488";

    newRow.innerHTML = `
        <td>${capitalizedName}</td>
        <td>${stud.grade}</td>
        <td>${stud.dept}</td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="size-6 delete-icon" style="cursor:pointer;">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </td>
      `;

    const svg = newRow.querySelector("svg");
    svg.addEventListener("click", deleteStudent);
    newRow.style.backgroundColor = color;
    body.appendChild(newRow);
  });
};

const sortStudents = (obj, sortBy) => {
  if (sortBy == "name") {
    const sorted = obj.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    listStudents(sorted);
  } else {
    const sorted = obj.sort((a, b) => {
      return b.grade - a.grade;
    });
    listStudents(sorted);
  }
};

filter.addEventListener("change", (event) => {
  let filterBy = event.target.value;
  let { pass, fail } = Object.groupBy(students, ({ grade }) => {
    if (grade >= 60) return "pass";
    if (grade < 60) return "fail";
  });

  if (filterBy == "failed") {
    listStudents(fail);
  } else if (filterBy == "succeeded") {
    listStudents(pass);
  } else {
    listStudents(students);
  }
});

sort.addEventListener("change", (event) => {
  const sortBy = event.target.value;
  if (filter.value == "all") {
    sortStudents(students, sortBy);
  } else {
    const filterBy = filter.value;
    let { pass, fail } = Object.groupBy(students, ({ grade }) => {
      if (grade >= 60) return "pass";
      if (grade < 60) return "fail";
    });

    if (filterBy == "failed") {
      sortStudents(fail, sortBy);
    } else if (filterBy == "succeeded") {
      sortStudents(pass, sortBy);
    }
  }
});

listStudents(students);
