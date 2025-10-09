/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient, Prisma } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      // Limpar dados existentes
      await tx.contactInfo.deleteMany();
      await tx.landingPage.deleteMany();

      // Criar landing page
      const landingPage = await tx.landingPage.create({
        data: {
          name: "Bella Vita",
          slug: "bellavita",
          description:
            "Desperte sua beleza natural com nossos tratamentos exclusivos. Mais de 10 anos cuidando da sua autoestima com carinho e profissionalismo.",
          avatarImageUrl:
            "https://h4mwwihke9yjbcdr.public.blob.vercel-storage.com/logo/1.png",
          coverImageUrl:
            "https://h4mwwihke9yjbcdr.public.blob.vercel-storage.com/cover/1.png",
        },
      });

      // Criar contact info
      await tx.contactInfo.create({
        data: {
          email: "contato@bellavita.com.br",
          phone: "(47) 99953-5245",
          whatsappLink: "https://wa.me/5547999535245",
          instagramLink: "https://www.instagram.com/bellavita",
          facebookLink: "https://www.facebook.com/bellavita",
          landingpageId: landingPage.id,
        },
      });

      return {
        landingPage,
      };
    },
    { timeout: 20000 },
  );

  console.log("📱 Seed de dados concluído com sucesso! 🎉");
};

main()
  .catch((e) => {
    console.error("Erro ao executar o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
