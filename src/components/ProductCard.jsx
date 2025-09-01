import {Plus} from "lucide-react";

function ProductCard(props) {
  return (
    <div className="relative p-2.5 h-82 border border-solid border-gray-400 hover:border-green-500 active:border-green-500 hover:shadow-xl active:hadow-xl rounded-xl">
      <img
        className="h-36 w-9/12 object-contain block m-auto"
        src={props.img}
        alt={props.name}
      />

      <div className="absolute bottom-28">
        <p className="text-gray-300 text-xs">{props.supplier}</p>
        <p className="font-semibold tracking-wide">{props.name}</p>
      </div>

      <div className="flex justify-between items-center absolute bottom-3.5 w-11/12">
        <p>{props.price}</p>
        <p className="text-white flex gap-2 items-center rounded-sm text-sm border-solid px-4 py-1 bg-green-500 hover:bg-green-600">
          <Plus size="15" color="white" />
          Add
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
