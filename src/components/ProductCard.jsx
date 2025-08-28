import {Plus} from "lucide-react";

function ProductCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <div className="h-36 w-10/12 m-auto">
          <img
            className="h-36 object-contain"
            src="/products/garri.jpg"
            alt="Garri"
          />
        </div>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Garri</h3>
        </div>

        <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
          <p>#50</p>
          <p className="text-white flex gap-2 items-center rounded-sm text-sm border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
            <Plus size="15" color="white" />
            Add
          </p>
        </div>
      </div>

      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <div className="h-36 w-10/12 m-auto">
          <img
            className="h-36 object-contain"
            src="/products/plantain.png"
            alt="Plantain"
          />
        </div>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Plantain</h3>
        </div>

        <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
          <p>#50</p>
          <p className="text-white flex gap-2 items-center rounded-sm text-base border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
            <Plus size="18" color="white" />
            Add
          </p>
        </div>
      </div>
      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <div className="h-36 w-10/12 m-auto">
          <img
            className="h-36 object-contain"
            src="/products/sweet_potato.jpg"
            alt="Sweet Potato"
          />
        </div>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Sweet Potato</h3>
        </div>

        <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
          <p>#50</p>
          <p className="text-white flex gap-2 items-center rounded-sm text-base border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
            <Plus size="18" color="white" />
            Add
          </p>
        </div>
      </div>
      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <div className="h-36 w-10/12 m-auto">
          <img
            className="h-36 object-contain"
            src="/products/irish_potato.jpg"
            alt="Irish Potato"
          />
        </div>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Irish Potato</h3>
        </div>

        <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
          <p>#50</p>
          <p className="text-white flex gap-2 items-center rounded-sm text-base border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
            <Plus size="18" color="white" />
            Add
          </p>
        </div>
      </div>
      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <div className="h-36 w-10/12 m-auto">
          <img
            className="h-36 object-contain"
            src="/products/crayfish.jpg"
            alt="Crayfish"
          />{" "}
        </div>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Crayfish</h3>
        </div>

        <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
          <p>#50</p>
          <p className="text-white flex gap-2 items-center rounded-sm text-base border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
            <Plus size="18" color="white" />
            Add
          </p>
        </div>
      </div>
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
  );
}

export default ProductCard;
