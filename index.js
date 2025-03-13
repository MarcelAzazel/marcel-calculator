let x;
let y;
let z;
let operation;

// Function to get values and calculate answer 
document.getElementById("submitting").onclick = function(){
    // Getting variables
    x = Number(document.getElementById("first_number").value);
    y = Number(document.getElementById("second_number").value);
    operation = document.getElementById("operation").value;

    // Making calculation
    if(operation == "plus"){
        z = x + y;
    }
    else if(operation == "minus"){
        z = x - y;
    }
    else if(operation == "divided"){
        z = x / y;
    }
    else{
        z = x * y;
    }

    // Printing result
    console.log(z)

    // Assigning result to answer field
    document.getElementById("answer").textContent = z
}

// Function to reset calculator
document.getElementById("reset").onclick = function(){
    // Avoid using past numbers by accident
    x = 1
    y = 1
    document.getElementById("first_number").value = 1
    document.getElementById("second_number").value = 1
    document.getElementById("answer").textContent = 0
}