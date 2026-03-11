import {Container} from "react-bootstrap";
import {Outlet} from "react-router";
import MainMenu from "./components/MainMenu";

const App = () => (
    <Container className="p-3">
        <MainMenu />
        <Outlet/>
    </Container>
);

export default App
