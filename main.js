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

  // for year
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
      var yearbirth = document.getElementById("year");
      var monthbirth = document.getElementById("month");
      var daybirth = document.getElementById("dob");
      var gender = document.getElementById("gender");


    //   adding to DOM property
    document.getElementById("but").onclick = function(){

    // attaching a function to the event listener
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = week[new Date(year.val()+'/'+month.val()+'/'+dob.val()).getDay()];
    // var name;

    // the condition statements

    // for Female gender
    if (gender.checked() == "Female"){

      if(day === "Sunday"){
        name = "Akosua"
      }
      else if(day === "Monday"){
        name = "Adwoa"
      }
      else if(day === "Tuesday"){
        name = "Abenaa"
      }
      else if(day === "Wednesday"){
        name = "Akuna"
      }
      else if(day === "Thursday"){
        name = "Yaa"
      }
      else if(day === "Friday"){
        name = "Afua"
      }
      else if(day === "Saturday"){
        name = "Ama"
      }
    }

    //for Male gender
    if (gender.checked() === "Male"){

      if(day === "Sunday"){
        name = "Kwasi"
      }
      else if(day === "Monday"){
        name = "Kwadwo"
      }
      else if(day === "Tuesday"){
        name = "Kwabena"
      }
      else if(day === "Wednesday"){
        name = "Kwaku"
      }
      else if(day === "Thursday"){
        name = "Yaw"
      }
      else if(day === "Friday"){
        name = "Kofi"
      }
      else if(day === "Saturday"){
        name = "Kwame"
      }
    }

    // end of condition

    else{
      Display.innerHTML = "Your akan name is" + name + "and you were born on" + day
    }
    }