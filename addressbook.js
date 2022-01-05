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

    toString() {
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
            ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}

//add
let personContact1 = new Contact("Ten", "Duk", "India", "Banglore", "Karnataka", "123 122", "+91 7018485591", "dhugkar@gmail.com");
let addressBookArray = new Array();
addressBookArray.push(personContact1);
let personContact2 = new Contact("Methok", "Lhaze", "Canada", "Calgary", "Alberta", "331 1222", "+1 7018485591", "methok@gmail.com");
addressBookArray.push(personContact2);
console.log(addressBookArray);

//update
let index = addressBookArray.findIndex((obj => obj.firstName == "Methok"));
console.log("Before Update : " + addressBookArray[index]);
addressBookArray[index].city = "Toronto";
console.log("After Update : " + addressBookArray[index]);

//delete
index = addressBookArray.findIndex((obj => obj.firstName == "Methok"));
addressBookArray.pop(index);
console.log("After Deletion");
console.log(addressBookArray);

//count contact
let count = addressBookArray.length;
console.log("Total contact in addressbook: " + count);

// check for Duplicate Entry
let personContact3 = new Contact("Ten", "Duk", "India", "Banglore", "Karnataka", "123 122", "+91 7018485591", "dhugkar@gmail.com");

// check = false;
// for (i = 0; i < count; i++) {
//     if (addressBookArray[i].firstName == personContact3.firstName) {
//         console.log("Duplicate Entry");
//         check = true;
//         break;
//     }
// }
// if (check == false)
//     addressBookArray.push(personContact3);

if (addressBookArray.findIndex(contact => contact.firstName == personContact3.firstName) == -1) {
    addressBookArray.push(personContact3);
}
else {
    console.log("Duplicate Entry");
}
console.log(addressBookArray);
addressBookArray.push(personContact2)
//search and view the contact
let cityOrState = addressBookArray.filter(contact => (contact.state == "Karnataka") || (contact.city == "Banglore"));
if (cityOrState.length == 0) {
    console.log("contact not found");
} else {
    console.log("Contacts from City: Banglore or State: Karnataka are ");
    console.log(cityOrState);
}