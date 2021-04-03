// Home.js

const { Dropdown, DropdownButton, DropdownItemText, Button, overlay, OverlayTrigger, Popover } = window.ReactBootstrap;
//const { DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;

class SummaryGreeting extends React.Component {
    render() {
        return (
            <span>{this.props.greetingMsg}</span>            
            );
    }
}

class SummaryRange extends React.Component {
    render() {
        return (
            <span>Summary - Week {this.props.week}, {this.props.range}</span>
            );
    }
}

class SummaryReport extends React.Component {
    render() {
        const online = this.props.online ? "online" : "offline";
        /*console.log("online = " + online);*/

        return (
            <div className="rp-table-div">
                <div className="rp-img-div cs-default-color"><img id="icon-store-status" className="sum-icon-store-status-img" src={"./img/" + online + ".png"} alt="Img Status" /></div>
                <div className="rp-store-name-div cs-default-color"><span className="rp-store-name">{this.props.name}</span> | {this.props.address}</div>
                <div className="rp-online-div"><span className={"rp-" + online + "-text"}>{this.props.statusMsg}</span></div>
                <div className="rp-table-m-div">
                    <table>
                        <tbody>
                            <tr><th>Period</th><th className="sum-tbl-rest-column">Sales</th><th className="sum-tbl-rest-column">Redeem</th><th className="sum-tbl-rest-column">Net</th></tr>
                            <tr><td className="sum-tbl-first-column">Current Day</td><td className="sum-tbl-cell">${this.props.summary.cds}.00</td><td className="sum-tbl-cell">${this.props.summary.cdr}.00</td><td className="sum-tbl-cell">${this.props.summary.cdn}.00</td></tr>
                            <tr><td className="sum-tbl-first-column">Current Week</td><td className="sum-tbl-cell">${this.props.summary.cws}.00</td><td className="sum-tbl-cell">${this.props.summary.cwr}.00</td><td className="sum-tbl-cell">${this.props.summary.cwn}.00</td></tr>
                            <tr><td className="sum-tbl-first-column">Last Week</td><td className="sum-tbl-cell">${this.props.summary.lws}.00</td><td className="sum-tbl-cell">${this.props.summary.lwr}.00</td><td className="sum-tbl-cell">${this.props.summary.lwn}.00</td></tr>
                            <tr><td className="sum-tbl-first-column">This Month</td><td className="sum-tbl-cell">${this.props.summary.tms}.00</td><td className="sum-tbl-cell">${this.props.summary.tmr}.00</td><td className="sum-tbl-cell">${this.props.summary.tmn}.00</td></tr>
                            <tr><td className="sum-tbl-first-column">Last Month</td><td className="sum-tbl-cell">${this.props.summary.lms}.00</td><td className="sum-tbl-cell">${this.props.summary.lmr}.00</td><td className="sum-tbl-cell">${this.props.summary.lmn}.00</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            );
    }
}

class SummaryReports extends React.Component {
    render() {
        const reports = this.props.data.map(store => (
            <SummaryReport
                key={store.id}
                name={store.name}
                address={store.address}
                online={store.online}
                statusMsg={store.statusMsg}
                summary={store.summary}
            />
        ));

        return (
            <div id="content-reports-m" className="rp-content-main">
                {reports}
            </div>
            );
    }
}

class SummaryMainContentSub extends React.Component {
    render() {
        return (
            <div id="main-content-sub">
                <div id="sum-content-greeting-sec">
                </div>

                <div id="sum-content-summary">
                </div>

                <div id="sum-content-reports">
                </div>
            </div>
        );
    }
}

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

function onRenderHomePage() {
    /*
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
    */

    // Render main-content-sub
    ReactDOM.render(
        <SummaryMainContentSub />,
        document.getElementById("main-content")
    );

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

    ReactDOM.render(
        <SummaryReports
            data={rpData}
        />,
        document.getElementById("sum-content-reports")
    );
}
