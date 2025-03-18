"use client"
import styles from './styles.module.scss';
import { RefreshCw } from 'lucide-react';
import { OrderProps } from '@/lib/order.type';
import { Modaloarder } from '@/app/dashboard/components/modal';
import { use } from 'react'
import { OrderContext } from '@/providers/order';

interface Props{
  orders: OrderProps[]
}

export default function Orders({ orders }: Props){
  const { isOpen, onRequestOpren } = use(OrderContext)

  async function handleDetailOrder(order_id: string){
    await onRequestOpren(order_id)
  }

  return(
    <>
      <main className={styles.container}>

        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>
          <button>
            <RefreshCw size={24} color='#3fffa3'/>
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders.map(order => (
            <button key={order.id} className={styles.orderItem} onClick={() => handleDetailOrder(order.id)}>
            <div className={styles.tag}></div>
            <span>Mesa {order.table}</span>
            </button>
          ))}
        </section>
      </main>

      { isOpen && <Modaloarder/> }
    </>
  )
}
