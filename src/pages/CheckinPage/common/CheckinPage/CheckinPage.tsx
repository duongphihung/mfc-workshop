import RenderingCase from "@/routes/RenderingCase";
import CheckinPageDesktop from "../../desktop/CheckinPageDesktop/CheckinPageDesktop";

const CheckinPage = () => {
    return (
        <RenderingCase
            desktopComponent={<CheckinPageDesktop />}
            tabletComponent={<CheckinPageDesktop />}
            mobileComponent={<CheckinPageDesktop />}
        />
    );
};

export default CheckinPage;
