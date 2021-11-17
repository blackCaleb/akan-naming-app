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

  var akanName = function(){

    // variables
      var year = document.getElementById("year");
      var month = document.getElementById("month");
      var day = document.getElementById("dob");
      var male = document.getElementById("male");
      var female = document.getElementById("female");

    // attaching a function to the event listener
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = new Date(year + "/" + month + "/" + day);
    var find = day.getDay();
    var Display = document.getElementById("Display");
    var name = "akan";
     // the condition statements

    // for Female gender
    if (female == true){

      if(day === "Sunday"){
        akan = "Akosua"
      }
      else if(day === "Monday"){
        akan = "Adwoa"
      }
      else if(day === "Tuesday"){
        akan = "Abenaa"
      }
      else if(day === "Wednesday"){
        akan = "Akuna"
      }
      else if(day === "Thursday"){
        akan = "Yaa"
      }
      else if(day === "Friday"){
        akan = "Afua"
      }
      else if(day === "Saturday"){
        akan = "Ama"
      }
    }

    //for Male gender
    if (male == true){

      if(day === "Sunday"){
        akan = "Kwasi"
      }
      else if(day === "Monday"){
        akan = "Kwadwo"
      }
      else if(day === "Tuesday"){
        akan = "Kwabena"
      }
      else if(day === "Wednesday"){
        akan = "Kwaku"
      }
      else if(day === "Thursday"){
        akan = "Yaw"
      }
      else if(day === "Friday"){
        akan = "Kofi"
      }
      else if(day === "Saturday"){
        akan = "Kwame"
      }
    }

    // validating
    if (month === "" && year === "" && day === ""){
      alert("invalid data");
    }

    // end of condition

    if(male == true && year > 0 && month > 0){
      Display.style.color = "black"
      Display.innerHTML = "Your Akan name is" + akan + "and you were born on" + day;
    };
    if(female == true && year > 0 && month > 0){
      Display.style.color = "black"
      Display.innerHTML = "Hey there" + akan + "you were born on" + day;
    }
    console.log("akan");

  };
  
  