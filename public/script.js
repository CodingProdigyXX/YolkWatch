// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    addTask(
        form.elements.taskName.value,
        form.elements.taskType.value,
        form.elements.taskRate.value,
        form.elements.taskTime.value,
        form.elements.taskClient.value,
    )
})

function displayTasks() {
    
    tasklist.innerHTML = "";
    
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (localTasks !== null) {
        
        localTasks.forEach((task) => {
            
            console.log(task)
        
            // Create task items for the DOM and add to the list
            let item = document.createElement("li");
            item.setAttribute("data-id", task.id);
            item.innerHTML = `<p><strong>${task.name}</strong><br>${task.type}</p>`;
            tasklist.appendChild(item);

            // Clear the value of the input once the task has been added to the page
            form.reset();

            // Setup delete button DOM elements
            let delButton = document.createElement("button");
            let delButtonText = document.createTextNode("Delete");
            delButton.appendChild(delButtonText);
            item.appendChild(delButton); // Adds a delete button to every task

            // Listen for when the delete button is clicked
            delButton.addEventListener("click", function (event) {

                localTasks.forEach(function (taskArrayElement, taskArrayIndex) {
                    if (taskArrayElement.id == item.getAttribute('data-id')) {
                        localTasks.splice(taskArrayIndex, 1)
                    }
                })
                
                localStorage.setItem('tasks', JSON.stringify(localTasks));

                item.remove(); // Remove the task item from the page when button clicked
                // Because we used 'let' to define the item, 
                // this will always delete the right element
            })
            
        }) // Closing brackets for for loop
    } // Closing bracket for if statement
}

// Function to add task to the list
function addTask(name, type, rate, time, client) {

    // Creating the object, directly passing in the input parameters
    let task = {
        name,
        type,
        id: Date.now(),
        date: new Date().toISOString(),
        rate,
        time,
        client
    }
    
    // fetching and parse localStorage value
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (localTasks == null) {
        localTasks = [task];
    } else {
        // Check to see if there is an existing task
        if (localTasks.find(element => element.id === task.id)) {
            console.log('Task ID already exists');
        } else {
            localTasks.push(task);
        }
    }
    
    localStorage.setItem('tasks', JSON.stringify(localTasks))

    displayTasks();

}

// Call the function with test values for the input paramaters
addTask("Initial Sketches", "Concept Ideation", 50, 5, "Google");