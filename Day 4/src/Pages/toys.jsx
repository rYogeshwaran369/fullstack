import React from "react";
import Heading from "../Components/Products/Heading";
import Product from "../Components/Products/Product";
import newArrOne from "../assets/images/products/newArrival/newArrOne.webp";
import newArrTwo from "../assets/images/products/newArrival/newArrTwo.webp";
import newArrThree from "../assets/images/products/newArrival/newArrThree.webp";
import newArrFour from "../assets/images/products/newArrival/newArrFour.webp";
import Navbars from "../Components/Navbar";

const Toys = (props) => {
  const products = [
    {
      _id: "100001",
      img: newArrOne,
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100002",
      img: newArrTwo,
      productName: "Smart Watch",
      price: "250.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100003",
      img: newArrThree,
      productName: "Cloth Basket",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100004",
      img: newArrFour,
      productName: "Funny toys for babies",
      price: "60.00",
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100001",
      img: newArrOne,
      productName: "Round Table Clock",
      price: "44.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100002",
      img: newArrTwo,
      productName: "Smart Watch",
      price: "250.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100003",
      img: newArrThree,
      productName: "Cloth Basket",
      price: "80.00",
      color: "Mixed",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100004",
      img: newArrFour,
      productName: "Funny toys for babies",
      price: "60.00",
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
  ];

  return (
    <div className="w-full pb-16">
        <Navbars/>
        <div class="flex justify-center items-center pb-10 pt-10 bg-gray-200">
  <h1 class="text-4xl font-bold text-center text-white-700">TOYS</h1>
</div>
      <Heading heading={props.name} />
      <div className="flex flex-wrap justify-between">
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
