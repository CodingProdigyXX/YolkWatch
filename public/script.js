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

var slider = document.getElementById("eggReview");
var output = document.getElementById("review");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
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
    `<p><strong>Egg Type: </strong>${task.name}<br>
    <strong>Meal: </strong>${task.type}<br>
    <strong>Eggs: </strong>${task.counter}  <br>
    <strong>Date: </strong>${task.date} </em><br>
    <strong>Time: </strong>${task.time}</strong>  <br>
    <strong>Rating: </strong>${task.review} / 10 
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
    resultElements[j].style.color = "#8B4513";
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