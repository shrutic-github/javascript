let myArray = [];
let maxSize = 0;

// Function to create an array with the specified size
function createArray() {
  maxSize = parseInt(document.getElementById("arraySize").value);
  myArray = []; // Reset the array
  document.getElementById(
    "arrayResult"
  ).innerHTML = `Array created with size: ${maxSize}`;
}

// Function to add elements to the array
function addElement() {
  if (myArray.length >= maxSize) {
    document.getElementById("arrayResult").innerHTML =
      "Array is full. Cannot add more elements.";
    return;
  }

  const value = document.getElementById("addElement").value.trim();

  try {
    // Evaluate the input safely
    const evaluatedValue = eval(value);

    // Add element (either array or other types) to myArray
    myArray.push(evaluatedValue);

    document.getElementById(
      "arrayResult"
    ).innerHTML = `Element added. Current array: ${JSON.stringify(
      myArray,
      null,
      2
    )}`;
  } catch (error) {
    alert(
      `Invalid input: "${value}". Please enter a valid JavaScript expression.`
    );
  }
}

// Function to view the current array
function viewArray() {
  let arrayObjects = [];
  let resultText = `Current array: ${JSON.stringify(myArray, null, 2)}`;

  // Loop through the array to find any array objects and record their indices
  myArray.forEach((item, index) => {
    if (Array.isArray(item)) {
      arrayObjects.push(index);
    }
  });

  if (arrayObjects.length > 0) {
    resultText += `<br>Array contains the following array objects at indices: ${arrayObjects.join(
      ", "
    )}`;
  } else {
    resultText += "<br>The array does not contain any array objects.";
  }

  document.getElementById("arrayResult").innerHTML = resultText;
}
