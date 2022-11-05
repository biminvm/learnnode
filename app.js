console.log('hello from node app');

var passenger = {
    name : "Passenger",
    email : "passenger1@mail.com",
    age : 45,
    phone : [12345,123456]
};
console.log(passenger);
var data = JSON.stringify(passenger);
console.log(data);
var pass = JSON.parse(data);
console.log(pass);
