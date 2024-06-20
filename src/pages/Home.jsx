import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('products')
    }
    return <>
    <h1>My Home page</h1>
    <p>
        <button onClick={navigateHandler}>Products</button>
    </p>
    </>
}

export default Home;