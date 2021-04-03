// Account.js

class AccountMainContentSub extends React.Component {
    render() {
        return (
            <div id="main-content-sub">
                <p className="main-text-size">Account</p>
                <div className="row">
                    <div className="col-sm main-text-size-2">Name:</div>
                    <div className="col-sm">Rober Harrington</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Email:</div>
                    <div className="col-sm">r.harrington@host.com</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Current Password:</div>
                    <div className="col-sm">***********</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">New Password:</div>
                    <div className="col-sm">***********</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Repeat New Password:</div>
                    <div className="col-sm">***********</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm"></div>
                    <div className="col-sm"><button type="button" className="btn btn-primary" >Update</button></div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Active Locations:</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>

                <table className="table table-striped table-bordered account-btn-update">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>                    
                    </tr>
                    </thead>
                    <tbody>
                    <tr><td>Tiger Nixon</td><td>System Architect</td></tr>
                    <tr><td>Garrett Winters</td><td>Accountant</td></tr>
                    <tr><td>Ashton Cox</td><td>Junior Technical Author</td></tr>
                    <tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td></tr>
                    <tr><td>Airi Satou</td><td>Accountant</td></tr>
                    <tr><td>Brielle Williamson</td><td>Integration Specialist</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function onRenderAccountPage() {
    // Render main-content-sub
    ReactDOM.render(
        <AccountMainContentSub />,
        document.getElementById("main-content")
    );    
}
