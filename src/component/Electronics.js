import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
function ElectronicProduct() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        fetch("https://fakestoreapi.com/products/category/electronics")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }, [])

    const Navegar = (id) => {
        navigate(`/ProductDetails/${id}`);
      };
    const ElectronicProduct= data.map((values) =>
        <span><div onClick={ () => Navegar(values.id) }><b>{values.id} {values.title}</b></div>
        <br/>
        <div className="container2">      
        <img className ="electronic"src={values.image} alt={values.title}/>
        <span className="description">{values.description}</span>
        </div>
        </span>
    )
    return (
        <>
            <div>
                {data.length > 0 ? (
                    <div className="electronicStyle">{ElectronicProduct}</div>
                ) : <h3>Loading...</h3>}
            </div>
        </>

    );
} export default ElectronicProduct;