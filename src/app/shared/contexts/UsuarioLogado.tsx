import { createContext } from "react";


interface IUsuarioLogadoContextData {
    nomeDoUsuario: string,
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData); //truque para mascarar um objeto vazio 

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {

    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Lucas'}}>
        {children}
        </UsuarioLogadoContext.Provider>
    )

}