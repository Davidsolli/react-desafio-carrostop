import Card from "../../components/Card";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />

      <section id="dsc-catalog-container">
        <h2>Venha nos visitar</h2>
        <div className="dsc-cards-area">
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
        </div>
      </section>
      
      <section className="dsc-coments">

      </section>
    </>
  );
}
