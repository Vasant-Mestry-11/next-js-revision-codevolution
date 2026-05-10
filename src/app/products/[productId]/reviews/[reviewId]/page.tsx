import { notFound, redirect } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 100) {
    // notFound();
    redirect("/products");
  }

  return (
    <div>
      <h2>
        Review {reviewId} for product {productId}
      </h2>
    </div>
  );
}
