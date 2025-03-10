import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

// URL da api: /movie/now_playing?api_key=10336075e69e824f4134ca90376b9ed8

function Home(){
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function loasdFilmes() {
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "10336075e69e824f4134ca90376b9ed8",
          language: "pt-BR",
          page: 1,
        }
      })

      //console.log(response.data.results);
      setFilmes(response.data.results);
      setLoading(false);
    }

    loasdFilmes();

  },[])

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando Filmes...</h2>
      </div>
    )
  }
  
  return(
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=> {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link> 
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;