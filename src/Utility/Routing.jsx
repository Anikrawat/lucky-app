import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import Shop from "../Component/Shop";
import Sale from "../Component/Sale";
import CustomerCare from "../Component/Customercare";
import Stores from "../Component/Stores";
import Middle from "../Component/Middle";
import Allproducts from "../Component/Allproducts";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sale" element={<Sale />} />
      <Route path="/care" element={<CustomerCare />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/" element={<Middle />} />
      <Route path="/all-products" element={<Allproducts />} />
    </Routes>
  );
}

export default Routing;
