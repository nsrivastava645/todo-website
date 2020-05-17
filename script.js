//adding the task adder button going fromtop to bottom


//first thing is to do something on clicking add task button4
const taskAdder = document.querySelector('.add-task');//as our task adder is this add task class button

//value that the user enters is stored here
var userInput = document.querySelector('.user-input');

const taskContainer = document.querySelector('.task-container');


//we have created 2 constants now we have to add something to the taskContainer

//creating a div with class that holds the tasks

class tasks{
    constructor(taskName){
        this.createDiv(taskName);
    }
    createDiv(taskName){

        let taskCheck = document.createElement('input');
        taskCheck.checked = false;
        taskCheck.classList.add('task-check');
        taskCheck.type='checkbox';

        taskCheck.addEventListener('click',countDoneTasks);


        let taskInput = document.createElement('input');
        taskInput.value = taskName;
        taskInput.disabled = true;
        taskInput.classList.add('task-input');
        taskInput.type = "text";

        let taskBox = document.createElement('div');
        taskBox.classList.add('tasks');
        
        let editTaskButton = document.createElement('button');
        editTaskButton.classList.add('edit-task');
        editTaskButton.innerHTML = '<i class="fas fa-edit"></i>';

        let delTaskButton = document.createElement('button');
        delTaskButton.classList.add('delete-task');
        delTaskButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        taskContainer.appendChild(taskBox);

        taskBox.appendChild(taskCheck);
        taskBox.appendChild(taskInput);
        taskBox.appendChild(editTaskButton);
        taskBox.appendChild(delTaskButton);


        //adding events to the button clicks


        editTaskButton.addEventListener('click',()=> this.editFun(taskInput));

        delTaskButton.addEventListener('click',()=>this.deleteFun(taskBox));
        delTaskButton.addEventListener('click',countDoneTasks);
    }
    editFun(taskInput){
        taskInput.disabled = !taskInput.disabled;
    }
    deleteFun(tasks){
        taskContainer.removeChild(tasks);
    }
}


//event listener for topmost add button
function addTask(){
    if(userInput.value!=''){
        new tasks(userInput.value);
        userInput.value='';
    }

}

taskAdder.addEventListener('click',addTask);
taskAdder.addEventListener('click',countDoneTasks);

//adding event listener to enter key being pressed when entered something 

window.addEventListener('keydown',function(key){
    if(key.keyCode==13){
        addTask();
        countDoneTasks();

    }
});

function countDoneTasks(){
    var noOfCheckBoxes = document.querySelectorAll('input[type="checkbox"]').length;

    var noOfChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;

    var LeftTasks = noOfCheckBoxes - noOfChecked;

    // alert(LeftTasks);
    document.getElementById('counter').innerHTML="You have " + LeftTasks +" pending tasks";
}





