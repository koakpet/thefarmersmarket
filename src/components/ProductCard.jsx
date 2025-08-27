import Image from "next/image";
import {Plus} from "lucide-react";

function ProductCard() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 hover:shadow-xl rounded-xl">
        <Image
          src="/products/garri.jpg"
          width="141"
          height="135"
          alt="Garri"
          className="m-auto"
        ></Image>

        <div className="absolute bottom-28">
          <h5 className="text-gray-300 text-sm">Dassah's Market Place</h5>
          <h3 className="font-semibold tracking-wide">Garri</h3>
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
        <Image
          src="/products/plantain.png"
          width="141"
          height="135"
          alt="Plantain"
          className="m-auto absolute bottom-44 w-fit"
        ></Image>

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
        <Image
          src="/products/sweet_potato.jpg"
          width="141"
          height="135"
          alt="Sweet Potato"
          className="m-auto absolute bottom-40 w-fit"
        ></Image>

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
        <Image
          src="/products/irish_potato.jpg"
          width="141"
          height="135"
          alt="Irish Potato"
          className="m-auto"
        ></Image>

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
        <Image
          src="/products/crayfish.jpg"
          width="141"
          height="135"
          alt="Crayfish"
          className="m-auto"
        ></Image>

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
