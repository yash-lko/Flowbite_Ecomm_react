import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdLocalOffer, MdSecurity } from "react-icons/md";
import { useParams } from "react-router";


export default function ProductDetails() {
  //////////useparams///
  const { product_slug } = useParams()

  // //////usestates 

  const [product, setproduct] = useState({})
  

  const [MainImage, setMainImage] = useState(product.image)


  const getProductdetails = async () => {

    let productData = await axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?slug=${product_slug}`)
    // setproduct([catData.data.product]);

    setproduct(productData.data.product);


  }
  //////////// useeffects

  useEffect(() => {
    getProductdetails()
  }, [product_slug])


  return (
    <div className="max-w-[1320px] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT : IMAGES */}
        <div className="">

          {/* Main Image */}
          <div className="border rounded-lg p-6 flex items-center justify-center">
            <img
                src={MainImage || product.image}
              alt={product.name}
              className="max-h-[420px] object-contain"
            />
          </div>



          {/* Thumbnails */}
          <div className="flex mt-2 gap-3">
            {product.multiple_images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-contain border rounded cursor-pointer
                `}
              />
            ))}
          </div>
        </div>

        {/* RIGHT : DETAILS */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-blue-600 cursor-pointer">
              {product.rating || 4.3} ratings
            </span>
          </div>

          <hr className="my-4" />

          {/* Price Section */}
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Special Price</p>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>

              <span className="text-lg line-through text-gray-400">
                ${product.price * 1.5}
              </span>

              <span className="text-green-600 font-semibold">
                {product.discount_percentage}% off
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Inclusive of all taxes
            </p>
          </div>

          <hr className="my-4" />

          {/* Offers */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Available Offers</h3>

            <p className="flex items-center gap-2 text-sm">
              <MdLocalOffer className="text-green-600" />
              Bank Offer: 10% Instant Discount
            </p>

            <p className="flex items-center gap-2 text-sm">
              <MdLocalOffer className="text-green-600" />
              No Cost EMI available
            </p>
          </div>

          <hr className="my-4" />

          {/* Delivery */}
          <p className="text-sm">
            Delivery by <span className="font-semibold">Tomorrow</span> | Free
          </p>

          <p className="text-sm text-green-600 mt-1">
            In Stock
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500
                               text-black font-semibold py-3 rounded-lg">
              Add to Cart
            </button>

            <button className="flex-1 bg-orange-500 hover:bg-orange-600
                               text-white font-semibold py-3 rounded-lg">
              Buy Now
            </button>
          </div>

          {/* Security */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
            <MdSecurity />
            Secure Transaction
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-3">Product Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>


  );
}


