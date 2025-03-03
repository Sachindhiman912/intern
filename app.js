document.addEventListener("DOMContentLoaded",()=>{
    const storedTasks=JSON.parse(localStorage.getItem("tasks"))

    storedTasks.forEach((task)=>{
        tasks.push(task);
    })
    updateTasksList();
    updateStats();
})

const tasks = [];

const saveTasks=()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text=taskInput.value.trim();
    console.log(text);

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value='';
        updateTasksList();
        updateStats();
        saveTasks();
    }
    console.log("All TAsks :", tasks)
}






const updateTasksList = () => {
    const taskList = document.getElementById("task-list");
    console.log("1111111 task list", taskList)
    taskList.innerHTML = '';
    console.log("222222task list", taskList)
    console.log("&&&&&& tasks", tasks)
    tasks.forEach((task, index) => {
        // const listItem = document.createElement("li");
        const listItem = document.createElement("li");
        console.log("list item ^^^", listItem);
        listItem.innerHTML = `
    <div class="taskItem">
        <div class="task ${task.completed ? 'completed' : ''}">
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <p>${task.text}</p>
        </div>
        <div class="icons">
            <img src="edit.png" alt="" onClick='editTask(${index})'>
            <img src="del.png" alt="" onClick='deleteTask(${index})'>
        </div>
    </div>
        `;
        listItem.addEventListener('change', () => toggleTaskComplete(index));
        taskList.append(listItem)
        // listItem.querySelector('.checkbox').addEventListener('change', () => toggleTaskComplete(index));

        // Append the new list item to the task list
        // taskList.append(listItem);
    })
    updateStats();
    saveTasks();
}




const toggleTaskComplete = (index) => {
    console.log("^^^^^^^^^^^", tasks[index])
    tasks[index].completed = !tasks[index].completed
    const bbb = tasks[index]
    console.log("^^^^^^^^^^^", bbb)
    updateStats();
    updateTasksList();
}


const editTask = (index) => {
    console.log("Edit task function :")
    const taskInput=document.getElementById("taskInput")
    console.log("textttttt :",tasks[index].text)
    taskInput.value=tasks[index].text

    tasks.splice(index,1);
    
    updateTasksList();
    updateStats();
    saveTasks();
}


const deleteTask = (index) => {
    console.log("Delete tas function ")
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
    saveTasks();
}

const updateStats=()=>{
    
    console.log("update stats :");
    const completedTask=tasks.filter(task=>task.completed).length;
    const totalTasks=tasks.length;
    
    const progress=(completedTask/totalTasks)*100;
    console.log("Completed tasks",completedTask,totalTasks,progress);

    const progressBar=document.getElementById("progress")
    progressBar.style.width=`${progress}%`;

    document.getElementById("numbers").innerText=`${completedTask}/${totalTasks}`;

    if(tasks.length && completedTask === totalTasks)
    {
        blastConfiti();
    }
}

const button = document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
    console.log("//////////////////")
    addTask();
    updateStats();
})
// console.log("$$$$$$$$$$",button) 


const blastConfiti=()=>{
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
      };
      
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ["star"],
        });
      
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"],
        });
      }
      
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
}