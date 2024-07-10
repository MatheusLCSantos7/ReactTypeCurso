import { createContext, useCallback } from "react";


interface IUsuarioLogadoContextData {
    nomeDoUsuario: string,
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData); //truque para mascarar um objeto vazio 

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {

    const handlelogout = useCallback(()=>{
       console.log('Logout executou') 
    }, []);


    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Lucas', logout: handlelogout}}>
        {children}
        </UsuarioLogadoContext.Provider>
    )

}