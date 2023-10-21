import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { Trash } from "react-bootstrap-icons";
import { useAtom } from "jotai";
import { cartItemsAtom } from "../atom/atom";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const [_, setCartItems] = useAtom(cartItemsAtom);

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const item = storeItems.find((i) => i.id === id);

  if (!item) return;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.url} className="cart-item-img" />
      <div className="me-auto">
        <div>
          <span className="fs-3">{item.name}</span>{" "}
          {quantity >= 1 && <span className="text-muted">x {quantity}</span>}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger mt-2"
          className="trash-button"
          onClick={() => removeFromCart(id)}
        >
          <Trash className="text-center mx-auto fs-4 " />
        </Button>
      </div>
    </Stack>
  );
};
