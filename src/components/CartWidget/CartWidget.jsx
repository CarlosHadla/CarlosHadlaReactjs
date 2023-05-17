import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const CartWidget = ({ StyledBadge }) => {
  return (
    <Link to="/cart">
      <div>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={5} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
};

export default CartWidget;
