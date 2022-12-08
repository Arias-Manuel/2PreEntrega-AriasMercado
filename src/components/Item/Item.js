import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <section className="Item">
      <img src={product.img} className="portada" alt={product.name} />
      <div className="Item-contenedor">
        <h3>{product.name}</h3>
        <p className="precio">$ {product.price} Dolares</p>
        <Link to={`/item/${product.id}`}>
          <button type="button" className="button-item">
            Ver mas
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Item;
