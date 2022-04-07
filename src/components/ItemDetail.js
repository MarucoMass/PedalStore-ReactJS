import ItemCount from "./ItemCount";
const ItemDetail = ( {item} ) => {

    function onAddItem(ItemCount){
        alert(`Lleva ${ItemCount} ${item.title}`);
    }

    return(
        <>
        { item && item.img ?
            <div className="card my-3  CardDetail">
                <div className="row g-0">
                    <div className="col-md-4 my-3 CardColumn">
                    <img src={item.img} className="img-fluid rounded-start" alt="Imágen del producto"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body bg-light">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <p className="card-text"><small className="text-muted">Stock: {item.stock}</small></p>
                            <p className="card-text">{item.description}</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                        </div>
                    </div>
                </div>
            </div> :
            <p>Cargando producto...</p>
        
    }
        </>
    );
}

export default ItemDetail;



    // <div key={item.id} classNameName="ItemDetail-contain">
            //     <div classNameName="ItemDetail-img"><img src={item.img} alt="imágen del producto"></img></div>
            //     <div classNameName="ItemDetail-text">
            //         <h3>{item.title}</h3>
            //         <p>Precio: ${item.price}</p>
            //         <p>Stock: {item.stock}</p>
            //         <p>{item.description}</p>
            //         <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
            //     </div>
            // </div>