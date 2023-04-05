import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const categoryBakery = await prisma.category.create({
    data: {
      imageId: "f3fbf57b118fa9",
      name: "Bakery",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        categoryId: categoryBakery.id,
        imageId: "293202f9d9f7f4",
        name: "Bagel",
        price: 2.0,
      },
      {
        categoryId: categoryBakery.id,
        imageId: "808916fd5ddf96",
        name: "Croissant",
        price: 1.0,
      },
      {
        categoryId: categoryBakery.id,
        imageId: "95d02a230fe050",
        name: "Muffin",
        price: 1.25,
      },
      {
        categoryId: categoryBakery.id,
        imageId: "23f95765b967ff",
        name: "Toast / Bread",
        price: 1,
      },
      {
        categoryId: categoryBakery.id,
        imageId: "5650be5d48a99b",
        name: "English Muffin",
        price: 2.5,
      },
    ],
  });

  const categoryEntrees = await prisma.category.create({
    data: {
      imageId: "b271afbefdc554",
      name: "Entrees",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        categoryId: categoryEntrees.id,
        imageId: "bd237a0c0d19ef",
        name: "Pasta Bar",
        price: 12.99,
      },
      {
        categoryId: categoryEntrees.id,
        imageId: "3e1bd1342800f7",
        name: "Mediterranean Entree",
        price: 10.99,
      },
      {
        categoryId: categoryEntrees.id,
        imageId: "72589c4c990f97",
        name: "Indian Entree",
        price: 11.95,
      },
    ],
  });

  const categoryDrinks = await prisma.category.create({
    data: {
      imageId: "eba73b2361fae3",
      name: "Drinks",
    },
  });

  await prisma.product.createMany({
    data: [
      {
        categoryId: categoryDrinks.id,
        imageId: "70c2a6247e7b58",
        name: "Small Drink",
        price: 0.75,
      },
      {
        categoryId: categoryDrinks.id,
        imageId: "dba0fc03da30ca",
        name: "Medium Drink",
        price: 1.5,
      },
      {
        categoryId: categoryDrinks.id,
        imageId: "ffc9bf61e441cd",
        name: "Large Drink",
        price: 2,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
