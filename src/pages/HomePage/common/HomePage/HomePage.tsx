import RenderingCase from "@/routes/RenderingCase";
import HomeDesktop from "../../desktop/HomeDesktop/HomeDesktop";

const HomePage = () => {
    return (
        <RenderingCase
            desktopComponent={<HomeDesktop />}
            tabletComponent={<HomeDesktop />}
            mobileComponent={<HomeDesktop />}
        />
    );
};

export default HomePage;
