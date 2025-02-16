import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
function MensClothProduct() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    const Navegar = (id) => {
        navigate(`/ProductDetails/${id}`);
      };
    const MenclothProducts = data.map((values) =>
        <span><div onClick={ () => Navegar(values.id) }><b>{values.id} {values.title}</b></div>
        <br/>
        <div className="container2">      
        <img className ="Mencloth"src={values.image} alt={values.title}/>
        <span className="description">{values.description}</span>
        </div>
        </span>
    )
    return (
        <>
            <div>
                {data.length > 0 ? (
                    <div className="jeweleryStyle">{MenclothProducts}</div>
                ) : <h3>Loading...</h3>}
            </div>
        </>

    );
} export default MensClothProduct;