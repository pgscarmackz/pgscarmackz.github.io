
var MenuItemType = {
    home: "home",
    revenue: "revenue",
    billing: "billing",
    v1: "v1",
    v2: "v2",
    pfh: "pfh",
    licensing: "licensing",
    account: "account",
    signout: "signout"        
}

function getQueryUrlVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
