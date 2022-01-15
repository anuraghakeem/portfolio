import Data from "../../Data";
import "./styles.css";

const ClientData = Data.Clients;

function Clients() {
  const ClientCards = ClientData.map((client, key) => {
    return (
      <div className="card">
        <div className="card-image">
          <img src={client.Image}></img>
        </div>
      </div>
    );
  });
  return (
    <section className="Clients-container">
      <div className="row-custom">
        <div className="col-text">
          <div className="subTitle text-red">Worked For The Best</div>
          <div className="title-primary">
            <h2>Clients</h2>
          </div>
        </div>
      </div>
      <div className="row-custom cards">{ClientCards}</div>
    </section>
  );
}

export default Clients;
