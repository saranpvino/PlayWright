let browser="Chrome"
//Call back function
function checkBrowserVersion(bVersion){
setTimeout(()=>bVersion(browser),2000);
}
function browserVersion(b){
    let browserVersion = '157'
    console.log("Browser with Version: ",b,"-",browserVersion);
}
checkBrowserVersion(browserVersion);