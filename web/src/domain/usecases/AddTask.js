export class AddTask {
    constructor(taskApi) {
        this.taskApi = taskApi;
    }

    async execute(title) {
        const newTask = await this.taskApi.createTask(title);
        return newTask;
    }
}
