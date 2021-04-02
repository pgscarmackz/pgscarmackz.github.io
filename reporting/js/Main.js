// Main.js

// Query menu type mit
var mit = getQueryUrlVariable("mit");
console.log("url.mit = " + mit);

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

if(mit === false) {
    // Home
    onRenderHomePage();
}
else if(mit === MenuItemType.revenue) {
    
}
else if(mit === MenuItemType.billing) {

}
else if(mit === MenuItemType.v1) {

}
else if(mit === MenuItemType.v2) {

}
else if(mit === MenuItemType.pfh) {

}
else if(mit === MenuItemType.licensing) {

}
else if(mit === MenuItemType.account) {

}
else if(mit === MenuItemType.signout) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");

    window.location.href = "./index.html";
}

/*
// Render reports
ReactDOM.render(
    <SummaryGreeting greetingMsg="Good night, Smith" />,
    document.getElementById("sum-content-greeting-sec")
);

ReactDOM.render(
    <SummaryRange
        week="3"
        range="April 24 - April 31"
    />,
    document.getElementById("sum-content-summary")
);


const rpData = [
    {
        id: 1, name: "All Around Cafe", address: "5058 S Waverly Rd Suit B, Lansing, MI", online: true, statusMsg: "Online", summary: {
            cds: 100, cdr: 75, cdn: 25,
            cws: 1000, cwr: 750, cwn: 250,
            lws: 2000, lwr: 1500, lwn: 500,
            tms: 3000, tmr: 2250, tmn: 750,
            lms: 4000, lmr: 2250, lmn: 1750,
        },
    },
    {
        id: 2, name: "Boost Mobile", address: "G3015 Dort Hwy, Burton, MI", online: true, statusMsg: "Online", summary: {
            cds: 300, cdr: 375, cdn: 325,
            cws: 4000, cwr: 3750, cwn: 3250,
            lws: 5000, lwr: 31500, lwn: 3500,
            tms: 6000, tmr: 32250, tmn: 3750,
            lms: 7000, lmr: 32250, lmn: 31750,
        },
    },
    {
        id: 3, name: "Gold Lounge", address: "2665 Navarre Ave, Suite F, Oregon, OH", online: false, statusMsg: "Offline", summary: {
            cds: 400, cdr: 475, cdn: 425,
            cws: 5000, cwr: 4750, cwn: 4250,
            lws: 6000, lwr: 41500, lwn: 4500,
            tms: 7000, tmr: 42250, tmn: 4750,
            lms: 8000, lmr: 42250, lmn: 41750,
        },
    },
];

ReactDOM.render(
    <SummaryReports
        data={rpData}
    />,
    document.getElementById("sum-content-reports")
);
*/
