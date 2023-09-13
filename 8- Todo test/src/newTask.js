export class Task{
    constructor(title,description) {
        this.title = title;
        this.description = description;
        this.preority = ""
    }
}
export function CreateTask(project_obj , newTask) {
    project_obj.todos.push(newTask);
    
}