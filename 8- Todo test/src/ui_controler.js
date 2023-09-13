import { Project, CreatProjectElement } from "./newProject";

export function changeMenuSelected(menu_items , item) {
  
    menu_items.forEach((item) => {
      item.classList.remove("active_menu_item");
    });
    item.classList.add("active_menu_item");
    // changeContent()
  
}


export function show_NewProject_Form(form) {
  form.style.display = "block"
  setTimeout(() => {
    form.style.maxHeight = "200px";
    form.style.opacity = "1";
  },1)
}

let All_projects = [];

export function addNewProject( name) {
  let new_project = new Project(name);
  All_projects.push(new_project);
  let form = document.querySelector("form");
  form.style.opacity = 0;
  form.style.maxHeight = 0;
  setTimeout(() => {
    form.style.display = "none"
  }, 370)
  CreatProjectElement(new_project.projectName);
}



function isDuplicated(All_projects, newProject) {
  All_projects.forEach((element) => {
    if (element.projectName == newProject)
      return -1;
  })
  return 1;
}
function check_empty_input(element) {
  if (element.textContent != "")
    return 1;
  else
    return 0;
}