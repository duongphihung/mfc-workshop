import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import LoginPage from "@/pages/LoginPage/LoginPage";
import urlKeys from "@/utils/constants/url_keys";
import HomePage from "@/pages/HomePage/common/HomePage/HomePage";
import CheckinPage from "@/pages/CheckinPage/common/CheckinPage/CheckinPage";
import CheckoutPage from "@/pages/CheckoutPage/common/CheckoutPage/CheckoutPage";
import ReceiveMaterialPage from "@/pages/ReceiveMaterialPage/common/ReceiveMaterialPage/ReceiveMaterialPage";

export default function DomRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<PrivateRouter />}>
        <Route path={urlKeys.HOME_URL_KEY} element={<HomePage />}></Route>
        <Route path={urlKeys.CHECK_IN_URL_KEY} element={<CheckinPage />}></Route>
        <Route path={urlKeys.CHECK_OUT_URL_KEY} element={<CheckoutPage />}></Route>
        <Route path={urlKeys.RECEIVE_MATERIAL_URL_KEY} element={<ReceiveMaterialPage />}></Route>
      </Route>
    </Routes>
  )
}