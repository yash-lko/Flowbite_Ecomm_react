import { useContext, useEffect, useState } from "react"
import { MyGlobalContext } from "../pages/MainContext"
import { toast } from "react-toastify"
import Swal from "sweetalert2"

export default function Cart() {
  let hiddenImage = "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
  const { cart, setCart } = useContext(MyGlobalContext)
  const [totalPrice, settotalPrice] = useState(0)
  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity
    }, 0)

    settotalPrice(total)
  }, [cart])
  return (
    <section className="rounded-3xl border border-slate-200 bg-white py-8 shadow-sm md:py-10">
      <div className="mx-auto w-full max-w-(--max-width-container) px-4 2xl:px-0">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
            {
              cart.map((Product, i) => {
                return (
                  <div key={Product.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm md:p-6">


                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="h-20 w-20 dark:hidden" alt="Gray Dress" src="https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/thumbnail.png" />
                        <img className="hidden h-20 w-20 dark:block" alt="Gray Dress" src={Product.image} />
                      </a>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a href="#" className="text-base font-semibold text-slate-900 hover:underline">
                          {Product.name}
                        </a>
                        <p className="line-clamp-2 text-sm text-slate-600">
                          {Product.description}
                        </p>
                        <p className="text-base font-semibold text-slate-900">${Product.price}</p>
                        <div className="flex items-center gap-4">
                          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            Add to Favorites
                          </button>
                          <button

                            onClick={() => {
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

                                  setCart(prev => prev.filter((_, idx) => idx !== i))

                                }
                              });

                            }}

                            className="text-sm font-medium text-red-600 hover:underline dark:text-red-500 flex items-center gap-1">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:order-3 md:justify-end gap-4">
                        <div className="flex items-center">
                          <button
                            onClick={() => {
                              setCart(prev =>
                                prev.map(item =>
                                  item.id === Product.id
                                    ? {
                                      ...item,
                                      quantity: item.quantity > 1
                                        ? item.quantity - 1
                                        : 1
                                    }
                                    : item
                                )
                              )
                            }}
                            className="h-7 w-7 cursor-pointer rounded-md border border-slate-300 bg-white text-sm hover:bg-slate-100">-</button>
                          <input className="w-10 border-0 bg-transparent text-center font-semibold text-slate-800 focus:ring-0" type="text" value={`${Product.quantity}`} readOnly />

                          <button onClick={() => {
                            if (Product.stock == Product.quantity) {
                              return toast.error("Stock limit reached ❌");
                            } else {
                              setCart(prev =>
                                prev.map(item =>
                                  item.id === Product.id
                                    ? {
                                      ...item,
                                      quantity: item.quantity >= 1
                                        ? item.quantity + 1
                                        : 1
                                    }
                                    : item
                                )
                              )
                            }


                          }}


                            className="h-7 w-7 cursor-pointer rounded-md border border-slate-300 bg-white text-sm hover:bg-slate-100">+</button>
                        </div>
                        <p className="text-base font-bold text-slate-900">${Product.quantity * Product.price}</p>
                      </div>

                    </div>
                  </div>
                )
              }

              )
            }


          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <p className="text-xl font-bold text-slate-900">Order summary</p>
              <div className="space-y-2">
                <dl className="flex justify-between"><dt className="text-slate-600">Original price</dt><dd className="text-slate-900">$7,592.00</dd></dl>
                <dl className="flex justify-between"><dt className="text-slate-600">Savings</dt><dd className="text-emerald-600">-$299.00</dd></dl>
                <dl className="flex justify-between"><dt className="text-slate-600">Store Pickup</dt><dd className="text-slate-900">$99</dd></dl>
                <dl className="flex justify-between"><dt className="text-slate-600">Tax</dt><dd className="text-slate-900">${Math.floor(totalPrice / 18)}</dd></dl>
                <dl className="flex justify-between border-t border-slate-200 pt-2"><dt className="font-bold text-slate-900">Total</dt><dd className="font-bold text-slate-900">${totalPrice + Math.floor(totalPrice / 18)}</dd></dl>
              </div>
              <a href="#" className="flex w-full items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800">
                Proceed to Checkout
              </a>
            </div>
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-slate-900"
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    id="voucher"
                    type="text"
                    required
                    placeholder=""
                    className="block w-full rounded-xl border border-slate-300 bg-white p-2.5 text-sm text-slate-900 outline-none ring-blue-500 focus:border-blue-400 focus:ring-2"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
