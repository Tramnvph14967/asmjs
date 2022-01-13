import Navigo from "navigo";
import Header from "./component_admin/header";
import Footer from "./component_admin/footer";
import dashboard from "./pages/admin/dashboard";


import { router } from "./main";

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
    
};

router.on({
    "/admin/dashboard": () => {
        render(dashboard.print());
    },
   
});
router.notFound(() => print("Not Found Page"));
router.resolve();