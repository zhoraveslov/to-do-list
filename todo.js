const inputTask = document.querySelector('.inputTask');
const form = document.querySelector('form');
// const button = document.querySelector('.button');
const taskTable = document.querySelector('.taskTable');
const ul = document.querySelectorAll('ul');
var Items = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : [];

localStorage.setItem('Items', JSON.stringify(Items));
const data = JSON.parse(localStorage.getItem('Items'));

//Stop the form from submitting when a button is pressed
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (inputTask.value == '') {
        alert("Enter new task");
    } else {

        var taskText = inputTask.value;
        Items.push(taskText);
        localStorage.setItem('Items', JSON.stringify(Items));
      
        itemMaker(taskText.value)
        inputTask.value = ''

    }
});

const itemMaker = taskText => {
    var li = document.createElement('li')
    li.textContent = inputTask.value;

    ul[0].appendChild(li);

}

function showTask(li) {

    Items.forEach(element => itemMaker(element)

    );
}

showTask()



// button.addEventListener('click', function() {
//     if (inputTask.value == '') {
//         alert("Enter new task");
//     } else {
//         // const li = document.createElement('li');
//         // li.textContent = inputTask.value;
//         // ul[0].appendChild(li);
//         var taskText = inputTask.value;
//         Items.push(taskText);
//         localStorage.setItem('Items', JSON.stringify(Items));
//         // JSON.parse(localStorage.getItem('Items'));
//         // itemMaker(inputTask.value)



//     }
// })
