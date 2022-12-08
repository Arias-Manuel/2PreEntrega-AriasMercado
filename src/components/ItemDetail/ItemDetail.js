import Counter from "../Counter/Counter";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <section className="ItemDetail">
      <h2 className="producto-nombre">{product?.name}</h2>
      <img
        className="ItemDetail-img"
        src={product?.img}
        alt={product?.name}
      ></img>
      <h3 className="description">{product?.description}</h3>
      <h4 className="price">${product?.price}</h4>
      <Counter />
    </section>
  );
};

export default ItemDetail;
