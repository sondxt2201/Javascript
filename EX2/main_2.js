// let courseAPI = "http://localhost:3000/courses";
// fetch(courseAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (courses) {
//         console.log(courses);
//     });

let courseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateForm();
};
start();

function getCourses(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
};

function createCourse(data, callback) {
  let optiopns = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch(courseAPI, optiopns)
    .then(function (response) {
      response.json();
    })
    .then(callback);
};

function renderCourses(courses) {
  let listCoursesBlock = document.querySelector("#list-courses");
  let html = courses.map(function(course) {
    return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
        </li>
        `;
  });
  listCoursesBlock.innerHTML = html.join("");
};

function handleCreateForm() {
  let createBtn = document.querySelector('#create');
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('input[name="description"]').value;
    let formData = {
      name: name,
      description: description,
    };
    createCourse(formData); 
  };
};

function handleDeleteCourse(id) {
  let optiopns = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(courseAPI + "/" + id, optiopns)
    .then(function (response) {
      response.json();
    })
    .then(function(){
      let courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

