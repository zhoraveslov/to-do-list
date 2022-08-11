const inputTask = document.querySelector('.inputTask');
const form = document.querySelector('form');
// const button = document.querySelector('.button');
const taskTable = document.querySelector('.taskTable');
const ul = document.querySelectorAll('ul');
var Items = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : [];

localStorage.setItem('Items', JSON.stringify(Items));
 var taskText = inputTask.value;


form.addEventListener('submit', function(e) {

    if (inputTask.value == '') {
        alert("Enter new task");
    } else {

        var taskText = inputTask.value;
        Items.push(taskText);
        localStorage.setItem('Items', JSON.stringify(Items));
        JSON.parse(localStorage.getItem('Items'));
        itemMaker(taskText.value)
        inputTask.value = ''

    }
});

const itemMaker = taskText => {
    var li = document.createElement('li')
    li.textContent = taskText;

    ul[0].appendChild(li);
}


function showTask() {

    Items.forEach(element => itemMaker(element)

    );
}

showTask()




