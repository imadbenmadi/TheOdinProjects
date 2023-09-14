/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatProjectElement: () => (/* binding */ CreatProjectElement),
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _ui_controler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_controler */ "./src/ui_controler.js");
 
// import { selected_project_obj , All_projects } from "./index";
class Project{
    constructor(name) {
        this.projectName = name;
        this.todos = [];        
    }
}



function CreatProjectElement(name) {
    let Container = document.querySelector(".menu_container");
    let newProject = document.createElement("div")
    newProject.classList.add("Project_item");
    newProject.classList.add("flex_center");
    // newProject.classList.add("menu_btn");

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

    let add_new_project_btn = document.querySelector(".add_project ");
    Container.insertBefore(newProject, add_new_project_btn);



    let selected_project_obj = localStorage.getItem("selected_project");
    newProject.addEventListener("click", () => {
        (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.remove_All_Selected)();
        (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.handle_project_click_bg)(newProject);
        // console.log(selected_project_obj);
        // show_project_tasks(selected_project_obj);
    });
}

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTask: () => (/* binding */ CreateTask),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task{
    constructor(title,description) {
        this.title = title;
        this.description = description;
        this.preority = ""
    }
}
function CreateTask(project_obj , newTask) {
    project_obj.todos.push(newTask);
    
}

/***/ }),

/***/ "./src/ui_controler.js":
/*!*****************************!*\
  !*** ./src/ui_controler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeMenuSelected: () => (/* binding */ changeMenuSelected),
/* harmony export */   handle_project_click_bg: () => (/* binding */ handle_project_click_bg),
/* harmony export */   hide_NewProject_Form: () => (/* binding */ hide_NewProject_Form),
/* harmony export */   hide_Task_input: () => (/* binding */ hide_Task_input),
/* harmony export */   remove_All_Selected: () => (/* binding */ remove_All_Selected),
/* harmony export */   show_NewProject_Form: () => (/* binding */ show_NewProject_Form),
/* harmony export */   show_Task_input: () => (/* binding */ show_Task_input),
/* harmony export */   show_project_tasks: () => (/* binding */ show_project_tasks)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");

 




function changeMenuSelected(menu_items , item) {  
    menu_items.forEach((item) => {
      item.classList.remove("active_menu_item");
    });
    item.classList.add("active_menu_item");
    // changeContent()
}
function show_NewProject_Form(form) {
  form.style.display = "block"
  setTimeout(() => {
    form.style.maxHeight = "200px";
    form.style.opacity = "1";
  },1)
}
function hide_NewProject_Form() {
  let form = document.querySelector(".menu_container form");
  form.style.opacity = 0;
  form.style.maxHeight = 0;
  setTimeout(() => {
    form.style.display = "none";
  }, 370);
}
function remove_All_Selected() {
  let menu_items = document.querySelectorAll(".menu_btn");
  menu_items.forEach((element) => {
    element.classList.remove("active_menu_item");
  })
}

function show_Task_input() {
  let taskform = document.querySelector(".task_form");
  taskform.style.display = "flex";
  setTimeout(() => {
    taskform.style.transform = "scale(1)";
  }, 1);
}
function hide_Task_input() {
  let taskform = document.querySelector(".task_form");
  input_title.value = "";
  input_descripton.value = "";
  taskform.style.transform = "scale(0)";
  setTimeout(() => {
    taskform.style.display = "none";
  }, 255);
}
function handle_project_click_bg(clicked_project) {
  document.querySelectorAll(".Project_item").forEach((project) => {
    project.style.backgroundColor = "transparent;";
    project.classList.remove("active_menu_item");
    project.classList.remove("selected_project");
  })
  clicked_project.classList.add("active_menu_item");
  clicked_project.classList.add("selected_project");
}
function show_project_tasks(project) {
  document.querySelector(".Project_tasks").style.display = "block";
  if (project.todos.length === 0) {
    console.log("Empty");
    return;
  }
  project.todos.forEach((item) => {
    console.log(item);
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   All_projects: () => (/* binding */ All_projects),
/* harmony export */   selected_project_obj: () => (/* binding */ selected_project_obj)
/* harmony export */ });
/* harmony import */ var _ui_controler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_controler */ "./src/ui_controler.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var _newTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTask */ "./src/newTask.js");







let selected_project_obj = {};
let All_projects = [];
localStorage.setItem("selected_project", JSON.stringify(selected_project_obj));
localStorage.setItem("All_projects", JSON.stringify(All_projects));



let menu_items = document.querySelectorAll(".menu_btn");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.changeMenuSelected)(menu_items , item);
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
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.show_NewProject_Form)(newProject_form);
});

let addProjectBtn = document.querySelector(".addProjectBtn");
addProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let projectName_input = document.querySelector(
    ".menu_container form input"
  ).value;
  
  let new_project = new _newProject__WEBPACK_IMPORTED_MODULE_1__.Project(projectName_input);
  All_projects.push(new_project);
  localStorage.setItem("All_projects", JSON.stringify(All_projects));
  // console.log(All_projects);
  // console.log(localStorage.getItem("All_projects"));
  (0,_newProject__WEBPACK_IMPORTED_MODULE_1__.CreatProjectElement)(new_project.projectName);
  projectName_input = "";
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.hide_NewProject_Form)();

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
  ;(0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.show_Task_input)();
});
let taskform_cancel = document.querySelector(".cancel_task_form");
let taskform_add = document.querySelector(".add_task_form");

taskform_cancel.addEventListener("click", (event) => {
  event.preventDefault();
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.hide_Task_input)();
});


taskform_add.addEventListener("click", (event) => {
  event.preventDefault();
  let input_title = document.querySelector(".task_form #input_title").value;
  let input_descripton = document.querySelector(
    ".task_form #input_descripton"
  ).value;
  let newTask = new _newTask__WEBPACK_IMPORTED_MODULE_2__.Task(input_title, input_descripton);
  // console.log(newTask);
  let selected_project = document.querySelector(".selected_project");
  
  All_projects.forEach((project) => {
    if (project.projectName == selected_project.querySelector(".Project_item_text").textContent){
      selected_project_obj = project;
      localStorage.removeItem("selected_project");
      localStorage.setItem(
        "selected_project",
        JSON.stringify(selected_project_obj)
      );
      console.log(localStorage.getItem("selected_project"));
    }
  })
  
  ;(0,_newTask__WEBPACK_IMPORTED_MODULE_2__.CreateTask)(selected_project_obj, newTask);
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.hide_Task_input)();
});
    
  // console.log(localStorage.getItem("selected_project"));
  // console.log(localStorage.getItem("All_projects"));

 
})();

/******/ })()
;
//# sourceMappingURL=main.js.map