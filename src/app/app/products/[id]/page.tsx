export type ProductProps = {
  params: {
    id: string
  }
}

export async function generateMetadada({ params }: any) {
  return {
    title: `Produto ${params.id}`,
  }
}

const Product = ({ params }: ProductProps) => {
  return (
    <>
      <h1>Product: {params.id}</h1>
    </>
  )
}

export default Product
