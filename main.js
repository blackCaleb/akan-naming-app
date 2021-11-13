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



    var monthselected,yearselected,mtype=0,visited=0;

        function removeOptions(){  //removes options call each time the day selector is clicked 
        var x=document.getElementById('dayselect');
        while(x.length>29)
            { x.remove(x.length-1);}
            }

        function addOptions(mtype)
        {                              //adds options acc to mtype
        //alert('initialising');
        var i;
        var x=document.getElementById("dayselect");
        for(i=29;i<=mtype;i++)
        {   var option=document.createElement("option");

        option.text=i;
        try
          {//alert('trying');
          // for IE earlier than version 8
          x.add(option,x.options[null]);
          }
        catch (e)
          {//alert('catching');
          x.add(option,null);
          }
        }
        }                           
        function isleapyear(year){ //find if year is leap or not
                if((year%4)==0)
                {
                if((year%100)!=0)
                {
                return true;
                }
                else return false;
                }
                if((year%400)==0)
                    {

                    return true;

                    }

        else return false;
        }                   
