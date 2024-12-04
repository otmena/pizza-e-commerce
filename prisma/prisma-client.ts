import { PrismaClient } from '@prisma/client'

const prismaClientSinglenton = () => {
  return new PrismaClient()
}

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSinglenton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSinglenton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;