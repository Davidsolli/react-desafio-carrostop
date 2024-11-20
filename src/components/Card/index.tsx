import "./styles.css";
import carImg from "../../assets/car-card.png";

export default function Card() {
  return (
    <>
      <div className="dsc-car-card dsc-catalog-container">
        <img src={carImg} alt="carImg" />
        <h4>Lorem ipsum dolor</h4>
      </div>
    </>
  );
}
