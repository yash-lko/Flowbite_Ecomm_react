import axios from "axios";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import ProductCard from "../common/ProductCard";
import TripleLoader from "./TripleLoader";
import EmptyState from "./EmptyState";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

export default function Products() {

  return (

    <>
      <div className="flex-col lg:flex justify-between items-center border-b border-[#cccc]">
        <h1 className="font-bold text-3xl p-10">New Arrivals</h1>
        <div>
          <label className="" htmlFor="">
            <input onChange={(e) => setsearchFilter(e.target.value)} className="border border-[#ccc] rounded-[10px] p-0.5 px-3" type="text" name="" id="" placeholder="search" />
          </label>
        </div>

        <div className="flex gap-40 items-center">


          {/* soting filter */}

          <div className="relative ">
            <h3 className="text-[#364153]  flex gap-1 cursor-pointer" onClick={() => setsortingDiv(v => !v)}>sort <RiArrowDropDownLine size={25} /></h3>


            <ul onClick={() => setsortingDiv(v => !v)} className={`z-50 text-[#364153] absolute top-8 left-5 bg-white shadow cursor-pointer py-3 rounded-2xl w-max duration-300 origin-top-left ${sortingDiv ? "" : "scale-0"}`}>
              <li onClick={() => setsortinFilter(null)} className="hover:bg-[#F3F4F6] py-1 px-3">none</li>
              <li onClick={() => setsortinFilter(1)} className="hover:bg-[#F3F4F6] py-1 px-3">Name : A to Z</li>
              <li onClick={() => setsortinFilter(2)} className="hover:bg-[#F3F4F6] py-1 px-3">Name : A to Z</li>
              <li onClick={() => setsortinFilter(3)} className="hover:bg-[#F3F4F6] py-1 px-3">Price: Low to High</li>
              <li onClick={() => setsortinFilter(4)} className="hover:bg-[#F3F4F6] py-1 px-3">Price:  High to Low </li>
              <li onClick={() => setsortinFilter(5)} className="hover:bg-[#F3F4F6] py-1 px-3">Discounted Price: Low to High</li>
              <li onClick={() => setsortinFilter(6)} className="hover:bg-[#F3F4F6] py-1 px-3">Discounted Price: High to Low</li>

            </ul>


          </div>
          <div className="flex items-center "><RxDashboard /></div>
        </div>

      </div>



   <div className=" grid grid-cols-1  lg:grid-cols-[20%_auto] ">
        {/* SIDE BAR  */}
        <div className={`h-[69vh]  overflow-y-scroll lg:static top-0 left-0 h-full lg:h-[70vh] bg-white z-50 w-[85%] sm:w-[60%] lg:w-auto overflow-y-scroll transition-transform`} >

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


        {/* /////////////////////////////////////////products section ////////////////////////////////////////////// */}

        {
          loading ?

            (<TripleLoader />)
            :
            (products.length == 0 ?
              <EmptyState />
              :
              <div className="grid grid-cols-1 gap-2 h-[69vh]  overflow-y-scroll p-3 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[70vh] overflow-y-scroll p-2">

                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>

            )}
      </div>




    </>
  )
}
