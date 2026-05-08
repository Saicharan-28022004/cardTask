import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Nav from "./components/Nav";


function App() {
 let products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4b6GQGeNgN1j8T78f44SqJzLy8T59ljBv7A&s"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 74999,
    rating: 4.7,
    image: "https://sell.gameloot.in/wp-content/uploads/sites/4/2024/02/Samsung-Galaxy-S24-Ultra-5G.jpg"
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 64999,
    rating: 4.6,
    image: "https://image01-in.oneplus.net/media/202407/02/46f7a671b96efc920304eaadabf30ad6.png"
  },
  {
    id: 4,
    name: "Google Pixel 8",
    price: 69999,
    rating: 4.5,
    image: "https://www.designinfo.in/wp-content/uploads/2024/11/Google-Pixel-8-5G-8GB-RAM-256GB-Hazel-Imported-1.webp"
  },
  {
    id: 5,
    name: "Xiaomi 14",
    price: 59999,
    rating: 4.4,
    image: "https://i03.appmifile.com/584_item_in/04/07/2024/69af272b112bd2935f0f00559d76c966.png"
  },
  {
    id: 6,
    name: "Realme GT 6",
    price: 39999,
    rating: 4.3,
    image: "https://www.maxbhi.com/images/thumbnails/1000/1000/detailed/10810/full_body_housing_for_realme_gt_6_white_maxbhi_com_51457.jpg"
  },
  {
    id: 7,
    name: "Vivo X100",
    price: 57999,
    rating: 4.4,
    image: "https://www.gizmochina.com/wp-content/uploads/2023/06/x100-blue-1-500x500.jpg?x10805"
  },
  {
    id: 8,
    name: "Oppo Find X7",
    price: 62999,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkE6e8VJ6b-3iWRCS61sUWKxlOVhBkA35qQ&s"
  },
  {
    id: 9,
    name: "Nothing Phone 2",
    price: 44999,
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgctxLleCtQWFjCjcKuHPRak6WZAwaWMon_w&s"
  },
  {
    id: 10,
    name: "Motorola Edge 50",
    price: 34999,
    rating: 4.2,
    image: "https://dakauf.eu/wp-content/uploads/2024/09/Motorola-Edge-50-512GB-Green.png"
  },
  {
    id: 11,
    name: "iPhone 14",
    price: 69999,
    rating: 4.7,
    image: "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/261934_0_y9apsx.png"
  },
  {
    id: 12,
    name: "Samsung Galaxy A55",
    price: 32999,
    rating: 4.2,
    image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a556ezkzins/gallery/in-galaxy-a55-5g-sm-a556-498926-sm-a556ezkzins-540255183?$Q90_1248_936_F_PNG$"
  },
  {
    id: 13,
    name: "Redmi Note 13 Pro",
    price: 28999,
    rating: 4.1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo1k7k8edwTCIehzp9Jpf-x9FgyzMthVJog&s"
  },
  {
    id: 14,
    name: "Poco X6 Pro",
    price: 26999,
    rating: 4.3,
    image: "https://nexteldigiplanetuae.com/wp-content/uploads/2024/02/POCO-X6-PRO-600x600.jpg"
  },
  {
    id: 15,
    name: "Asus ROG Phone 8",
    price: 89999,
    rating: 4.8,
    image: "https://dlcdnwebimgs.asus.com/gain/BBE287D3-6442-4759-8512-631941D117EF/w1000/h732"
  },
  {
    id: 16,
    name: "iQOO Neo 9 Pro",
    price: 37999,
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMluF7hy00i2OAl8Am5_Z2ozTIc_EaInlHA&s"
  },
  {
    id: 17,
    name: "Sony Xperia 1 V",
    price: 94999,
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRNv3y2fNj-ZSmcrh-d67nKBT9pnCPdkP5A&s"
  },
  {
    id: 18,
    name: "Huawei P60 Pro",
    price: 79999,
    rating: 4.4,
    image: "https://www.dxomark.com/wp-content/uploads/medias/post-147160/Huawei-P60-Pro_featured-image-packshot-review-Recovered.jpg"
  },
  {
    id: 19,
    name: "Nokia X30",
    price: 25999,
    rating: 4.0,
    image: "https://mxmemoxpress.com/wp-content/uploads/2023/09/NOKIA-X30-BLUE.png"
  },
  {
    id: 20,
    name: "Lava Blaze Curve",
    price: 18999,
    rating: 4.1,
    image: "https://m.media-amazon.com/images/I/61Y0Kr5tx8L.jpg"
  }
];

let result=products.map((item,id)=>{
  return(
    <div className="card" key={item.id}>
      <img className="image" src={item.image} alt=""/>
      <h1>{item.name}</h1>
      <h3>₹ {item.price}</h3>
      <h5>{item.rating}</h5>
      <button className="btn">Buy Now</button>
    </div>
  )
});

  return (
    <div className="container">
      {result}
    </div>
  );
}

export default App;
