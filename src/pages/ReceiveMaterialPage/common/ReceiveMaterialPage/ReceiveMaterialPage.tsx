import RenderingCase from "@/routes/RenderingCase";
import ReceiveMaterialPageDesktop from "../../desktop/ReceiveMaterialPageDesktop/ReceiveMaterialPageDesktop";

const ReceiveMaterialPage = () => {
    return (
        <RenderingCase
            desktopComponent={<ReceiveMaterialPageDesktop />}
            tabletComponent={<ReceiveMaterialPageDesktop />}
            mobileComponent={<ReceiveMaterialPageDesktop />}
        />
    );
};

export default ReceiveMaterialPage;
