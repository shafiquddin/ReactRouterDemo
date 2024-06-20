import { Link } from "react-router-dom";

const PRODUCTS = [
    {id:'p1',title:'Product 1'},
    {id:'p2',title:'Product 2'},
    {id:'p3',title:'Product 3'},
]

const Products = () => {
    return <>
    <h2>The Product Page</h2>
    <ul>
        {PRODUCTS.map(prod => {
            return <li key={prod.id}>
                <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
        })}
    </ul>
    </>
}

export default Products;