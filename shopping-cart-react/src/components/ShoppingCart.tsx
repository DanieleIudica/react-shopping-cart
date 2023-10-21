import { Button, Offcanvas, Stack } from "react-bootstrap";
import { cartItemsAtom, darkModeAtom, isCartOpenAtom } from "../atom/atom";
import { useAtom } from "jotai";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

export const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const [darkMode] = useAtom(darkModeAtom);
  const [cartItems] = useAtom(cartItemsAtom);

  const handleClose = () => setIsCartOpen(!isCartOpen);

  return (
    <Offcanvas
      show={isCartOpen}
      placement="end"
      onHide={handleClose}
      data-bs-theme={darkMode ? "dark" : "light "}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 && <p>Your Cart is Empty.</p>}
        {cartItems.length > 0 && (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-3">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            <Button variant="outline-primary">
              <a
                className="text-primary external-link"
                href="https://danieleiudica.github.io/MyPortfolio/portfolio/"
              >
                Checkout{" "}
              </a>
            </Button>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
