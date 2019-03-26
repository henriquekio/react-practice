import localForage from 'localforage';

class TaskResourceService {

    static getTasks() {
        let tasksPromisse = new Promise((resolve, reject) => {
            let tasks = [];

            localForage.iterate(function (value, key) {
                let task = {
                    key: key,
                    value: value
                };
                tasks.push(task);
            }).then(() => {
                resolve(tasks)
            });

        });


        return tasksPromisse;
    }

    /**
     * @type JSON
     * @param task
     * @returns {Promise<*>}
     */
    static async setTaskIndexedDb(task) {
        return localForage.setItem(await this.getKey(), task);
    }

    static async getKey() {
        let key = await localForage.keys().then(key => key.length + 1);
        return key.toString();
    }
}


export default TaskResourceService
