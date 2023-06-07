# YolkWatch

## Advanced Web Design READ ME

### Deployment
**GitHub Web Link**

<br>
https://github.com/CodingProdigyXX/YolkWatch.git

**Git Zip folder Instructions**

![research](/public/readmeimages/research.png)
<br>
![Yolk Watch Task Form](/public/readmeimages/TaskForm.png) "YolkWatch Task Form")

### Instructions
<p>1) Fill out the tracker form with the input underneath the Heading "Add Egg" as if you had just made an egg meal and how to want to record your actions.</p>
	
<p>Enter Egg Type i.e. Fried, Boiled, Scrambled</p>
<p>Enter what meal this was for</p>
<p>Enter how many eggs you used</p>
<p>Enter what day you made your egg</p>
<p>Enter what time you Made your egg</p>
<p>Enter a rating out of 10 on how your egg Tasted.</p>

2) After doing this click the RIGHT submit button
This will bring up the task list with all your recorded info as well as a delete button if you've made a mistake.

3) To use the Egg counter Feature input a number into the Number of Eggs number input. From here click the Left Submit button which will bring up a visual representation of you eggs that you've eaten. Keep repeating this process to add however many eggs you want.

4) Lastly there is the Egg Recipe area which brings up different Egg Recipes for you to be inspired by which easily allows you to transfer between the main page and the Recipe popups.

### Screen Size<br>
My Web Application is best viewed with a width of at least 1000px Wide. I have used the flexbox method of CSS to allow accommodate different widths when viewing said application.

### Mobile Viewing
Through Flexbox and Media queries when viewing the web application on a mobile device the only change is the grid layout of egg recipes which has been done so to accommodate the smaller width of the screen.

### What is it?
Yolk Watch is a web application that was built to help users track the number of eggs that they consume and helps record further details surrounding said meals. This includes the Type of Egg they ate, What meal, number of eggs consumed, Date of record, Time of Record and Rating of Meal.

While niche I used this idea as a straightforward way to meet the brief to simply record and track user data and input which I believe this web application does.

### Key Features
**Taskform**<br>
The task form is responsible for displaying input fields correctly as well as the type of input to match the required data. This included Text, Number, drop-down menus, a date selector, a Time selector and a slider. These inputs when submitted were recorded and are then used by other features.

**Tasklist**<br>
The task list was responsible for getting the required input data from the task form and then displaying them so that the user can keep track and record what Egg meal the user has eaten. The task list recorded all 6 of the form rows from taskForm to display a short stat card in a human-legible way.

**Egg Counter**<br>
This feature was responsible for taking the "number" field from the taskForm and displaying this number visually through an egg shape at the top of the page. The second half of this feature was to add existing inputs so that the total is recorded and still displayed. This meant if there was an input of 5 and a second input the total number of eggs displayed would be 11 etc. Until the page is reset

**Egg Recipes**<br>
The Last major feature is the Egg Recipe area at the bottom of the page. With a total of 8 recipes, these boxes were popups that brought up each recipe. While separate from the rest of the tracking side of the application I included this to both serve to inspire the user of what eggs they can make to encourage diversity as well as to test myself with CSS as this required a lot of work of using grids and being adaptive based off screen width.

### Development iterations<br>
**Past Scrimbas**<br>
I started on my web application by using Robs Coding challenge Scrimba as the base of my application. 
<br>
My First step was playing around and understanding the different parts of the code and how they worked together so that I could build further upon them.

**Git Hub and VS Code**<br>
My Next step was to correctly use Github and the Terminal to make sure that I was correctly committing and pushing my code. This required some time in part because I had forgotten how to properly use Git from when it was taught in the Tutorial and also because of some glitches in VS Code requiring me to re-download it. In the end, many of my problems here were solved by manually committing and pushing my code through the terminal

**Changing form and id's**<br>
My first step in changing the pre-existing form and display function was to do with the form and its IDs and labels to match my previous Data Sheet.
Egg Recipe/ pop up's
<br>

My Next step was to create buttons that when pressed brought up a pop that would then later be filled in with recipe info.

**1st Round of CSS**<br>
It is here that I switched over to applying CSS which focused on setting up Flexbox and making sure that my existing elements of the header, task form and tasklist were working correcting and being easily adjustable through Flexbox. 

**Finalising Form and Task List**<br>
I now switched back over to finalising my Form and Tasklist as these were the key features. This included adding an extra form entry row as well as choosing the data type of each row.

**Counter Feature**<br>
I then attempted to add a counter feature that took in the user's number of eggs and then visually displayed them. This section took the longest to complete and required me to have a separate submit button the run the required javascript function. I hoped that I would later be able to combine the two submit buttons but this did occur in the end.

**Recipe Content**<br>
The bit of content added was the recipe content. Due to the nature of the assignment not being about what recipe was provided, I used AI to create the recipe Ingredients, Equipment and step-by-step instructions due to otherwise having to write out 8 pages of text. This helped me save a lot of time before then styling said content.

**Final CSS**<br>
The last major stage was finishing off CSS this included font size, and colours but primarily was focused on how to display content in the way I want and making sure it wrapped correctly. This included grids, button formatting as well and bringing together the overall cohesiveness of the project.
Indentation and Cleanup
<br>
The last step completed was fixing the indentation of my code to make it more readable as well as getting rid of unnecessary code that was duplicated due to elements often having similar CSS and style.

### Further Completion<br>
Due to a lack of time insufficient coding ability and in some areas being unable to solve certain issues, there was a few unresolved issues.
Local Storage
Console Logging info
Date Transformation
Submit button Separate functionality
Further Mobile Adaption
Task list horizontal flex-wrapping
