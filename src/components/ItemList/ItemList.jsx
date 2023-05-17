import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

export const ItemList = ({ items }) => {
  return (
    <div className={styles.listaItems}>
      {items.map((e) => {
        const { title, price, id, img } = e;
        return (
          <Card sx={{ maxWidth: 340, heigth: 700 }} key={id}>
            <CardMedia
              component="img"
              alt="title"
              height="500"
              width="300"
              image={img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.primary">
                ${price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/itemDetail/${id}`}>
                <Button variant="contained" color="secondary" size="large">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
