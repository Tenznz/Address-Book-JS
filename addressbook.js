class Contact {
    constructor(firstname, lastname, address, city, state, zipcode, phoneNumber, emailId) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.emailId = emailId;
    }

    get firstname() { return this._firstname; }
    set firstname(firstname) {
            this._firstname = firstname;
    }

    get lastname() { return this._lastname; }
    set lastname(lastname) {
            this._lastname = lastname;
    }

    get address() { return this._address; }
    set address(address) {
            this._address = address;
    }

    get city() { return this._city; }
    set city(city) {
            this._city = city;
    }

    get state() { return this._state; }
    set state(state) {
            this._state = state;
    }

    get zipcode() { return this._zipcode; }
    set zipcode(zipcode) {
            this._zipcode = zipcode;
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
            this._phoneNumber = phoneNumber;
    }

    get emailId() { return this._emailId; }
    set emailId(emailId) {
            this._emailId = emailId;
    }

    toString() {
        return "firstname = " + this.firstname + ", lastname = " + this.lastname + ", address = " + this.address +
            ", city = " + this.city + ", state = " + this.state + ", zipcode = " + this.zipcode +
            ", phoneNumber = " + this.phoneNumber + ", emailId = " + this.emailId;
    }
}

let personContact = new Contact("ten", "duk", "India", "banglore", "Karnataka", "123", "7018485591", "dhugkar@gmail.com");
console.log(personContact.toString());