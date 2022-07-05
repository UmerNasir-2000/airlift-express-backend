import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.classifications.create({
    data: {
        name: 'Qurbani',
        imageUrl: 'http://localhost:8080/'
    }
  })

 
  console.log({ alice })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })