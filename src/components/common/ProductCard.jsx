import { Link } from "react-router";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { MyGlobalContext } from "../pages/MainContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";




export default function ProductCard({ product }) {
  let { name, id, image, description, price, stock } = product



  const discountedPrice = (
    product.price -
    (product.price * product.discount_percentage) / 100
  ).toFixed(2);



  const handleError = () => {
    toast.error("Out of stock ❌");
  };

  const handleSuccess = () => {
    toast.success("Added successfully ✅");
  };

  const { cart, setCart } = useContext(MyGlobalContext)


  let addToCart = () => {
    if (product.stock == 0) {
      return handleError();
    }

    setCart(prev => {
      const existingItem = prev.find(item => item.id === id);

      // if product exist already
      if (existingItem) {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 🔵 if product not exist
      return [
        ...prev,
        { name, id, image, description, price, stock, quantity: 1 }
      ];
    });

    handleSuccess();

  }

  let removeToCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Done!",
          text: "Removed successfully",
          icon: "success"
        });

        setCart(prev => prev.filter((obj) => obj.id !== id))

      }
    });

  }

  let addRemovecart = cart.find((obj) => obj.id == id)



  return (
    

      <div className="group relative w-full max-w-[18rem] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm duration-300 hover:-translate-y-1 hover:shadow-xl">
        {product.discount_percentage > 0 && (
          <div className="absolute top-2 right-2 z-10 rounded-full bg-red-600 px-2 py-1 text-xs text-white">
            {product.discount_percentage}% OFF
          </div>
        )}
        <button
          className="absolute top-2 left-2 z-10 rounded-full bg-white p-2 shadow hover:text-red-500"
        >
          <FaHeart />
        </button>
        <Link to={`/productdetails/${product.slug}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-80 w-full object-cover"
          />
        </Link>
        <div className="absolute bottom-32 left-0 right-0 flex justify-center opacity-100 duration-300 sm:opacity-0 sm:group-hover:opacity-100">
          {
            addRemovecart ?
              <button
                onClick={removeToCart}
                disabled={!product.stock}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-white disabled:opacity-50"
              >
                <FaShoppingCart />
                Remove to Cart
              </button>
              :
              <button
                onClick={addToCart}
                disabled={!product.stock}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-white disabled:opacity-50"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
          }


        </div>


        <div className="space-y-1 p-4">
          <p className="text-xs text-slate-400">{product.name}</p>
          <p className="text-xs text-slate-400">Brand: {product.brand_name}</p>

          <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
            {product.title}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm my-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(product.rating) ? "" : "text-gray-300"}
              />
            ))}
            <span className="text-gray-500 text-xs ml-1">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <p className="text-lg font-bold text-green-600">
              ${discountedPrice}
            </p>
            {product.discount_percentage > 0 && (
              <p className="text-sm line-through text-gray-400">
                ${product.price}
              </p>
            )}
          </div>

          {/* Stock */}
          {!product.stock && (
            <p className="text-red-500 text-xs mt-1">Out of stock</p>
          )}
        </div>
      </div>
   
  );
}
