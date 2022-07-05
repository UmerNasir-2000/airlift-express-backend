import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // const grocery = await prisma.classifications.create({
  //   data: {
  //     name: 'Grocery',
  //     imageUrl: 'grocer/94f1680c-9043-43f9-977d-c0ff8432a25b_Grocery.png'
  //   }
  // });

  // console.log({grocery})

  const grocery = await prisma.classifications.create({
    data: {
      name: 'Grocery',
      imageUrl: 'grocer/94f1680c-9043-43f9-977d-c0ff8432a25b_Grocery.png'
    }
  });


  console.log({grocery})
  const qurbani = await prisma.classifications.create({
    data: {
      name: 'Qurbani',
      imageUrl: 'grocer/2fc60676-704b-4919-b82e-0090aff31178_L0-page-one-sku-image%20final.png'
    },
    
  })

  console.log({qurbani})
  const pharmacy = await prisma.classifications.create({
    data: {
      name: 'Pharmacy',
      imageUrl: 'grocer/e8cd530c-d420-45c8-82b7-6e0b357160b1_pharmacy.png'
    }
  })

  console.log({pharmacy})

  const res = await prisma.modules.createMany({
    data: [
      {
        name: 'Fruits and Vegetables',
        classificationId: grocery.id,
        imageUrl: 'grocer/0fd8e29b-4d0a-49d0-bacf-70405f5bdb0e_Fruits%20%26%20Vegetables.png'
      },
      {
        name: 'Beverages',
        classificationId: grocery.id,
        imageUrl: 'grocer/2fc60676-704b-4919-b82e-0090aff31178_L0-page-one-sku-image%20final.png'
      },
      {
        name: 'Eid-ul-Azha',
        classificationId: qurbani.id,
        imageUrl: 'grocer/b7392c8d-fdb9-446a-8b77-76a639cd661f_Fresh-Meat.png'
      },
      {
        name: 'Medicines',
        classificationId: pharmacy.id,
        imageUrl: 'grocer/2ed60bb9-6364-4204-96b8-e8cf28b267ea_c34175b6-39c0-4e41-a2f4-7454b1f9d15f_e219e51d-6426-4c5e-b1bb-7ab3bb6a6f27_woo.png'
      },
      {
        name: 'Lifestyle & Fitness',
        classificationId: pharmacy.id,
        imageUrl: 'grocer/476c0ea2-0593-46ff-b72a-003ee381cf9a_3c0186d8-9efc-46d3-82de-31100a9802f7_52faa2ce-0d6e-478f-aed6-d6c0b4a90731_sdsds.png'
      }
    ]
  })


  console.log(res)







}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })