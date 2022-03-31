import ItemCount from './ItemCount';
const ItemListContainer = (props) => {
    return(
        <>
            <p>{props.greeting}</p>
            <ItemCount />
        </>
    );
}

export default ItemListContainer;