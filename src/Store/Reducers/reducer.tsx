import image1 from '../../Assets/Images/shopping-cart-1.png'
import image2 from '../../Assets/Images/shopping-cart-2.png'
import image3 from '../../Assets/Images/shopping-cart-3.png'
import image4 from '../../Assets/Images/shopping-cart-4.png'
import { CartItemType } from '../Types/CartItemType'

const initialState: CartItemType = {
    id: 1,
    title: 'JONATHAN SIMKHAI',
    shortDescription: 'Lurex Linen Viscose Jacket in Conchiglia',
    longDescription: 'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.',
    fullDescription: 'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. It has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a satorial feel.',
    price: 225,
    color: 'CONCHIGLIA',
    sizes: ["XS", "S", "M", "L", "XXL"],
    sizesUnavailable: ["M"],
    selectedSize: '',
    offer: 'Get 4 interest free payments of ...',
    images: [image1, image2, image3, image4],
    amount: 0,
    chatNow: 'Speak to a Personal Stylist CHAT NOW'
}

export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_INITIAL_DATA":
            return state
        case "UPDATE_SELECTED_SIZE":
            return {
                ...state,
                selectedSize: action.payload
            }
        default:
            return state
    }
}