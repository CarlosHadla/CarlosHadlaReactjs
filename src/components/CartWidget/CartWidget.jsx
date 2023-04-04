
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const CartWidget = ({StyledBadge}) =>{
    return (
      <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={5} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      </div>
    );
  }
  
  export default CartWidget;