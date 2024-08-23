
// javascript closure example

// outer function
function greet() {

    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g3 = greet();
console.log(g3); // returns the function definition
console.log(g3()); // returns the value
