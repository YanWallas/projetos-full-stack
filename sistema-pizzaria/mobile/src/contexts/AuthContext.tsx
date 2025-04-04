import React, { createContext, ReactNode, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}

type UserProps ={
  id: string;
  name: string;
  email: string;
  token: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

type SignInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {// Cria o contexto de autenticação
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  });

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user.name; //Verifica se o usuário está autenticado

  useEffect(() => {
    async function getUser(){
      //Pegar os dados do usuário
      const userInfo = await AsyncStorage.getItem('@slicepizzaria');
      let hasUser: UserProps = JSON.parse(userInfo || '{}');

      //Verificar se o usuário existe
      if(Object.keys(hasUser).length > 0){
        api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token
        })
      }
      setLoading(false);
    }

    getUser();
  }, []);// Verifica se o usuário já está autenticado

  async function signIn({email, password}: SignInProps){// Função para autenticar o usuário
    setLoadingAuth(true);

    try {
      const response = await api.post('/session', {// Envia os dados para a API
        email,
        password
      })

      //console.log('resposta', response.data);

      const { id, name, token } = response.data;// Desestruturação dos dados retornados da API

      const data = {// Cria um objeto com os dados do usuário
        ...response.data
      };

      await AsyncStorage.setItem('@slicepizzaria', JSON.stringify(data));// Armazena os dados do usuário no AsyncStorage

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;// Adiciona o token no header padrão da aplicação

      setUser({// Atualiza o estado do usuário
        id,
        name,
        email,
        token
      })

      setLoadingAuth(false);

    }catch (error) {
      console.log('erro ao acessar', error);
      setLoadingAuth(false);
    }
  }
  
  async function signOut(){
    await AsyncStorage.clear()
    .then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: ''
      })
    })
  }

  return(
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        signIn, 
        loadingAuth, 
        loading, 
        signOut 
      }}>
        
      {children}
    </AuthContext.Provider>
  )
}