"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();

  const productId = path.split("/")[2];
  const reviewId = path.split("/")[4];

  console.log(path);
  return (
    <div>
      <h2>Review Not Found</h2>
      <p>
        Review {reviewId} not found for product {productId}
      </p>
    </div>
  );
}
