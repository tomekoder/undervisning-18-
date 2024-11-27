// oppgave:

// 1. create a constant variable that retrieves the html element with ID inputData 
//and log the variable to the console to verify correct retrieval 

// 5. add the method .value to retrieve the value from the input instead of the element itself

const inputData = document.querySelector("#inputData")
console.log(inputData)

// 2. create a constant variable that retrieves the HTML element with ID submitData
//and log the variable to the console to verify correct retrieval

const submitData = document.querySelector("#submitData")
console.log(submitData)

// 3. create a function with name displayData
// and log a strong saying "im working" to the console

// 6. create a variable called inputDataValue that uses the variable inputData with the .value method.
// add a log logging out the variable inputData inside of the function

function displayData() {
    console.log("Im working")

    const inputDataValue = inputData.value
    console.log(inputDataValue)
}

// 4. use the variable submitData and add an event listener, listening for a click and activating the function displayData

submitData.addEventListener("click", displayData)