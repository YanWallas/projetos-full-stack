
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

async function getData(){
  //https://api.github.com/users/YanWallas/repos
  const response = await fetch("https://api.github.com/users/YanWallas/repos")

  return response.json();
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
          <br/><hr/>
        </div>
      ))}
    </main>
  );
}
