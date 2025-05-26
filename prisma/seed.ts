import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '+1-555-123-4567',
        password: '123123',
        imageUrl: 'https://example.com/images/john_smith.jpg',
        role: 'ADMIN',
      },
      {
        name: 'Emma Johnson',
        email: 'emma.johnson@example.com',
        phone: '+1-555-234-5678',
        password: '123123',

        imageUrl: 'https://example.com/images/emma_johnson.jpg',
        role: 'STUDENT',
      },
      // ...demais usuários (ajustar `role` e campos inválidos)
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
