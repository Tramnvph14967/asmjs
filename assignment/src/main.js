import Navigo from "navigo";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import News from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import signin from "./pages/signin";
import Signup from "./pages/signup";
// import dashboard from "./pages/admin/dashboard";
import News_admin from "./pages/admin/news";

export const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
    
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/news": () => {
        render(News.print());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        render(DetailNewsPage.print(value.data.id));
    },
    "/signin": () => {
        render(signin.print());
    },
    "/signup": () => {
        render(Signup.print());
    },

    "/admin/news": () => {
        render(News_admin.print());
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();