import { OwnerRepo } from "@/components/OwnerRepo";

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner:{
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function delayFetch(url: string, delay: number){
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url, { next: { revalidate: 60 }});//vai gera cache da api por 60s, so depois vai buscar info da api.
  
  //const response = await fetch(url, { cache: 'no-store'});// Não vai gera cache da api, vai buscar info toda vez.
  
  //const response = await fetch(url);//se nao passar nada, vai armazenar o cache por padrao. 
  return response.json();
}

// async function getData(){
//   //https://api.github.com/users/YanWallas/repos
//   const response = await fetch("https://api.github.com/users/YanWallas/repos")

//   return response.json();
// }

async function getData(){
  const data = await delayFetch("https://api.github.com/users/YanWallas/repos", 0)
  return data; 
  
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página home</h1>
      <span>Seja bem vindo a página home</span>

      <h3>Meus repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong> <a>{item.name}</a>
          <br/>
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <hr/>
        </div>
      ))}
    </main>
  );
}
