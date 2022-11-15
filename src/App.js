import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Divider from "./Components/Divider";
import Skills from "./Components/Skills";
import Clients from "./Components/Clients";
import Projects from "./Components/Projects";
import ProductCaseStudy from "./Components/ProductCaseStudy";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import Menubar from "./Components/Menubar";
import DotRing from "./Components/DotCursor";
import AccountNavbarBottom from "./Components/AccountNavbarBottom";

function App(props) {
  return (
    <div className="App App-Container">
      <DotRing />
      <Menubar
        onboard={props.onboard}
        wallet={props.wallet}
        sendInternalTransaction={props.sendInternalTransaction}
        readyToTransact={props.readyToTransact}
        sendHash={props.sendHash}
        sendTransaction={props.sendTransaction}
        notify={props.notify}
        address={props.address}
        setToAddress={props.setToAddress}
      />
      <AccountNavbarBottom
        address={props.address}
        balance={props.balance}
        networkEnum={props.networkEnum}
        network={props.network}
        wallet={props.wallet}
        onboard={props.onboard}
      />
      <div class="grid-1100">
        <Banner />
        <Divider />
        <Skills />
        <Divider />
        <ProductCaseStudy />
        <Divider />
        <Projects />
        <Divider />
        <Resume />
        <Divider />
        <Clients />
        <Divider />
        {/* <Pricing />
        <Divider /> */}
        <Contact />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
