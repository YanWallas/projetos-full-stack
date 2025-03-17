"use client"

import { createContext, ReactNode, useState} from "react"

type OrderContextData = {
  isOpen: boolean;
  onRequestOpren: () => void;
  onRequestClose: () => void;
}

type OrderProviderProps = {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children }: OrderProviderProps){
  const [isOpen, setIsOpen] = useState(false);

  function onRequestOpren(){
    setIsOpen(true);
  }

  function onRequestClose(){
    setIsOpen(false);
  }

  return(
    <OrderContext.Provider
      value={{
        isOpen,
        onRequestOpren,
        onRequestClose
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}