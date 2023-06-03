<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task Tracker</title>
        <link rel="stylesheet" href="scss/main.scss">
    </head>
    <body>
        <header>
            <h1>Task Tracker</h1>
        </header>
        <form id="taskform">
            <div class="form-row">
                <label for="taskName">Name</label>
                <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    required="true"
                >
            </div>
            <div class="form-row">
                <label for="taskType">Type</label>
                <select id="taskType" name="taskType" required="true">
                    <option value="">Select one</option>
                    <option value="Concept Ideation">Concept Ideation</option>
                    <option value="Wireframing">Wireframing</option>
                    <option value="Application Coding">Application Coding</option>
                </select>
            </div>
            <div class="form-row">
                <label for="taskRate">Rate</label>
                <input
                    type="number"
                    name="taskRate"
                    id="taskRate"
                    required="true"
                >
            </div>
            <div class="form-row">
                <label for="taskTime">Time</label>
                <input
                    type="number"
                    name="taskTime"
                    id="taskTime"
                    required="true"
                >
            </div>
            <div class="form-row">
                <label for="taskClient">Client</label>
                <input
                    type="text"
                    name="taskClient"
                    id="taskClient"
                    required="true"
                >
            </div>
            <div class="form-row">
                <input type="submit">
            </div>
        </form>
        <h2>Tasks</h2>
        <ul id="tasklist"></ul>
        <script src="script.js"></script>
    </body>
</html>
