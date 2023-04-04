


import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

import CartWidget from './CartWidget';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -7,
    top: -2,
    padding: '0 3px',
  },
}));

const CartWidgetConteiner = () =>{
  return (
    <div>
    <CartWidget
    StyledBadge={StyledBadge}/>
    </div>
  );
}

export default CartWidgetConteiner;
