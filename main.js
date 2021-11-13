var curday = function(sp){
    today = new Date ();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //this is because january is 0.
    var yyyy = today.getFullYear();

    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy)
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
