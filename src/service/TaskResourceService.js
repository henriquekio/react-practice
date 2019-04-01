import localForage from 'localforage';

class TaskResourceService {

    static getTasks() {
        return new Promise((resolve, reject) => {
            let tasks = [];

            localForage.iterate(function (value, key) {
                let task = {
                    key: key,
                    value: value
                };
                tasks = [...tasks, task];
            }).then(() => {
                resolve(tasks)
            });

        });
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

    static async removeTask(key) {
        localForage.removeItem(key)
            .catch((e) => {
                throw e
            });
    }
}


export default TaskResourceService
