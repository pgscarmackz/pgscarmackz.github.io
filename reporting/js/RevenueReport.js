// RevenueReport.js

const { Dropdown, DropdownButton, DropdownItemText, Button, overlay, OverlayTrigger, Popover } = window.ReactBootstrap;

// For development only --- Start

// Render SharedLayoutHeader
var token = sessionStorage.getItem("token");
var firstName = sessionStorage.getItem("firstName");
var lastName = sessionStorage.getItem("lastName");

firstName = firstName ? firstName : "Firstname";
lastName = lastName ? lastName : "Lastname";

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

// For development only --- End
