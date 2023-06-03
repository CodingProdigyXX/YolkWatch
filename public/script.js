// Orginal code from the week 3 tutorial
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

var taskList = [];

function addTask(name, type, rate, time, client) {
  let task = {
    name,
    type,
    id: Date.now(),
    date: new Date().toISOString(),
    rate,
    time,
    client,
    billable: false
  }
  taskList.push(task);
  displayTask(task);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask(
    form.elements.taskName.value,
    form.elements.taskType.value,
    form.elements.taskRate.value,
    form.elements.taskTime.value,
    form.elements.taskClient.value,
  )
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = 
    `<p><strong>${task.name}</strong><br>${task.type}</p>
     <span><em>${task.time} hours</em><br>$${task.rate}/hr</span>
    `;

  tasklist.appendChild(item);

  form.reset();

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {

    taskList.forEach(function(taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    console.log(taskList)
    item.remove();
  })

  // SECTION 1 CODE BELOW
  let checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  
  // <input type="checkbox"></input>
  // item.prepend(checkboxElem)
  item.insertBefore(checkboxElem, item.firstChild)
  
  checkboxElem.addEventListener("change", (event) => {
    // Event listener callback function
    let isChecked = event.target.checked;
    
    // for (let i = 0; i < taskList.length; i++) {
      
    // }
    
    taskList.forEach(function(taskArrayElement, taskArrayIndex){
      if (taskArrayElement.id == item.getAttribute("data-id")){
        if (isChecked) {
          item.style.backgroundColor = 'rgb(220, 255, 220)';
          taskArrayElement.billable = true;
        } else {
          item.style.backgroundColor = '#ffffff';
          taskArrayElement.billable = false;
        }
      }
    })
    
  })


  
  // Leave the bracket below to close the displayTask function
}



// SECTION 2 CODE BELOW
let invoiceButtonElem = document.getElementById('generateInvoice');
let invoiceTableElem = document.getElementById('invoiceTable');
let clientParagraph = document.getElementById('client');
let totalParagraph = document.getElementById('total');


invoiceButtonElem.addEventListener("click", () => {
  let total = 0;
  
  for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].billable) {
        clientParagraph.textContent = taskList[i].client;
        
        let price = taskList[i].rate * taskList[i].time;
        total += price;
        totalParagraph.innerHTML = `Total: $${total}`
        
        let rowElem = document.createElement('tr');
        let itemElem = document.createElement('td');
        let priceElem = document.createElement('td');
        let itemText = document.createTextNode(taskList[i].name);
        let priceText = document.createTextNode('$' + price);
        
        itemElem.appendChild(itemText);
        priceElem.appendChild(priceText);
        
        rowElem.appendChild(itemElem);
        rowElem.appendChild(priceElem);
        
        invoiceTableElem.appendChild(rowElem);
        
      }
  }
  
})