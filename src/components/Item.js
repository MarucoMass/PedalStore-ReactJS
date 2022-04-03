export default function Item({ item }){
    return (
       <>
            <div className="Item-Box">
            <img src={item.img} className="Item-img" alt="imágen del producto" />
                <div className="Item-BoxText">
                    <p className="Item-BoxText-title">{item.title}</p>
                    <p className="Item-BoxText-price">$ {item.price}</p>
                </div>
                <div className="Item-Dark"></div>
            </div>
       </>
    );
};