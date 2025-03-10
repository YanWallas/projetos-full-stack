
interface PageDetailProps{
  params: {
    id: string;
  }
}

async function getData(id: string){
  console.log(id);
  //https://api.github.com/users/YanWallas/repos
  const response = await fetch("https://api.github.com/users/YanWallas/repos")
  return response.json();
}

export default async function RepositorioId({ params }: PageDetailProps){
const data = await getData(params.id);

  return(
    <div>
      <h1>Página detalhes do repositorio {params.id}</h1>
    </div>
  )
}