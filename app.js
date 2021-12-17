let isLoggedIn;
let time;
let hadbreakfast;

hadbreakfast = false;
isLoggedIn = true;
time = 8;


if(isLoggedIn){
    console.log("welcome back");
    
    if (time < 10) {
        console.log("Good Morning")
        
        if(hadbreakfast){
            console.log("Good job");
        }
        else{
            console.log("U need to eat");
        }
    }
    else{
        console.log("Good Day")
    }
}
else{
    console.log("Yu need to login")
}


