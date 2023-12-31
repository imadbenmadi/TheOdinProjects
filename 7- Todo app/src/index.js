import {
  changeMenuSelected,
  show_NewProject_Form,
  addNewProject,
} from "./ui_controler";



let menu_items = document.querySelectorAll(".menu_btn");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
    changeMenuSelected(menu_items , item);
    // changeContent()
  });
});
// changeMenuSelected(menu_items);

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
  menu_items = document.querySelectorAll(".menu_btn");
  console.log(menu_items);
});
