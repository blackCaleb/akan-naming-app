var curday = function(sp){
    today = new Date ();
    var dob = today.getDate();
    var mm = today.getMonth()+1; //this is because january is 0.
    var year = today.getFullYear();

    if(dob<10) dob='0'+dd;
    if(month<10) month='0'+mm;
    return (month+sp+dob+sp+year)
};

console.log(curday('/'));
console.log(curday('-'));


window.onload = function () {
    //Reference the DropDownList.
    var year = document.getElementById("year");

    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();

    //Loop and add the Year values to DropDownList.
    for (var i = 1900; i <= currentYear; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        year.appendChild(option);
    }
};



  function generatename() {
      var yearbirth = document.getElementById("year");
      var monthbirth = document.getElementById("month");
      var daybirth = document.getElementById("dob");
      var gender = document.getElementById("gender");


    //   adding to DOM property
    document.getElementById("but").onclick = generatename;

    // attaching a function to the event listener
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = week[new Date(year.val()+'/'+month.val()+'/'+dob.val()).getDay()];
    var name;

    // the condition statements

    // for Male gender
    if (gender.val() === "Male"){

      day === "Sunday" ? (name = "Kwasi")
      : day === "Monday" ? (name = "Kwadwo")
      : day === "Tuesday" ? (name = "Kwabena")
      : day === "Wednesday" ? (name = "Kwaku")
      : day === "Thursday" ? (name = "Yaw")
      : day === "Friday" ? (name = "Kofi")
      : day === "Saturday" ? (name = "Kwame");

    }
  }
