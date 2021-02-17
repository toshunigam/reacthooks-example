import SignUp from "./components/pages/signup";
import UsersTable from "./components/pages/users";

const routes = {
    "/": () => <UsersTable />,
    "/signup": () => <SignUp />
}

export default routes;