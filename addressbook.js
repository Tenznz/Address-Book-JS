class Contact {
    constructor(firstName, lastName, address, city, state, zipcode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    get firstName() { return this._firstname; }
    set firstName(firstName) {
        let pattern1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern1.test(firstName))
            this._firstname = firstName;
        else console.log('FirstName is Incorrect!');
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let pattern2 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern2.test(lastName))
            this._lastName = lastName;
        else console.log('LastName is Incorrect!');
    }

    get address() { return this._address; }
    set address(address) {
        let pattern3 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern3.test(address))
            this._address = address;
        else console.log('Address is Incorrect!');
    }

    get city() { return this._city; }
    set city(city) {
        let pattern4 = RegExp('^[A-Z]{1}[a-z]{4,}$');
        if (pattern4.test(city))
            this._city = city;
        else console.log('City is Incorrect!');
    }

    get state() { return this._state; }
    set state(state) {
        let pattern5 = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (pattern5.test(state))
            this._state = state;
        else console.log('State is Incorrect!');
    }

    get zipcode() { return this._zipcode; }
    set zipcode(zipcode) {
        let pattern6 = RegExp('^[0-9]{3}?[\\s,-]{0,1}[0-9]{3,}$');
        if (pattern6.test(zipcode))
            this._zipcode = zipcode;
        else console.log('Zipcode is Incorrect!');
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let pattern7 = RegExp('^[+][0-9]{1,2}\\s?[1-9]{1}[0-9]{9}$');
        if (pattern7.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else console.log('PhoneNumber is Incorrect!');
    }

    get email() { return this._email; }
    set email(email) {
        let pattern8 = RegExp('^[0-9a-zA-Z+-._]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}.([a-zA-z]{2,3})*$');
        if (pattern8.test(email))
            this._email = email;
        else console.log('email is Incorrect!');
    }
}

//add contact
function nameRegex() {
    let pattern1 = RegExp('^[A-Z]{1}[a-z]{2,}$');
    testText = prompt("->");
    while (pattern1.test(testText) != true) {
        console.log('Incorrect format! ');
        testText = prompt("->");
    }
    return testText;
}
function phoneNoRegex() {
    let phonePattern = RegExp('^[+][0-9]{1,2}\\s[7-9]{1}[0-9]{9}$');
    testText = prompt("->");
    while (phonePattern.test(testText) != true) {
        console.log('Incorrect format! ');
        testText = prompt("->");
    }
    return testText;
}
function emailRegex() {
    let emailPattern = RegExp('^[0-9a-zA-Z+-._]+@[0-9a-zA-Z]+.[a-zA-Z]{2,3}.([a-zA-z]{2,3})*$');
    testText = prompt("->");
    while (emailPattern.test(testText) != true) {
        console.log('Incorrect format! ');
        testText = prompt("->");
    }
    return testText;
}
function addressRegex() {
    let addressPattern = RegExp('^[A-Z]{1}[a-z]{4,}$');
    testText = prompt("->");
    while (addressPattern.test(testText) != true) {
        console.log('Incorrect format! ');
        testText = prompt("->");
    }
    return testText;
}
function zipCodeRegex() {
    let zipCodePattern = RegExp('^[0-9]{3}?[\\s,-]{0,1}[0-9]{3,}$');
    testText = prompt("->");
    while (zipCodePattern.test(testText) != true) {
        console.log('Incorrect format! ');
        testText = prompt("->");
    }
    return testText;
}

function addContact() {
    // console.log("Enter First Name: ");
    // fName = nameRegex();
    // console.log("Enter Last Name: ");
    // lName = nameRegex();
    // console.log("Enter Address: ");
    // address = addressRegex();
    // console.log("Enter City: ");
    // city = addressRegex();
    // console.log("Enter State: ");
    // state = addressRegex();
    // console.log("Enter Zipcode: ");
    // zipcode = zipCodeRegex();
    // console.log("Enter Phone number: ");
    // phoneNumber = phoneNoRegex();
    // console.log("Enter email: ");
    // email = emailRegex();
    // contact = new Contact(fName, lName, address, city, state, zipcode, phoneNumber, email);
    // duplicateCheck(contact);
    let personContact1 = new Contact("Ten", "Duk", "India", "Banglore", "Karnataka", "1231222", "+91 7018485591", "dhugkar@gmail.com");
    duplicateCheck(personContact1);
    let personContact2 = new Contact("Methok", "Lhaze", "Canada", "Calgary", "Alberta", "3311222", "+91 7018485591", "methok@gmail.com");
    duplicateCheck(personContact2);
    let personContact4 = new Contact("Babu", "Rao", "India", "Banglore", "Karnataka", "1121222", "+91 1232311131", "baburao@gmail.com");
    duplicateCheck(personContact4)
    let personContact5 = new Contact("Aman", "Rao", "India", "Patna", "Bihar", "1121222", "+91 4564567898", "Aman@gmail.com");
    duplicateCheck(personContact5)

}
function updateContact(fname, updateCity) {
    let index = addressBookArray.findIndex(obj => (obj.firstName == fname));
    if (index != -1) {
        addressBookArray[index].city = updateCity;
    } else
        console.log("not found");
}

function deleteContact(fname) {
    index = addressBookArray.findIndex((obj => obj.firstName == fname));
    addressBookArray.pop(index);
    console.log("Deletion successful..!!");
}
//count contact
function getCount() {
    let count = addressBookArray.length;
    return count;
}
// check for Duplicate Entry
function duplicateCheck(personContact) {
    if (addressBookArray.findIndex(contact => contact.firstName == personContact.firstName) == -1) {
        addressBookArray.push(personContact);
    }
    else {
        console.log("Duplicate Entry.Contact not added to addressbook");
    }
}

//search and view the contact
function seachByCityORState(searchCityState) {
    let cityOrState = addressBookArray.filter(contact => ((contact.city == searchCityState) || (contact.state == searchCityState)));
    if (cityOrState.length == 0) {
        console.log("contact not found");
    }
    number = countByField(searchCityState);
    console.log("total count:" + number);
    console.log("Contacts from City: Banglore or State: Karnataka are ");
    console.log(cityOrState);
}

//count the search by city or state
function countByField(countName) {
    let count = addressBookArray.filter(person => person.city == countName).reduce((count) => count + 1, 0);
    return count;
}
//print
function showAddressBook() {
    console.log(addressBookArray);
    console.log(getCount() + " contact in addressbook")
}

function compareByFirstName(a, b) {
    if (a.firstName < b.firstName) {
        return -1;
    }
    if (a.firstName > b.firstName) {
        return 1;
    }
    return 0;
}

function compareByCity(a, b) {
    if (a.city < b.city) {
        return -1;
    }
    if (a.city > b.city) {
        return 1;
    }
    return 0;
}

function compareByState(a, b) {
    if (a.state < b.state) {
        return -1;
    }
    if (a.state > b.state) {
        return 1;
    }
    return 0;
}

function compareByZip(a, b) {
    if (a.zip < b.zip) {
        return -1;
    }
    if (a.zip > b.zip) {
        return 1;
    }
    return 0;
}
function sortBy(choice) {
    console.log("AddressBook After Sorting");
    switch (choice) {
        case 1:
            console.log(addressBookArray.sort(compareByFirstName));
            break;
        case 2:
            console.log(addressBookArray.sort(compareByCity));
            break;
        case 3:
            console.log(addressBookArray.sort(compareByState));
            break;
        case 4:
            console.log(addressBookArray.sort(compareByZip));
            break;
        default:
            console.log("Invalid Input");
    }

}
const prompt = require('prompt-sync')();
const EXIT = 7;
let addressBookArray = new Array();
let again = "yes";
while (again.toLowerCase() == "yes") {
    console.log("enter number in the following \n\t1.Add contact\n\t2.update\n\t3.delete\n\t4.print\n\t5.search by city or state\n\t6.sort by first name\n\t" + EXIT + ".Exit");
    let input = parseInt(prompt("Enter option"));
    switch (input) {
        case 1: addContact(); break;
        case 2:
            let fName = prompt("Enter first name");
            let updateCity = prompt("Enter city you want to update");
            updateContact(fName, updateCity);
            break;
        case 3:
            let delFName = prompt("Enter first name");
            deleteContact(delFName);
            break;
        case 4:
            showAddressBook();
            break;
        case 5:
            let searchText = prompt("Enter city or state name");
            seachByCityORState(searchText);
            break;
        case 6:
            console.log("1.First Name 2.City 3.State 4.Zip")
            let sortby = parseInt(prompt("->"));
            sortBy(sortby);

            break;
        case EXIT:
            console.log("bye bye ");
            again = "no";
            break;
        default:
            console.log("invalid input")
    }
}