import {
  changeMenuSelected,
  show_NewProject_Form,
  addNewProject,
} from "./ui_controler";



let menu_items = document.querySelectorAll(".todo_items>div");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    changeMenuSelected(menu_items , item);
    // changeContent()
  });
});


let show_newProjectForm_btn = document.querySelector(".add_project");
let newProject_form = document.querySelector(".Projects form");
show_newProjectForm_btn.addEventListener("click", () => {
  show_NewProject_Form(newProject_form);
});


let addProjectBtn = document.querySelector(".addProjectBtn");
addProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let projectName_input = document.querySelector(".Projects form input").value;
  addNewProject(projectName_input);
});
