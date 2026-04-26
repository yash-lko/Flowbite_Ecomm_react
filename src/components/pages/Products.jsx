import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter, FaMinus, FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import ProductCard from "../common/ProductCard";
import TripleLoader from "./TripleLoader";
import EmptyState from "./EmptyState";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';


export default function Products() {



  ////////////////////////useStates 
  /////div open close
  const [allFil, setallFil] = useState(false)
  const [sortingDiv, setsortingDiv] = useState(false)
  const [filterDiv, setfilterDiv] = useState([false, false, false, false, false])
  /////// loading and pegination
  const [loading, setloading] = useState(true)
  const [currentPage, setcurrentPage] = useState(1)
  const [totalPage, settotalPage] = useState(0)
  /////data

  const [products, setproducts] = useState([])
  const [Category, setCategory] = useState([])
  const [brand, setbrand] = useState([])

  //////filter
  const [categoryFilter, setcategoryFilter] = useState([])
  const [brandFilter, setbrandFilter] = useState([])
  const [discountFilter, setdiscountFilter] = useState([null, null])
  const [priceFilter, setpriceFilter] = useState([null, null])
  const [ratingsFilter, setratingsFilter] = useState(null)
  const [sortinFilter, setsortinFilter] = useState(null)
  const [searchFilter, setsearchFilter] = useState(null)




  //////api fetching

  const getProductApi = async () => {
    setloading(true)
    let productdata = await axios.get(
      "https://wscubetech.co/ecommerce-api/products.php",
      {
        params: {

          page: currentPage,
          limit: 15,
          sorting: sortinFilter,
          price_from: priceFilter[0],
          price_to: priceFilter[1],
          discount_from: discountFilter[0],
          discount_to: discountFilter[1],
          name: searchFilter,
          rating: ratingsFilter,
          brands: brandFilter.join(","),
          categories: categoryFilter.join(","),
        }
      }
    );

    setproducts(productdata.data.data)
    settotalPage(productdata.data.total_pages);
    setloading(false)

  }





  const getCategoryBrand = async () => {

    let catData = await axios.get(`https://wscubetech.co/ecommerce-api/categories.php`)
    setCategory(catData.data.data);



    let brandData = await axios.get(`https://wscubetech.co/ecommerce-api/brands.php`)
    setbrand(brandData.data.data)


  }



  //////////////useeffects ///////////
  useEffect(() => {
    getProductApi()

  }, [categoryFilter, brandFilter, discountFilter, priceFilter, ratingsFilter, sortinFilter, searchFilter, currentPage])

  useEffect(() => {
    setcurrentPage(1)
  }, [categoryFilter, brandFilter, discountFilter, priceFilter, ratingsFilter, sortinFilter, searchFilter])

  useEffect(() => {

    getCategoryBrand()

  }, [])





  return (

    <div className="mx-auto max-w-[1320px] rounded-3xl border border-slate-200 bg-white p-4 pb-16 shadow-sm md:p-6 md:pb-6">

      <div className="fixed bottom-0 left-0 z-99999 w-full bg-blue-700 p-2 text-white shadow-2xl lg:hidden">
        <div className="flex justify-items-center items-center ">
          <button onClick={() => setallFil(v => !v)} className="gap-2 flex items-center"> <FaFilter /> All Filters</button>
        </div>
      </div>


      {/* HEADING SECTION  */}
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">New Arrivals</h1>
        <div>
          <label className="" htmlFor="">
            <input onChange={(e) => setsearchFilter(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2 lg:w-72" type="text" name="" id="" placeholder="Search products..." />
          </label>
        </div>

        <div className="flex items-center justify-between gap-6 lg:gap-16">


          {/* soting filter */}

          <div className="relative ">
            <h3 className="flex cursor-pointer items-center gap-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700" onClick={() => setsortingDiv(v => !v)}>Sort <RiArrowDropDownLine size={25} /></h3>


            <ul onClick={() => setsortingDiv(v => !v)} className={`absolute left-0 top-12 z-50 w-max origin-top-left cursor-pointer rounded-2xl border border-slate-200 bg-white py-3 text-slate-700 shadow-xl duration-300 ${sortingDiv ? "" : "scale-0"}`}>
              <li onClick={() => setsortinFilter(null)} className="hover:bg-[#F3F4F6] py-1 px-3">none</li>
              <li onClick={() => setsortinFilter(1)} className="hover:bg-[#F3F4F6] py-1 px-3">Name : A to Z</li>
              <li onClick={() => setsortinFilter(2)} className="hover:bg-[#F3F4F6] py-1 px-3">Name : A to Z</li>
              <li onClick={() => setsortinFilter(3)} className="hover:bg-[#F3F4F6] py-1 px-3">Price: Low to High</li>
              <li onClick={() => setsortinFilter(4)} className="hover:bg-[#F3F4F6] py-1 px-3">Price:  High to Low </li>
              <li onClick={() => setsortinFilter(5)} className="hover:bg-[#F3F4F6] py-1 px-3">Discounted Price: Low to High</li>
              <li onClick={() => setsortinFilter(6)} className="hover:bg-[#F3F4F6] py-1 px-3">Discounted Price: High to Low</li>

            </ul>


          </div>
          <div className="flex items-center rounded-full bg-slate-100 p-2 text-slate-600"><RxDashboard /></div>
        </div>

      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[24%_auto]">
        {/* SIDE BAR  */}
        <div
          className={`${allFil ? "fixed inset-0 z-40 bg-black/40 p-3 pt-20" : "hidden"} lg:static lg:block lg:bg-transparent lg:p-0`}
          onClick={() => setallFil(false)}
        >
          <div
            className="h-[calc(100vh-6rem)] w-[85%] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 shadow-xl sm:w-[60%] lg:h-auto lg:w-auto lg:overflow-visible lg:shadow-none"
            onClick={(e) => e.stopPropagation()}
          >

          {/* categories filter///////////////////////// */}

          <div className="py-6 px-4 border-b border-[#ccc]">
            <h2 onClick={() => {
              setfilterDiv(prev => {
                const newArr = [...prev];
                newArr[0] = !prev[0];
                return newArr;
              });
            }}
              className="flex justify-between font-semibold">Categories{filterDiv[0] ? <FaMinus /> : <FaPlus />}</h2>

            <ul className={`${filterDiv[0] ? "" : "hidden"}`}>
              {
                Category.map((cat, i) => {
                  return (
                    <label key={i} className="flex items-center gap-2 cursor-pointer my-2">
                      <input onChange={(e) => {
                        setcategoryFilter(v => {
                          if (e.target.checked) { return [...categoryFilter, cat.slug] }
                          else {
                            return categoryFilter.filter(slug => slug != cat.slug)
                          }
                        })
                      }}
                        value={cat.slug} type="checkbox" />


                      <p>{cat.name}</p>
                    </label>
                  )
                })
              }

            </ul>
          </div>


          {/* brands filter//////////// */}


          <div className="py-6 px-4 border-b border-[#ccc]">
            <h2 onClick={() => {
              setfilterDiv(prev => {
                const newArr = [...prev];
                newArr[1] = !prev[1];
                return newArr;
              });
            }} className="flex justify-between font-semibold">Brands    {filterDiv[1] ? <FaMinus /> : <FaPlus />}</h2>
            <ul className={`${filterDiv[1] ? "" : "hidden"}`}>
              {
                brand.map((brands, i) => {

                  return (
                    <label key={i} className="flex items-center gap-2 cursor-pointer my-2">
                      <input value={brands.slug} type="checkbox"

                        onChange={(e) => {
                          setbrandFilter(v => {
                            if (e.target.checked) {
                              return [...brandFilter, brands.slug]
                            } else {
                              return brandFilter.filter(slug => slug != brands.slug)
                            }
                          })
                        }}
                      />
                      <p>{brands.name}</p>
                    </label>
                  )
                })
              }
            </ul>
          </div>



          {/* price filter/////////////// */}




          <div className="py-6 px-4 border-b border-[#ccc]">
            <h2 onClick={() => {
              setfilterDiv(prev => {
                const newArr = [...prev];
                newArr[2] = !prev[2];
                return newArr;
              });
            }} className="flex justify-between font-semibold">Price   {filterDiv[2] ? <FaMinus /> : <FaPlus />}</h2>


            <ul className={`${filterDiv[2] ? "" : "hidden"}`} >


              <li onClick={() => setpriceFilter([null, null])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="asfsafsa"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="asfsafsa"
                    type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    All prices
                  </span>
                </label>
              </li>



              <li onClick={() => setpriceFilter([0, 50])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="price-0-50"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="price-0-50"
                    type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    $.0 - $.50
                  </span>
                </label>
              </li>

              <li onClick={() => setpriceFilter([51, 100])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="$.51 - $.100"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="$.51 - $.100"
                    type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    $.51 - $.100
                  </span>
                </label>
              </li>

              <li onClick={() => setpriceFilter([101, 150])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="$.101 - $.150"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="$.101 - $.150" type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    $.101 - $.150                  </span>
                </label>
              </li>


              <li onClick={() => setpriceFilter([151, 250])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="Rs.1501 - Rs.2500"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="$.151 - $.250"
                    type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    $.151 - $.250
                  </span>
                </label>
              </li>


              <li onClick={() => setpriceFilter([251, 99999999999])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor=" $.251 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id=" $.251 and more"
                    type="radio"
                    name="price"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    $.251 and more
                  </span>
                </label>
              </li>
            </ul>
          </div>

          {/* Discounted filter/////////////// */}



          <div className="py-6 px-4 border-b border-[#ccc]">
            <h2 onClick={() => {
              setfilterDiv(prev => {
                const newArr = [...prev];
                newArr[3] = !prev[3];
                return newArr;
              });
            }} className="flex justify-between font-semibold">Discounted Price    {filterDiv[3] ? <FaMinus /> : <FaPlus />}</h2>

            <ul className={`${filterDiv[3] ? "" : "hidden"}`} >
              <li onClick={() => setdiscountFilter([0, 20])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="0% - 20%"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="0% - 20%"
                    type="radio"
                    name="discount"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    0% - 20%
                  </span>
                </label>
              </li>



              <li onClick={() => setdiscountFilter([21, 40])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="21% - 40%"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="21% - 40%"
                    type="radio"
                    name="discount"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    21% - 40%
                  </span>
                </label>
              </li>


              <li onClick={() => setdiscountFilter([41, 60])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="41% -60%"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="41% -60%"
                    type="radio"
                    name="discount"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    41% -60%
                  </span>
                </label>
              </li>


              <li onClick={() => setdiscountFilter([61, 80])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="61% - 80%"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="61% - 80%"
                    type="radio"
                    name="discount"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">

                    61% - 80%
                  </span>
                </label>
              </li>



              <li onClick={() => setdiscountFilter([81, 100])} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="81% - 100%"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="81% - 100%"
                    type="radio"
                    name="discount"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">

                    81% - 100%
                  </span>
                </label>
              </li>

            </ul>

          </div>

          {/* Ratings filter/////////////// */}

          <div className="py-6 px-4 border-b border-[#ccc]">
            <h2 onClick={() => {
              setfilterDiv(prev => {
                const newArr = [...prev];
                newArr[4] = !prev[4];
                return newArr;
              });
            }} className="flex justify-between font-semibold">Rating {filterDiv[4] ? <FaMinus /> : <FaPlus />}</h2>


            <ul className={`${filterDiv[4] ? "" : "hidden"}`} >
              <li onClick={() => setratingsFilter(1)} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="1 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="1 and more"
                    type="radio"
                    name="ratings"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">

                    1 and more
                  </span>
                </label>
              </li>




              <li onClick={() => setratingsFilter(2)} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="2 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="2 and more"
                    type="radio"
                    name="ratings"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    2 and more
                  </span>
                </label>
              </li>


              <li onClick={() => setratingsFilter(3)} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="3 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="3 and more"
                    type="radio"
                    name="ratings"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    3 and more
                  </span>
                </label>
              </li>



              <li onClick={() => setratingsFilter(4)} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="4 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="4 and more"
                    type="radio"
                    name="ratings"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    4 and more
                  </span>
                </label>
              </li>


              <li onClick={() => setratingsFilter(5)} className="py-3 font-medium flex items-center gap-3">
                <label
                  htmlFor="5 and more"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    id="5 and more"
                    type="radio"
                    name="ratings"
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    5 and more
                  </span>
                </label>
              </li>
            </ul>
          </div>
          </div>
        </div>


        {/* /////////////////////////////////////////products section ////////////////////////////////////////////// */}

        {
          loading ?

            (<TripleLoader />)
            :
            (products.length == 0 ?
              <EmptyState />
              :
              <div className="grid min-h-[420px] grid-cols-1 justify-items-center gap-6 p-3 pt-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:p-2">

                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>

            )}
      </div>
      <div className="mt-5 w-[90%] overflow-x-scroll rounded-xl bg-white/60 p-2 lg:w-[100%]">

        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={setcurrentPage}
        />

      </div>
    </div>
  )
}