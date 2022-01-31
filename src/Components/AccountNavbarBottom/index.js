import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "./styles.css";
// import Images from "../../img"

// const AccountAvatar = Images.AccountAvatar

function AccountNavbarBottom(props){
// function AccountNavbarBottom() {
  const {address,balance,networkEnum,network,onboard,wallet} = props
  // console.log('balance: ',typeof(balance))
  return (
    <>
      {address && (
      <section className="AccountNavbar">
        <Navbar
          className={`navbar-main show-navbar background-dark`}
          expand="xl"
          fixed="bottom"
          collapseOnSelect
        >
          <Container >
          {/* <Container className="grid-1100"> */}
            <div>
              {/* <img src={AccountAvatar} className="account-avatar"></img> */}
              <span className="bottombar-text">{address.substr(0,6)}......{address.substring(address.length - 6, address.length)}</span>
              {/* <span className="bottombar-text">0x13...2e06</span> */}
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse>
              <Nav className="my-2 my-lg-0" navbarScroll>
                <div className='bottombar-details-right'><div className="bottombar-text">Balance: <span className="text-red">{Number(balance) > 0 ? Math.trunc((balance / 1000000000000000000)*1000000)/1000000 : '0'}{' '}ETH</span></div></div>
                {/* <div className="bottombar-details-right">
                  <div className="bottombar-text">Balance: 1 ETH</div>
                </div> */}
                <div className='bottombar-details-right'><div className="bottombar-text">Network: <span className="text-red">{networkEnum?.[Number(network)] || 'local'}</span></div></div>
                {/* <div className="bottombar-details-right">
                  <div className="bottombar-text">Network: local</div>
                </div> */}
                <div className="bottombar-details-right button-secondary2">
                  {wallet.provider && (
                  <a
                    className={`button-secondary change-wallet`}
                    href="javascript:void(0)"
                    onClick={onboard.walletSelect}
                  >
                    <span>Change Wallet</span>
                  </a>
                   )}
                </div>
                <div className="button-secondary2">
                  {wallet.provider && (
                  <a
                    className={`button-secondary logout`}
                    href="javascript:void(0)"
                    onClick={onboard.walletReset}
                  >
                    <span>Logout</span>
                  </a>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
       )} 
    </>
  );
}

export default AccountNavbarBottom;
