import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartFill, DashCircle, PlusCircle } from "react-bootstrap-icons";
import { useAtom } from "jotai";
import { darkModeAtom } from "../atom/atom";

type StoreItemProps = {
  id?: number;
  name: string;
  des?: string;
  url: string;
  price: number;
};

export const StoreItem = ({ name, url, price }: StoreItemProps) => {
  const [darkMode] = useAtom(darkModeAtom);
  const quantity = 0;
  return (
    <Card
      className="h-100"
      bg={darkMode ? "dark" : "light"}
      text={darkMode ? "light" : "dark"}
    >
      <Card.Img variant="top" src={url} className="card-img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">
              <CartFill className="me-3 mb-1" /> Add to Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column">
              <div className="d-flex align-items-center justify-content-center cart-counter">
                <DashCircle className="text-primary fs-3" />
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <PlusCircle className="text-primary fs-3" />
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
