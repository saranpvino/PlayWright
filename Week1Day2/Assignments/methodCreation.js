function launchBrowser(browserName){
    if(browserName === "Chrome"){
        console.log("Launching Chrome Browser");
    }   else if(browserName === "Firefox"){
        console.log("Launching Firefox Browser");
    }   else if(browserName === "Safari"){
        console.log("Launching Safari Browser");
    }   else if(browserName === "Edge"){
        console.log("Launching Edge Browser");
    }   else{
        console.log("Invalid Browser Name");
    }
}

    function runTests(){
        switch(browserName){
            case "Chrome":
                console.log("Running Tests on Chrome Browser");
                break;
            case "Firefox":
                console.log("Running Tests on Firefox Browser");    
                break;
            case "Safari":
                console.log("Running Tests on Safari Browser");
                break; 
            case "Edge":
                console.log("Running Tests on Edge Browser");
                break; 
            default:
                console.log("Invalid Browser Name");
        }
    }

    launchBrowser("Chrome");
    runTests();