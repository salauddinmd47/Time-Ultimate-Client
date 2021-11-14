import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navigation from "../Shared/Navigation/Navigation";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Rating, Button } from "@mui/material";
import Footer from "../Shared/Footer/Footer";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const BuyNow = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch(`https://lit-ravine-71907.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div>
      <Navigation></Navigation>
      <Card className="my-3"  sx={{ maxWidth:400, mx:'auto' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              W
            </Avatar>
          }
          title={product?.name}
        />
        <CardMedia
          component="img"
          height="250"
          image={product.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2"  >
            {product?.description}
          </Typography>
          <div className="d-flex justify-content-between">
            <h2 className="text-info">${product?.price}</h2>
            <Rating name="read-only" value={product?.rating} readOnly />
          </div>
          <Button onClick={handleOpen} variant="contained">
            Buy Now
          </Button>
        </CardContent>
      </Card>
      <PurchaseModal
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      product={product}
      ></PurchaseModal>
      <Footer></Footer>
    </div>
  );
};

export default BuyNow;
