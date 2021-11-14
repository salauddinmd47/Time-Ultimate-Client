import { Avatar, Rating } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Col } from "react-bootstrap";

const Review = ({ review }) => { 
  const { name, img, comment, rating } = review;
  return (
    <Col >
      <Card  className="bg-dark" sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={img}
          alt="Customer photo"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto",   color: 'white' }}>
            <Typography component="div" variant="h4">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ color: 'white' }}
            >
              {comment}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </CardContent>
        </Box>
      </Card>
    </Col>
  );
};

export default Review;
