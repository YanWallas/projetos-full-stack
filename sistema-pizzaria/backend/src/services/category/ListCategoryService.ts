import prismaClient from "../../prisma";

class ListCategoryService{
  async execute(){
  
    // trazendo id e name, de todas as categorias. 
    const category = await prismaClient.category.findMany({
      select:{
        id: true,
        name: true,
      }
    })

    return category;
  }
}

export { ListCategoryService }