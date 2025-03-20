import prismaClient from "../../prisma";

interface CategoryRequest{
  category_id: string;
}

class DeleteCategoryService{
  async execute({category_id}: CategoryRequest) {

    console.log("id", category_id);
    const category = await prismaClient.category.delete({
      where:{
        id: category_id,
      }
    })

    return category;
  }
}

export { DeleteCategoryService }