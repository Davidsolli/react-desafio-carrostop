import Card from "../../components/Card";
import Comment from "../../components/Comment";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />

      <section id="dsc-catalog-container">
        <h2>Venha nos visitar</h2>
        <div className="dsc-cards-area">
          <div className="dsc-card">
            <Card />
          </div>
          <div className="dsc-card">
            <Card />
          </div>
        </div>
      </section>

      <section id="dsc-coments-container">
        <div className="dsc-container">
          <h2>O que estão dizendo</h2>
          <div className="dsc-coments-area">
            <div className="dsc-comment">
              <Comment />
            </div>
            <div className="dsc-comment">
              <Comment />
            </div>
            <div className="dsc-comment">
              <Comment />
            </div>
            <div className="dsc-comment">
              <Comment />
            </div>
            <div className="dsc-comment">
              <Comment />
            </div>
            <div className="dsc-comment">
              <Comment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
