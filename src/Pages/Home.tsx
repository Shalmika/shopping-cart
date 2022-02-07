import { Badge, Drawer, Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cart from "../Components/Cart/Cart"
import { getInitialData, updateSelectedSize } from "../Store/Actions/actions"
import { CartItemType } from "../Store/Types/CartItemType"
import { FavIconButton, StyledButton, Wrapper } from "./Home.styles"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Item from "../Components/Item"
import BasicCard from "../Components/BasicCard"
import HomeForMobile from "../Components/HomeForMobile"
import { Favorite } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  sideContent: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  imageContentScroll: {
    overflowY: "scroll",
    height: "700px"
  },
  favIcon: {
    color: "red",
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  longDesc: {
    textAlign: "center",
    marginBottom: "1%"
  }
}))
const Home = () => {
  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true })
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state)
  const data = state.app
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch])
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0)
  const handleSizeSelect = (selectedSize: string) => {
    dispatch(updateSelectedSize(selectedSize))
  }
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1, selectedSize: clickedItem.selectedSize } : item
        ))
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        }
        else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    ))
  }
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        <Grid className={isMobile ? classes.sideContent : ''} item lg={4} md={4} sm={4} xl={4}>
          {data.fullDescription}
        </Grid>
        {!isMobile && <Grid item lg={4} md={4} xl={4} className={classes.imageContentScroll}>
          <FavIconButton>
            <Favorite className={classes.favIcon} />            
          </FavIconButton>
          <Item item={data} />
          <p className={classes.longDesc}>{data.longDescription}</p>
          <br />
        </Grid>}
        {!isMobile && <Grid item lg={4} md={4} sm={4} xl={4}>
          <BasicCard item={data} handleSizeSelect={handleSizeSelect} handleAddToCart={handleAddToCart}></BasicCard>
        </Grid>}
        {isMobile && <HomeForMobile data={data} handleSizeSelect={handleSizeSelect} handleAddToCart={handleAddToCart} />}
      </Grid>
    </Wrapper>
  )
}

export default Home


