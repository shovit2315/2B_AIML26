let firstname = "shovit "
let lastname = "sharma"
console.log("my first name is " + firstname);
console.log("my last name is " + lastname);
console.log(`my name is: ${firstname} ${lastname}`);


function fullname(first, last){
    return `${first} ${last}`;
}
let name=`hello ${fullname(firstname, lastname)}`;
console.log(name);
