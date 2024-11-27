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

// 7. create a constant variable called displayedData that retrieves the HTML element with the ID displayed data
// and log out the variable to verify

// 8. create a constant variable called listData with the .createElement method inside the function
//and log out the newly created variable to verify

// 9. give the variable listData content from inputDataValue with the .textContent method

// 10. add the new element listData to the element displayedData with the appendChild method

function displayData() {
    console.log("Im working")

    const inputDataValue = inputData.value
    console.log(inputDataValue)

    const displayedData = document.querySelector("#displayedData")
    console.log(displayedData)

    const listData = document.createElement("li")
    console.log(listData)

    listData.textContent = inputDataValue

    displayedData.appendChild(listData)
}

// 4. use the variable submitData and add an event listener, listening for a click and activating the function displayData

submitData.addEventListener("click", displayData)