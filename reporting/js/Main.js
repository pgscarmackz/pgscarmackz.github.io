// Main.js

// Query menu type mit
var mi = getQueryUrlVariable("mi");
console.log("url.mi = " + mi);

// Render SharedLayoutHeader
var token = sessionStorage.getItem("token");
var firstName = sessionStorage.getItem("firstName");
var lastName = sessionStorage.getItem("lastName");

if (!token) {
    //window.location.href = "../";
}

firstName = firstName ? firstName : "Firstname";
lastName = lastName ? lastName : "Lastname";

var unload = function (e) {
    
}
window.addEventListener("beforeunload", unload);

// Render SharedLayoutHeader
ReactDOM.render(
    <SharedLayoutHeader ownerName={firstName + " " + lastName} />,
    document.getElementById("content-header")
);

// Render SharedLayoutSideMenu
ReactDOM.render(
    <SharedLayoutSideMenu itemFocused="1" />,
    document.getElementById("sldm-content-sm")
);

if(mi === false) {
    onRenderHomePage();
}
else if(mi === MenuItemType.home) {
    onRenderHomePage();
}
else if(mi === MenuItemType.revenue) {
    
}
else if(mi === MenuItemType.billing) {

}
else if(mi === MenuItemType.v1) {
    onRenderListViewAccountPage();
}
else if(mi === MenuItemType.v2) {

}
else if(mi === MenuItemType.pfh) {

}
else if(mi === MenuItemType.licensing) {

}
else if(mi === MenuItemType.account) {
    onRenderAccountPage();
}
else if(mi === MenuItemType.signout) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");

    window.location.href = "./index.html";
}
