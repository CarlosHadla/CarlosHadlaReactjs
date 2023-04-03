

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: -2,
    padding: '0 3px',
  },
}));

const CartWidget = () =>{
  return (
    <div>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={3} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </div>
  );
}

export default CartWidget;
