
class SharedLayoutHeader extends React.Component {
	render() {
		return (
            <div id="content-header-sec">
                <label htmlFor="sldm-check" className="sldm-label-check">
                    <div id="id-header-menu-icon-bg"><img id="id-header-menu-icon" src="./img/menu9dots-c.png" alt="Menu Icon" /></div>
                </label>
                <div id="logo" className="hd-header-logo">
                    <img className="hd-header-logo-img" id="logoImg" src="./img/vgt_central.png" alt="vgtCentral" />
                </div>
                <div id="id-header-gear" className="hd-header-gear">
                    <img className="hd-header-gear-img" src="./img/gear2.png" alt="Gear Icon" />
                </div>
                <div id="ownerName" className="hd-header-owner">
                    {this.props.ownerName}
                </div>
            </div>
			);
	}
}

class SharedLayoutSideMenu extends React.Component {
    onClickSignOut() {
        onRenderSignOutPage();        
    }

    render() {
        return (
            <div id="content-sm-sec" className="sm-content-sm-sec">
                <div id="sm-sm-bg">
                    <nav className="sm-nav">
                        <ul>
                            <li>
                                <a href="./main.html?mi=home" className="sidemenu-ul-li-a"><i className="fas fa-home fa-lg sm-sm-i-5px"></i><div className="sidemenu-item-text">Home</div></a>
                            </li>
                            <li className="dropdown">
                                <a className="sidemenu-ul-li-a"><i className="fas fa-table fa-lg sm-sm-i-6px"></i><div className="sidemenu-item-text">Reports<span>&rsaquo;</span></div></a>
                                <ul>
                                    <li><a href="./main.html?mi=revenue" className="sidemenu-ul-li-a"><i className="fas fa-table fa-lg sm-sm-i-6px"></i><div className="sidemenu-item-text">Revenue Report</div></a></li>
                                    <li><a href="./main.html?mi=billing" className="sidemenu-ul-li-a"><i className="fas fa-table fa-lg sm-sm-i-6px"></i><div className="sidemenu-item-text">Billing Report</div></a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="sidemenu-ul-li-a"><i className="fas fa-eye fa-lg sm-sm-i-5px"></i><div className="sidemenu-item-text">Live View<span>&rsaquo;</span></div></a>
                                <ul>
                                    <li><a href="./main.html?mi=v1" className="sidemenu-ul-li-a"><i className="fas fa-eye fa-lg sm-sm-i-5px"></i><div className="sidemenu-item-text">Vendor 1</div></a></li>
                                    <li><a href="./main.html?mi=v2" className="sidemenu-ul-li-a"><i className="fas fa-eye fa-lg sm-sm-i-5px"></i><div className="sidemenu-item-text">Vendor 2</div></a></li>
                                    <li><a href="./main.html?mi=pfh" className="sidemenu-ul-li-a"><i className="fas fa-eye fa-lg sm-sm-i-5px"></i><div className="sidemenu-item-text">Play From Home</div></a></li>
                                </ul>
                            </li>
                            <li><a href="./main.html?mi=licensing" className="sidemenu-ul-li-a"><i className="fas fa-lock fa-lg sm-sm-i-9px"></i><div className="sidemenu-item-text">Licensing</div></a></li>
                            <li><a className="sidemenu-ul-li-a-sep"><img src="./img/grey.png" alt="Grey" className="sidemenu-icon-seperator" /></a></li>
                            <li><a href="./main.html?mi=account" className="sidemenu-ul-li-a"><i className="fas fa-user fa-lg demo-sm-i-9px"></i><div className="sidemenu-item-text">Account</div></a></li>
                            <li><a href="./main.html?mi=signout" className="sidemenu-ul-li-a"><i className="fas fa-sign-out-alt fa-lg demo-sm-i-9px"></i><div className="sidemenu-item-text">Sign Out</div></a></li>
                        </ul>
                    </nav>
                </div>
            </div >
            );
    }
}
