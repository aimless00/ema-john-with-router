import {useState, useEffect} from "react"


const useProducts = () => {
    const [products, setproducts] = useState([]);
    useEffect( ()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } ,[]);
    // return necessary things
    return [products];
    
}

export default useProducts;