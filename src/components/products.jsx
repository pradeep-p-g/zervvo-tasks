import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";

export default function Products({ products, setProducts, search }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [sortOptions, setSortOptions] = useState("");

  useEffect(() => {
     const controller = new AbortController();
    const fetchProducts = async () => {   
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products`, {signal : controller.signal});
        if (!res.ok) {
          throw new Error("Error fetching Products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if(err.name !== "AbortError"){
        setError("Error getting products");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
        controller.abort()
    }
  }, []);

  const filterProducts = products
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOptions === "lowToHigh") {
        return a.price - b.price;
      }

      if (sortOptions === "highToLow") {
        return b.price - a.price;
      }

      if (sortOptions === "aToZ") {
        return a.title.localeCompare(b.title);
      }

      return 0;
    });

  useEffect(() => {
    const handleScroll = async () => {
      if (visibleProducts >= filterProducts.length) {
        return;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setScrollLoading(true);
         setTimeout(() => {
          setVisibleProducts((prev) => prev + 4);
          setScrollLoading(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProducts, filterProducts.length]);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
       <Error />
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-3 mx-8 lg:mx-3">
        <div className="border border-gray-400 rounded-sm bg-white shadow-md w-[110px]">
          <select
            value={sortOptions}
            onChange={(e) => setSortOptions(e.target.value)}
            className="cursor-pointer"
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
            <option value="aToZ">A to Z</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {filterProducts.length > 0 ? (
          filterProducts.slice(0, visibleProducts).map((products, index) => {
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-md bg-white shadow-lg flex flex-col items-center py-5"
              >
                <img
                  src={products.image}
                  className="w-60 h-75 object-contain"
                  alt={products.title}
                />
                <h1 className="text-md font-semibold w-75 line-clamp-2 text-center px-10 pt-5">
                  {products.title}
                </h1>
                <h1 className="text-center">₹{products.price}</h1>
              </div>
            );
          })
        ) : (
          <div>No products found</div>
        )}
      </div>

      {scrollLoading && (
        <div className="flex items-center m-5">
          <Loader2 className="w-5 h-5 animate-spin text-white" />
        </div>
      )}
    </div>
  );
}
