import './ItemListContainer.css'

const ItemListContainer = ({ saludos, prontoAbriremos  }) => {

     return (

      <section className="mt-3 temporal">
        <h2 className="text-uppercase fw-bolder">{saludos}</h2>

        <h2 className="text-uppercase fst-italic">{ prontoAbriremos }</h2>
      </section>
    )
};

export default ItemListContainer