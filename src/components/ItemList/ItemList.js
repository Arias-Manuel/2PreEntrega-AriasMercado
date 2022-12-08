import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <section className="ItemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ItemList;
