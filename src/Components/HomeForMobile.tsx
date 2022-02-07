import { Button, Grid } from "@mui/material"
import { CartItemType } from "../Store/Types/CartItemType"
import ImageCarousal from "./ImageCarousal"
import Typography from '@mui/material/Typography'
import { makeStyles } from "@material-ui/core"

type Props = {
    data: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void
    handleSizeSelect: (sizeSelected: string) => void
}
const useStyles = makeStyles((theme) => ({
    sideContent: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    longDesc: {
        textAlign: "center",
        marginBottom: "5%"
    },
    favIcon: {
        color: "#3f51b5",
        position: "sticky",
        top: "32px",
        left: "263px"
    },
    addToCartButton: {
        width: "80%",
        backgroundColor: "#3f51b5 !important",
        color: "white !important",
        marginTop: "2% !important",
        marginBottom: "2% !important",
        marginLeft: "10% !important"
    },
    customText: {
        marginTop: "2%",
        marginBottom: "2%"
    }
}))

const HomeForMobile: React.FC<Props> = ({ data, handleAddToCart, handleSizeSelect }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item container justifyContent='center'>
                <Grid item xs={10} sm={8}><ImageCarousal /></Grid>
                <Grid item xs={10} sm={8}>
                    <Typography>
                        {data.title}
                    </Typography>
                    <Typography>
                        {data.shortDescription}
                    </Typography>
                    <Typography>
                        <b>
                            ${data.price}
                        </b>
                    </Typography>
                    <Typography style={{ padding: "10px", paddingLeft: "0", fontWeight: "600" }}>
                        COLOR: {data.color}
                    </Typography>
                    <Typography style={{ fontWeight: "600" }}>
                        SIZE: {data.selectedSize}
                    </Typography>
                    <Grid container spacing={1}>
                        {data.sizes.map((size: string, index: number) => {
                            return (<Grid item key={index} md={2} sm={3} xs={4}>
                                {!data.sizesUnavailable.includes(size)
                                    ? <Button variant="outlined"
                                        style={size === data.selectedSize ? { backgroundColor: '#3f51b5', color: 'white' } : { backgroundColor: 'white', color: '#3f51b5' }}
                                        onClick={() => handleSizeSelect(size)}>{size}</Button>
                                    : <Button disabled variant="outlined">{size}</Button>}
                            </Grid>)
                        })}
                    </Grid>
                    <Button className={classes.addToCartButton} disabled={data.selectedSize === '' ? true : false} onClick={() => handleAddToCart(data)}>Add to Cart</Button>
                    <p className={classes.customText}>{data.offer}</p>
                    <p className={classes.customText}>{data.chatNow}</p>
                    <hr />
                    <p className={classes.longDesc}>{data.longDescription}</p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomeForMobile