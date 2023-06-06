// Orginal code from the week 3 tutorial
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

var taskList = [];

function addTask(name, type, counter, date, time, review) {
  let task = {
    name,
    type,
    counter,
    date,
    time,
    review,
    id: Date.now(),
    date: new Date().toISOString(),
    billable: false
  }
  taskList.push(task);
  displayTask(task);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTask(
    form.elements.eggName.value,
    form.elements.eggMeal.value,
    form.elements.eggCounter.value,
    form.elements.eggDate.value,
    form.elements.eggTime.value,
    form.elements.eggReview.value,
  )
})

function displayTask(task) {
  let item = document.createElement("li");
  item.setAttribute("data-id", task.id);
  item.innerHTML = 
    `<p><strong>${task.name}</strong><br>
    ${task.type}<br>
    
    ${task.counter}  Eggs<br>
    ${task.date} Date egg was made</em><br>
    ${task.time} Time egg was made<br>
    ${task.review} / 10 Rating

    `;
    //<span><em>${task.time} minutes</em><br>${task.rate}/10 Rating</span>

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

  


  
  // Leave the bracket below to close the displayTask function
}

var numbers = [];

function recordAndAdd() {
  var inputElement = document.getElementById("eggCounter");
  
  var number = parseInt(inputElement.value);
  if (!isNaN(number)) {
    numbers.push(number);
    inputElement.value = "";
    displayNumbersSum();
  }
}

function displayNumbersSum() {
  var resultElements = document.getElementsByClassName("result");
  var circleContainers = document.getElementsByClassName("circleContainer");

  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  for (var j = 0; j < resultElements.length; j++) {
    resultElements[j].textContent = "Total Eggs: " + sum;
    resultElements[j].style.color = "#8B4513"; // Apply CSS color property
    resultElements[j].style.fontSize = "40px";
  }

  for (var k = 0; k < circleContainers.length; k++) {
    circleContainers[k].innerHTML = "";
    for (var l = 0; l < sum; l++) {
      var circle = document.createElement("span");
      circle.classList.add("circle");
      circleContainers[k].appendChild(circle);
    }
  }
}

// Example usage
displayNumbersSum();







document.addEventListener('DOMContentLoaded', function() {
  const boxButtons = document.querySelectorAll('.boxButton');
  const closeButtons = document.querySelectorAll('.closePopup');
  const popupContainers = document.querySelectorAll('.popupContainer');

  

  boxButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      popupContainers[index].style.display = 'block';
    });
  });

  closeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      popupContainers[index].style.display = 'none';
    });
  });
});




/*
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
*/