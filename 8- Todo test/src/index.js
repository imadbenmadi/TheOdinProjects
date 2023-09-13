import {
  changeMenuSelected,
  show_NewProject_Form,
  hide_NewProject_Form,
  show_Task_input,
  hide_Task_input,
} from "./ui_controler";


import { Project, CreatProjectElement } from "./newProject";
import { Task, CreateTask } from "./newTask";



let menu_items = document.querySelectorAll(".menu_btn");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    changeMenuSelected(menu_items , item);
    // changeContent()
  });
});
// let Project_btns = document.querySelectorAll(".Project_item");
// console.log(Project_btns);
// Project_btns.forEach((project) => {
//   project.addEventListener("click", () => {
    
//   })
// });

let show_newProjectForm_btn = document.querySelector(".add_project");
let newProject_form = document.querySelector(".menu_form");
show_newProjectForm_btn.addEventListener("click", () => {
  show_NewProject_Form(newProject_form);
});

let All_projects = [];
let addProjectBtn = document.querySelector(".addProjectBtn");
addProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let projectName_input = document.querySelector(
    ".menu_container form input"
  ).value;
  
  let new_project = new Project(projectName_input);
  All_projects.push(new_project);
  // console.log(All_projects);
  CreatProjectElement(new_project.projectName);
  projectName_input = "";
  hide_NewProject_Form();

});


// function isDuplicated(All_projects, newProject) {
//   All_projects.forEach((element) => {
//     if (element.projectName == newProject) return 1;
//   });
//   return 0;
// }
// function isEmptyInput(element) {
//   if (element == "") return 1;
//   else return 0;
// }

// working with the task form 
let taskform = document.querySelector(".task_form")
document.querySelector(".add_new_task ").addEventListener("click", () => {
  show_Task_input();
});
let taskform_cancel = document.querySelector(".cancel_task_form");
let taskform_add = document.querySelector(".add_task_form");
let input_title = document.querySelector(".task_form #input_title").value;
let input_descripton = document.querySelector(".task_form #input_descripton").value;
taskform_cancel.addEventListener("click", (event) => {
  event.preventDefault();
  hide_Task_input();
});
taskform_add.addEventListener("click", (event) => {
  event.preventDefault();
  let newTask = new Task(input_title, input_descripton);
  // console.log(newTask);
  let selected_project = document.querySelector(".selected_project");
  let selected_project_obj = "";
  All_projects.forEach((project) => {
    if (project.projectName == selected_project.querySelector(".Project_item_text").textContent){
      selected_project_obj = project;
      console.log(selected_project_obj);;
    }
  })
  console.log(selected_project);
  CreateTask(selected_project_obj, newTask);
  hide_Task_input();
});


// relate the Project section with its tasks
 