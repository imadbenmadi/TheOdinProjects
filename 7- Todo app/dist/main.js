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
class Project{
    constructor(name) {
        this.projectName = name;
    }
}
function CreatProjectElement(name) {
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

/***/ }),

/***/ "./src/ui_controler.js":
/*!*****************************!*\
  !*** ./src/ui_controler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   changeMenuSelected: () => (/* binding */ changeMenuSelected),
/* harmony export */   show_NewProject_Form: () => (/* binding */ show_NewProject_Form)
/* harmony export */ });
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");

function changeMenuSelected(menu_items, item) {
  menu_items.forEach((item) => {
    item.classList.remove("active_todo_item");
  });
  item.classList.add("active_todo_item");
}
function show_NewProject_Form(form) {
  form.style.display = "block"
  setTimeout(() => {
    form.style.maxHeight = "200px";
    form.style.opacity = "1";
  },1)
}
function addNewProject( name) {
  let new_project = new _newProject__WEBPACK_IMPORTED_MODULE_0__.Project(name);
  let form = document.querySelector(".Projects form");
  form.style.opacity = 0;
  form.style.maxHeight = 0;
  setTimeout(() => {
    form.style.display = "none"
  }, 370)
  ;(0,_newProject__WEBPACK_IMPORTED_MODULE_0__.CreatProjectElement)(new_project.projectName);
  // console.log(new_project.projectName);
}

function check_empty_input(element) {
  if (element.textContent != "")
    return 1;
  else
    return 0;
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
/* harmony import */ var _ui_controler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_controler */ "./src/ui_controler.js");




let menu_items = document.querySelectorAll(".todo_items>div");
menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.changeMenuSelected)(menu_items , item);
    // changeContent()
  });
});


let show_newProjectForm_btn = document.querySelector(".add_project");
let newProject_form = document.querySelector(".Projects form");
show_newProjectForm_btn.addEventListener("click", () => {
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.show_NewProject_Form)(newProject_form);
});


let addProjectBtn = document.querySelector(".addProjectBtn");
addProjectBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let projectName_input = document.querySelector(".Projects form input").value;
  (0,_ui_controler__WEBPACK_IMPORTED_MODULE_0__.addNewProject)(projectName_input);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map