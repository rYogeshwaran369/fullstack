import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../Components/Products/Heading";
import Product from "../Components/Products/Product";
import Navbars from "../Components/Navbar";

const Toys = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the authentication token from localStorage or any other storage mechanism
        const authToken = localStorage.getItem("token");
        console.log(authToken) // Example: Retrieve token from localStorage
        // Set the request headers with the authentication token
        const headers = { Authorization: `Bearer ${authToken}` };

        // Make a GET request to the backend API endpoint with the authentication token
        const response = await axios.get("http://localhost:8181/api/v1/users/gift/all", { headers });
        
        // Check if the response contains the expected array of products
        console.log(response.data.data)
        if (Array.isArray(response.data.data)) {
          // Update state with the fetched products
          setProducts(response.data.data);
        } else {
          console.error("Error: Data received from API is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); 

  return (
    <div className="bg-clr-gray pb-16 m-29" >
      <Navbars />
      <div className="flex justify-center items-center " style={{backgroundColor:'white'}}>
        <h1 className="text-4xl font-bold text-center" style={{width:100}}>TOYS</h1>
      </div>
      <div className="flex flex-wrap justify-between ml-5 mr-5 " style={{backgroundColor:'white'}}>
        {products.map((product) => (
          <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toys;
