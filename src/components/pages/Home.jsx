
import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import axios from "axios";
import TripleLoader from "./TripleLoader";

export default function Home() {
  const [loading, setloading] = useState(true)
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

  useEffect(() => {
    getProductApi()


  }, [])

  let productOnlyFour = [products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)], products[Math.floor(Math.random() * products.length)],]

  // console.log(products);

  // console.log(products);
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-6 py-12 text-white shadow-xl md:px-10">
        <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
          New season collection
        </p>
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
          Elevate your style with curated fashion for every celebration
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200 md:text-base">
          Discover premium ethnic and contemporary outfits designed for comfort, confidence, and standout looks.
        </p>
      </section>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900">Celebration wear for Men</h2>
          <p className="mx-auto max-w-3xl text-slate-600">
            Explore sherwanis, tuxedos, blazers, Nehru jackets, and curated festive outfits crafted for modern occasions.
          </p>
        </div>

        <section className="mx-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <div className="col-span-full w-full">
              <TripleLoader />
            </div>
          ) : (
            productOnlyFour.map((item) => <ProductCard key={item.id} product={item} />)
          )}
        </section>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900">Celebration wear for Women</h2>
          <p className="mx-auto max-w-3xl text-slate-600">
            Beautiful lehengas, sarees, and elegant festive sets made for weddings, parties, and special memories.
          </p>
        </div>

        <section className="mx-auto grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <div className="col-span-full w-full">
              <TripleLoader />
            </div>
          ) : (
            productOnlyFour.map((item) => <ProductCard key={item.id} product={item} />)
          )}
        </section>
      </div>
    </div>
  );
}
