import styles from '../page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '/public/logo.svg'

export default function Signup(){
  return(
    <>
     <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt='logo da pizzaria'
        />

        <section className={styles.login}>
          <h1>Criando sua conta</h1>

          <form>
            <input 
              type="text" 
              required
              name="name"
              placeholder="Digite seu nome..."
              className={styles.input}
            />

            <input 
              type="email" 
              required
              name="email"
              placeholder="Digite seu email..."
              className={styles.input}
            />

            <input 
              type="password" 
              required
              name="password"
              placeholder="********"
              className={styles.input}
            />

            <button type='submit' className={styles.button}>Cadastrar</button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça login
          </Link>
        </section>
      </div>
    </>
  )
}