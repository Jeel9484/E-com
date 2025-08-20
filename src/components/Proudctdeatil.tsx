import Image from "next/image";

export default function ProductDetails({ product }: { product: any }) {
  return (
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
      
      {/* Image Gallery */}
      <div className="space-y-4">
        {product.images.map((img: string, i: number) => (
          <Image
            key={i}
            src={img}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-2xl shadow-md w-full"
          />
        ))}
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-500 mb-2">Vendor: {product.vendor}</p>

        <div className="flex items-center gap-3 mb-4">
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          {product.compareAtPrice && (
            <p className="line-through text-gray-400">${product.compareAtPrice}</p>
          )}
        </div>

        <p className="text-sm text-gray-400 mb-4">SKU: {product.sku}</p>
        <p className="text-sm text-gray-600 mb-6">In stock: {product.stock}</p>

        {/* Variants */}
        <div className="mb-6">
          {product.variants.map((variant: any) => (
            <button
              key={variant.id}
              className="border px-4 py-2 rounded-lg mr-2 hover:bg-gray-100"
            >
              {variant.name}
            </button>
          ))}
        </div>

        {/* Add to Cart */}
        <button className="bg-black text-white px-6 py-3 rounded-2xl w-full">
          Add to Cart
        </button>

        {/* Tabs (basic example) */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="col-span-2 mt-16">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.related.map((rel: any, i: number) => (
            <div key={i} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <Image
                src={rel.image}
                alt={rel.title}
                width={300}
                height={300}
                className="rounded-lg mb-3"
              />
              <h3 className="font-semibold text-lg">{rel.title}</h3>
              <p className="text-green-600">${rel.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
