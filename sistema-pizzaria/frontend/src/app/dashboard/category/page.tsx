import styles from './styles.module.scss';
import { Button } from '@/app/dashboard/components/button/';
import { api } from '@/services/api';

export default function Category(){

  async function handleRegisterCategory() {
    "use server"
    console.log("testando")
  }

  return(
    <main className={styles.container}>
      <h1>Nova Categoria</h1>

      <form className={styles.form} action={handleRegisterCategory}>
        <input 
          type="text" 
          name='name'
          placeholder='Nome da categoria, ex: pizzas'
          required
          className={styles.input}
        />

        <Button name="Cadastrar"/>
      </form>
    </main>
  )
}