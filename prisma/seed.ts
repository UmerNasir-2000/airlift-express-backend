import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const grocery = await prisma.classifications.create({
    data: {
      name: 'Grocery',
      imageUrl: 'grocer/94f1680c-9043-43f9-977d-c0ff8432a25b_Grocery.png'
    }
  });

  console.log({grocery})
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })