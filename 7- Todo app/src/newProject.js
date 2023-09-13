export class Project{
    constructor(name) {
        this.projectName = name;
    }
}
export function CreatProjectElement(name) {
    let ProjectContainer = document.querySelector(".Projects");
    let newProject = document.createElement("div")
    newProject.classList.add("Project_item");
    newProject.classList.add("flex_center");

    let newProject_text = document.createElement("div");
    newProject_text.classList.add("Project_item_text");
    let newProject_menu = document.createElement("div");
    newProject_menu.classList.add("Project_item_menu");

    let newProject_menu_span = document.createElement("span");
    newProject_menu_span.textContent = "more_vert";
    newProject_menu_span.classList.add("material-symbols-outlined");
   
    newProject_text.textContent = name;
    newProject_menu.appendChild(newProject_menu_span);
    newProject.appendChild(newProject_text);
    newProject.appendChild(newProject_menu);
    ProjectContainer.insertBefore(newProject, ProjectContainer.firstChild);
}