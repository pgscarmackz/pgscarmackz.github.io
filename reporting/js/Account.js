// Account.js

class AccountMainContentSub extends React.Component {
    render() {
        return (
            <div id="main-content-sub">
                <p className="main-text-size">Account</p>
                <div className="row">
                    <div className="col-sm main-text-size-2">Name:</div>
                    <div className="col-sm"><p className="acct-field-text">Robert Harrington</p></div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Email:</div>
                    <div className="col-sm"><p className="acct-field-text">r.harrington@host.com</p></div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>
                <div className="row acct-row-spacer">
                    <div className="col-sm"></div>
                </div>

                <div>
                    <form>
                        <div className="row acct-row-input-size">
                            <div className="col-sm main-text-size-2">Current Password:</div>
                            <div className="col-sm"><input type="password" className="form-control" id="currentPassword" placeholder=""/></div>
                            <div className="col-sm"></div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row acct-row-input-size">
                            <div className="col-sm main-text-size-2">New Password:</div>
                            <div className="col-sm"><input type="password" className="form-control" id="newPassword" placeholder=""/></div>
                            <div className="col-sm"></div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row acct-row-input-size">
                            <div className="col-sm main-text-size-2">Repeat New Password:</div>
                            <div className="col-sm"><input type="password" className="form-control" id="repeatPassword" placeholder=""/></div>
                            <div className="col-sm"></div>
                            <div className="col-sm"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm"></div>
                            <div className="col-sm"><button type="button" className="btn btn-primary acct-btn-update">Update</button></div>
                            <div className="col-sm"></div>
                            <div className="col-sm"></div>
                        </div>
                    </form>
                </div>
            
                <div className="row acct-row-spacer">
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div className="col-sm main-text-size-2">Active Locations:</div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                    <div className="col-sm"></div>
                </div>

                <table className="table table-striped table-bordered acct-location-tbl">
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
