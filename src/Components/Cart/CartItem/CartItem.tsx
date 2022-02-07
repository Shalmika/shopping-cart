import { Wrapper } from './CartItem.styles'
import Button from '@material-ui/core/Button'
import { CartItemType } from '../../../Store/Types/CartItemType'

type Props = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}
const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <img src={item.images[0]} alt={item.title} />
                <div>Color: {item.color}</div>
                <div>Size: {item.selectedSize}</div>
                <div className="information">
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button size="small" style={{ backgroundColor: "#3f51b5", color: "white" }} disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button size="small" style={{ backgroundColor: "#3f51b5", color: "white" }} disableElevation variant="contained" onClick={() => addToCart(item)}>
                        +
                    </Button>
                </div>
            </div>

        </Wrapper>

    )
}

export default CartItem