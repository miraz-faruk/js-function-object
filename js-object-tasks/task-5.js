// Loop through an object and print the key-value pairs with their types 

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (const prop in myObject) {
    console.log("key:", prop, "| type:", myObject[prop]);
}