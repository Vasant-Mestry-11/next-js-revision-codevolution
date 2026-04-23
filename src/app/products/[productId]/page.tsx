export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h2>Details about Product: {productId}</h2>
    </div>
  );
}
