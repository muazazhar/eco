import { CartProvider } from "@/context/cartContext";

const GlobalProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default GlobalProvider;
