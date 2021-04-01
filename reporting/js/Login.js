const { Dropdown, DropdownButton, DropdownItemText, Button, overlay, OverlayTrigger, Popover } = window.ReactBootstrap;
//const { DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;

class AppVersion extends React.Component {
    render() {
        return (
            <div id="versionText">{this.props.version}</div>
            );
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        /*console.log(e.target.value);*/
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const u = this.state.username.trim();
        const p = this.state.password.trim();
        if (!u || !p) {
            //alert("Invalid username or password !");
            $('#messageBox').modal('show')
            return; // Invalid input
        }

        // Send login request to the server
        const loginData =
        {
            "username": u,
            "password": p
        };

        if(u === "johnd" && p === "pong!") {
            var data = {
                "token": "3FB33306-6437-4FBA-9BF2-65595995F69C",
                "firstName": "John",
                "lastName": "Doe"
            };
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("firstName", data.firstName);
            sessionStorage.setItem("lastName", data.lastName);

            location.href = "./main.html";
        }
        else {
            alert("Username or password is wrong !");
        }

        /*
        nm.sendRequest(
            nm.Mode.Post,
            nm.ApiUrL.Login,
            JSON.stringify(loginData),
            function (response) {
                console.log("Api/Login Response: " + JSON.stringify(response));

                if (response.rc === nm.NetworkReturnCode.RC_OK) {
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("firstName", response.data.firstName);
                    sessionStorage.setItem("lastName", response.data.lastName);

                    location.href = "./main/html";
                }
                else
                {
                    alert("Username or password is wrong !");
                }
            });

        const xhr = new XMLHttpRequest();
        xhr.open(nm.Mode.Post, nm.ApiUrL.Login, true);
        xhr.setRequestHeader("Content-Type", "application/json");        
        xhr.onload = () => {
            const res = JSON.parse(xhr.responseText);
            console.log("Api/Login Response: " + JSON.stringify(res));
            console.log("token = " + res.rc);
            if (res.rc === nm.NetworkReturnCode.RC_OK) {
                console.log("token = " + res.data.token);
                console.log("firstName = " + res.data.firstName);
                console.log("lastName = " + res.data.lastName);
            }
        };
        xhr.send(JSON.stringify(loginData));
        */

        // Clear the state
        this.setState({ username: this.state.username, password: "" });
    }

    render() {
        return (
            <form className="loginForm">
                <p><input
                    type="text"
                    id="username"
                    className="text_field"
                    placeholder="User name"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                /></p>
                <p><input
                    type="password"
                    id="password"
                    className="text_field"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                /></p>
                <div id="login_control">
                    <p><input type="submit" id="btn_login" value="Login" onClick={this.handleSubmit} /></p>
                    <p><a id="forget_pwd" href="/Home/ForgetPassword">Forgot your password ?</a></p>
                </div>
            </form>
            );
    }
}

ReactDOM.render(
    <LoginForm />,
    document.getElementById("content")
);

ReactDOM.render(
    <AppVersion version={AppSetting.version} />,
    document.getElementById("versionLabel")
);

console.log(AppSetting.version);
console.log(AppSetting.revision);