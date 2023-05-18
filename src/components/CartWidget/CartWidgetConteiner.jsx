import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: -2,
    padding: "0 3px",
  },
}));



const CartWidgetConteiner = () => {

  const {cantidadTotal} = useContext(CartContext)
  const total=cantidadTotal()
  return (
    <div>
      <CartWidget total={total}  StyledBadge={StyledBadge} />
    </div>
  );
};

export default CartWidgetConteiner;
