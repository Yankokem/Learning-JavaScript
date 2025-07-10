const form = document.querySelector('form');
const taskContainer = document.querySelector('#container');

let tasks = [];

function addTask(title, description) {
    const task = {title, description};
    tasks.push(task);
    const item = document.createElement('div');
    item.innerHTML = `<div class="item">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <button>Delete</button>
                    </div>`;
    taskContainer.appendChild(item);

    const deleteButton = item.querySelector('button');
    deleteButton.addEventListener('click', ()=>{
        item.remove();
    });
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    if(title && description) {
        addTask(title, description);
        form.reset();
    }
});

item.querySelector('button').addEventListener('click', ()=>{
    item.remove();
});
