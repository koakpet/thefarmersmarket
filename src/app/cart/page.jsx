import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function Cart() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <div className="flex">
            <img
              className="block"
              src="/products/garri.jpg"
              alt="Garri"
              height="120"
              width="120"
            />
            <div>
              <p>Garri</p>
              <p>Qty.: 10 cups</p>
              <p>Amount: #1,000</p>
            </div>
          </div>
        </div>
        <div className="stick top-0"></div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Cart;
