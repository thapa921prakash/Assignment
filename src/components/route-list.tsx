//router
import { Route, Routes } from "react-router-dom";
//enum
import { RouteEnum } from "../enums/route-enum";
//components
import NoPageFound from "./no-page-found";
import ProductDetails from "./product-details";
import ProductList from "./product-list";

const RouteList = () => {
  return (
    <>
      <Routes>
        <Route
          path={`/${RouteEnum.product}/:id`}
          element={<ProductDetails />}
        />
        <Route path={RouteEnum.landing} element={<ProductList />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
};

export default RouteList;
