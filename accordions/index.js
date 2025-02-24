document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('new-task')
    const taskButton = document.getElementById('add-task')
    const taskList = document.getElementById('content-task')

    const addTask = (taskText) => {
        const list = document.createElement('li')
        list.classList.add('list-task')


        const span = document.createElement('span')
        span.textContent = taskText;

        const deleted = document.createElement('button')
        deleted.textContent = 'hapus'
        deleted.addEventListener('click', () => {
            taskList.removeChild(list)
        } )

        list.appendChild(span)
        list.appendChild(deleted)
        taskList.appendChild(list)

        span.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }

    taskButton.addEventListener('click', () => {
        const textContent = taskInput.value.trim()
        if(textContent !== '') {
            addTask(textContent)
            taskInput.value = ''
        }
    })
})