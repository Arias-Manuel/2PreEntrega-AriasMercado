import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ bienvenidos }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((response) => {
      setProducts(response);
    });
  }, [categoryId]);

  return (
    <section>
      <h1 className="bienvenida">{bienvenidos}</h1>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;
