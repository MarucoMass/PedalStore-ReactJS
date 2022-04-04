import ItemCount from './ItemCount';
export default function Item({ item }){

    function onAddItem(ItemCount){
        alert(ItemCount);
    }

    return (
       <>
       <div className='Item-contain'>
            <div className="Item-Box">
            <img src={item.img} className="Item-img" alt="imágen del producto" />
                <div className="Item-BoxText">
                    <p className="Item-BoxText-title">{item.title}</p>
                    <p className="Item-BoxText-price">Precio: ${item.price}</p>
                </div>
                <div className="Item-Dark"></div>
            </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAddItem}/>
                <p className="Item-stock">Stock: {item.stock}</p>
        </div>
       </>
    );
};