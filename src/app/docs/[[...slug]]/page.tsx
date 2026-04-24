export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);

  if (slug?.length === 2) {
    return (
      <div>
        <h2>
          Viewing feature {slug[0]} concept {slug[1]}
        </h2>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h2>Viewing feature {slug[0]}</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Docs page</h2>
    </div>
  );
}
