import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartFill, DashCircle, PlusCircle } from "react-bootstrap-icons";
import { useAtom } from "jotai";
import { cartItemsAtom, darkModeAtom } from "../atom/atom";

type StoreItemProps = {
  id: number;
  name: string;
  des?: string;
  url: string;
  price: number;
};

export const StoreItem = ({ id, name, url, price }: StoreItemProps) => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [darkMode] = useAtom(darkModeAtom);
  const quantity = getItemQuantity(id);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <Card
      className="h-100"
      bg={darkMode ? "dark" : "light"}
      text={darkMode ? "light" : "dark"}
    >
      <Card.Img variant="top" src={url} id="img-bg" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              <CartFill className="me-3 mb-1" /> Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div className="d-flex align-items-center justify-content-center cart-counter">
                <DashCircle
                  className="text-primary fs-3"
                  onClick={() => decreaseCartQuantity(id)}
                />
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <PlusCircle
                  className="text-primary fs-3"
                  onClick={() => increaseCartQuantity(id)}
                />
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
