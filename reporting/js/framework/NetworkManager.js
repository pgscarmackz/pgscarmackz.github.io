
var nm = {
    NetworkReturnCode: {
        RC_OK: 1000,
        RC_FAIL: 1001,
        RC_NULL_PARAMETER: 1002,
        RC_INVALID_PARAMETER: 1003,
        RC_INVALID_LOGIN: 1004,
    },

    ApiUrL: {
        Login: "Api/Login",
        StoreSummary: "Api/StoreSummary",
    },

    Mode: {
        Post: "POST",
        Get: "GET",
    },

    sendRequest: function (mode, url, data, callback) {
        var xhr = new XMLHttpRequest();
        nm.xhr = xhr;

        xhr.open(mode, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === XMLHttpRequest.DONE)
            {
                console.log("NetworkManager: " + xhr.responseText);

                if (xhr.status >= 200 && xhr.status <= 207)
                {
                    callback(JSON.parse(xhr.responseText));
                }
                else if (xhr.status === 0)
                {
                    // request cancelled
                    console.log(url + " " + "request cancelled");
                } else
                {
                    //throw new Error(pfh.ErrorCode.NetworkGeneral + xhr.responseText);
                }
            }

            nm.xhr = null;
        };
        xhr.send(data);

        /*
        xhr.onload = () => {
            var res = JSON.parse(xhr.responseText);
            if (res.rc === nm.NetworkReturnCode.RC_OK) {
                console.log("token = " + res.data.token);
                console.log("firstName = " + res.data.firstName);
                console.log("lastName = " + res.data.lastName);
            }
        };
        xhr.send(JSON.stringify(loginData));
        */
    },
};
