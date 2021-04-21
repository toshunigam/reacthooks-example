import SignUp from "./components/pages/signup";
import UsersTable from "./components/pages/users";
import Product from "./components/pages/product";
import Services from "./components/pages/services";

const routes = {
    "/": () => <UsersTable />,
    "/signup": () => <SignUp />,
    "/product":()=> <Product />,
    "/services":()=><Services />
}

export default routes;