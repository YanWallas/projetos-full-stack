import styles from './styles.module.scss';
import { X } from 'lucide-react'

export function Modaloarder(){
  return(
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button className={styles.dialogBack}>
          <X size={40} color="#9c3434"/>
        </button>

        <article className={styles.container}>
          <h2>Detalhes do Pedido</h2>

          <span className={styles.table}>
            Mesa <b>36</b>
          </span>

          <section className={styles.item}>
            <span>1 - <b>Pizza Catupiry</b></span>
            <span className={styles.description}>Pizza de frango com catupiry, borda recheada</span>
          </section>

          <button className={styles.buttonOrder}>
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  )
}