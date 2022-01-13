import Navigo from "navigo";
import HomePage from "./pages/home";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";


const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
    // document.getElementById("detailNews").innerHTML = detailNews.print();
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        render(DetailNewsPage.print(value.data.id));
    },
});
router.notFound(() => print("Not Found Page"));
router.resolve();