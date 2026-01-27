
import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import axios from "axios";
import TripleLoader from "./TripleLoader";
// import { products } from "./Products";




export default function Home() {
  ////////////useStates/////////////

  const [loading, setloading] = useState(true)


  ////////data
  const [products, setproducts] = useState([])


  const getProductApi = async () => {
    setloading(true)
    let productdata = await axios.get(
      `https://wscubetech.co/ecommerce-api/products.php`,
      {
        params: {
          limit: 200,
        }
      }
    );

    setproducts(productdata.data.data)
    setloading(false)
  }


  //////////////useeffects ///////////
  useEffect(() => {
    getProductApi()


  }, [])

  let productOnlyFour = [products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)],]

  // console.log(products);

  // console.log(products);
  return (
    <>
      <div>
        <div className=" text-center p-10">
          <h1 className="text-4xl font-bold mb-3">Celebration wear for Men</h1>
          <p>Welcome to Bagtesh Fashion Buy Indian Men's Ethnic suits, Tuxedos, Sherwanis, Nehru jacket, Jodhpurs pants, Blazers, Shirts and much more.</p>
        </div>
        <section className="max-w-[var(--max-width-container)] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 justify-items-center">



          {

            loading ?

              (
                <div className="fixed inset-0">
                  <TripleLoader />
                </div>
              )

              :

              (
                productOnlyFour.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              )}

        </section>
      </div>

      <div>
        <div className=" text-center p-10">
          <h1 className="text-4xl font-bold mb-3">Celebration wear for Women</h1>
          <p>Beautiful collection of Lehenga cholis, Sarees, Salwar suits for engagement, wedding and other ethnic occasions.</p>
        </div>
        <section className="max-w-[var(--max-width-container)] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15 justify-items-center">



          {

            loading ?

              (
                <div className="fixed inset-0">
                  <TripleLoader />
                </div>
              )

              :

              (
                productOnlyFour.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              )}

        </section>
      </div>
    </>
  );
}
