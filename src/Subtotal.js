import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./Reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  const totalPrice = getCartTotal(cart);

  // Convert the total price to a number
  const formattedTotalPrice = parseFloat(totalPrice).toFixed(2);

  // Convert the formatted total price to a number
  const formattedTotalPriceNumber = parseFloat(formattedTotalPrice);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
          
        )}
        decimalScale={3}
        value={formattedTotalPriceNumber}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        editable 
      />
      
    </div>
  );
}

export default Subtotal;
