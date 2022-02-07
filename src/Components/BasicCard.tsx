import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { CartItemType } from '../Store/Types/CartItemType'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
    handleSizeSelect: (sizeSelected: string) => void
}

const BasicCard: React.FC<Props> = ({ item, handleAddToCart, handleSizeSelect }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.shortDescription}
                </Typography>
                <Typography sx={{ mb: 1.5 }} style={{ fontWeight: 600 }} color="text.secondary">
                    ${item.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} style={{ fontWeight: 600 }} color="text.secondary">
                    COLOR: {item.color}
                </Typography>
                {/* <img src={colorImage1} alt="colorImage1"></img>
                <img src={colorImage2} alt="colorImage2"></img> */}
                <Typography sx={{ mb: 1.5 }} style={{ fontWeight: 600 }} color="text.secondary">
                    SIZE: {item.selectedSize}
                </Typography>
                <Grid container spacing={1}>
                    {item.sizes.map((size, index) => {
                        return (<Grid item md={4} lg={3} key={index}>
                            {!item.sizesUnavailable.includes(size) ? <Button variant="outlined" style={size === item.selectedSize ? { backgroundColor: "#3f51b5", color: "white" } : { backgroundColor: "white", color: "#3f51b5" }} onClick={() => handleSizeSelect(size)}>{size}</Button> : <Button disabled variant="outlined">{size}</Button>}
                        </Grid>)
                    })}
                </Grid>
            </CardContent>
            <CardActions style={{justifyContent: "center"}}>
                <Button style={{width: "80%", backgroundColor: "#3f51b5", color: "white"}} onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </CardActions>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.offer}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.chatNow}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default BasicCard
