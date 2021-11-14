


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
