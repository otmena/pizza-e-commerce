import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";
import { Container, GroupVariants, ProductImage, Title } from "@/components/shared";

export default async function ProductPage({ params: { id }} : { params: { id: string } }) {
  const product = await prisma.product.findFirst({ where: { id: Number(id)}})

  if(!product) {
    return notFound();
  }

  return <Container className='flex flex-col my-10'>
    <div className="flex flex-1">
      <ProductImage imageUrl={product.imageUrl} alt={product.name} size={40}/>

      <div className="w-[490px] bg-[#f0fff2] p-7">
        <Title text={product.name} size='md' className="font-extrabold mb-1"/>

        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <GroupVariants selectedValue="2" items={[
          {
          name: 'Маленькая',
          value: '1'
          },
          {
          name: 'Средняя',
          value: '2'
          },
          {
          name: 'Большая',
          value: '3'
          },
        ]}/>
      </div>
    </div>
  </Container>
}