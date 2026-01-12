import RenderingCase from "@/routes/RenderingCase";
import CheckoutPageDesktop from "../../desktop/CheckoutPageDesktop/CheckoutPageDesktop";

const CheckoutPage = () => {
    return (
        <RenderingCase
            desktopComponent={<CheckoutPageDesktop />}
            tabletComponent={<CheckoutPageDesktop />}
            mobileComponent={<CheckoutPageDesktop />}
        />
    );
};

export default CheckoutPage;
