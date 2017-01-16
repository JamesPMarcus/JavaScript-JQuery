//set up the object
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();


//creating more object literals

var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
    
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();