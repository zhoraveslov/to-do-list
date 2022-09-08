const inputTask = document.querySelector('.inputTask');
const form = document.querySelector('form');
// const button = document.querySelector('.button');
const taskTable = document.querySelector('.taskTable');
const ul = document.querySelectorAll('ul');
var Items = localStorage.getItem('Items') ? JSON.parse(localStorage.getItem('Items')) : [];
localStorage.setItem('Items', JSON.stringify(Items));
const deleteBtn = document.querySelector('.deleteBtn');
    var taskText = inputTask.value;
//Stop the form from submitting when a button is pressed
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (inputTask.value == '') {
        alert("Enter new task");
    } else {

        var taskText = inputTask.value;
        const timeStamp = Date.now();
        var Item = { taskText, timeStamp };
        Items.push(Item);
        localStorage.setItem('Items', JSON.stringify(Items));
      
        itemMaker(taskText.value)
        inputTask.value = ''

    }
});

const itemMaker = taskText => {
    var li = document.createElement('li')
    const timeStamp = Date.now();
    li.value = timeStamp;
    li.textContent = taskText;
        li.className = 'task';
        li.innerHTML = `<p> ${taskText} </p>
<form> <button class = "deleteBtn" id = "timeStamp">Delete</button> 
</form>`;
        ul[0].appendChild(li);

    ul[0].appendChild(li);

}

function showTask(li) {

    Items.forEach(element => itemMaker(element)

    );
}

showTask()



