const browserVersion ='chrome';
function getBrowserVersion (){
if (browserVersion.startsWith('chrome')){
let browserVersion= "128.0.6613.138";
console.log("Browser version is"+ " "+ browserVersion);
}
else if (browserVersion.startsWith('edge')){
let browserVersion = "You are in Edge browser";
console.log(" Browser Version is "+ " "+ browserVersion);
}
else{
let browserVersion=null;
console.log("Browser version is"+" "+ browserVersion);
}
}
getBrowserVersion();
