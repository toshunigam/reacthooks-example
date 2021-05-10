import SignUp from "./components/pages/signup";
import UsersTable from "./components/pages/users";
import Product from "./components/pages/product";
import Services from "./components/pages/services";
import Software from "./components/pages/software";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import ProductForm from "./components/pages/ProductForm";
import ContactForm from "./forms/ContactForm";

const routes = {
    "/": () => <UsersTable />,
    "/signup": () => <SignUp />,
    "/product":()=> <Product />,
    "/services":()=><Services />,
    "/software":()=><Software />,
    "/about":()=><About />,
    "/contact":()=><Contact />,
    "/contact/:id":()=><Contact />,
    "/addproduct":()=><ProductForm />,
    "/addcontact":()=><ContactForm />,
    "/addcontact/:id":()=><ContactForm />
}

export default routes;