import Image from "next/image"

function ProductCard () {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs
        sm:max-w-md mx-auto transform hover:scale-101 transition-transform 
        duration-300 ease-in-out">
            <Image src="/products/garri.jpg"
            width="90"
            height="90"
            alt="Image of garri"
            ></Image>
            <h2 className="text-3xl">Garri</h2>
        </div>
    )
}

export default ProductCard