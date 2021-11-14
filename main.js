var curday = function(sp){
    today = new Date ();
    var dob = today.getDate();
    var mm = today.getMonth()+1; //this is because january is 0.
    var yyyy = today.getFullYear();

    if(dob<10) dob='0'+dd;
    if(month<10) month='0'+mm;
    return (month+sp+dob+sp+yearb)
};

console.log(curday('/'));
console.log(curday('-'));


window.onload = function () {
    //Reference the DropDownList.
    var yearb = document.getElementById("yearb");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1900; i <= currentYear; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        yearb.appendChild(option);
    }
};

if (Object.prototype.toString.call(dob) === "[object Date]") {
    // it is a date
    if (isNaN(dob.getTime())) {  // d.valueOf() could also work
    //   date is not valid
    } else {
    //   date is valid
    }
  } else {
    // not a date
  }