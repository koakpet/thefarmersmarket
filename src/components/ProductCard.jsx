import Image from "next/image"

function ProductCard () {
    return (
<div className="test grid grid-cols-4 gap-5">
<div className="p-3 min-w-3/12 max-w-3/12 h-82 border border-solid border-gray-400 rounded-xl">
    {/* <Image src="/products/garri.jpg" width="120" height="120" alt="Garri"></Image>
    <h1>Garri</h1> */}
</div>

<div className="p-3 w-3/12 h-82 border border-solid border-gray-400 rounded-xl"></div>
<div className="p-3 w-3/12 h-82 border border-solid border-gray-400 rounded-xl"></div>
<div className="p-3 w-3/12 h-82 border border-solid border-gray-400 rounded-xl"></div>
<div className="p-3 w-3/12 h-82 border border-solid border-gray-400 rounded-xl"></div>
<div className="p-3 w-3/12 h-82 border border-solid border-gray-400 rounded-xl"></div>

</div>

        // <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs
        // sm:max-w-md mx-auto transform hover:scale-101 transition-transform 
        // duration-300 ease-in-out">
        //     <Image src="/products/garri.jpg"
        //     width="90"
        //     height="90"
        //     alt="Image of garri"
        //     ></Image>
        //     <h2 className="text-3xl">Garri</h2>
        // </div>
    )
}

export default ProductCard