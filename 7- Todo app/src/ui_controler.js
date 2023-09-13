import { Project,CreatProjectElement } from "./newProject";
export function changeMenuSelected(menu_items, item) {
  menu_items.forEach((item) => {
    item.classList.remove("active_todo_item");
  });
  item.classList.add("active_todo_item");
}
export function show_NewProject_Form(form) {
  form.style.display = "block"
  setTimeout(() => {
    form.style.maxHeight = "200px";
    form.style.opacity = "1";
  },1)
}
export function addNewProject( name) {
  let new_project = new Project(name);
  let form = document.querySelector(".Projects form");
  form.style.opacity = 0;
  form.style.maxHeight = 0;
  setTimeout(() => {
    form.style.display = "none"
  }, 370)
  CreatProjectElement(new_project.projectName);
  // console.log(new_project.projectName);
}

function check_empty_input(element) {
  if (element.textContent != "")
    return 1;
  else
    return 0;
}