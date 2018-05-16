

function runAlert(){
    alert("Welcome! You're about to enter to Ryan Cosner's Project Website.\nIt's still under construction, but feel free to browse around anyway.\nThanks for visiting!");
}

function dateCode(){
    today = new Date;
    today = today.getMonth() + "/" + today.getDay() + "/" + today.getYear();
    return today;
}

function startUp(){
    //var visit=GetCookie();
    //var day=document.cookie.getDate();
    today = dateCode();
    oldDay=document.cookie.substring(0,10);
    if(today!=oldDay){
        runAlert();
        document.cookie=dateCode();
    }
}