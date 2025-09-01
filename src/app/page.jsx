import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import products from "@/components/documents/products";

function createProduct(product) {
  return (
    <ProductCard
      key={product.id}
      name={product.name}
      supplier={product.supplier}
      img={product.img}
      price={product.price}
    />
  );
}

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-6">
        {products.map(createProduct)}
      </div>
    </MaxWidthWrapper>
  );
}
