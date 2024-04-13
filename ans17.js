//Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.
var guests = ["Usman", "Mansoor", "Mohsin", "Sultan", "Ifraheem", "Zakariyah", "Asadullah"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Assalaam O alikum ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
