import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;

  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return (
    <div>
      <h2>Details about Product: {productId}</h2>
    </div>
  );
}
