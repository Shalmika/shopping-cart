import { CartItemType } from "../Store/Types/CartItemType"

type Props = {
    item: CartItemType
}

const Item: React.FC<Props> = ({ item }) => {
    return (
        <>
            {item.images.map((image, index) => {
                return <img key={index} src={image} alt={item.title} style={{ maxWidth: "100%", maxHeight: "100%"}} />
            })}
        </>
    )
}
export default Item