import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';


export const Dashboard = ()=>{

    const {nomeDoUsuario, logout} = useUsuarioLogado();


    return(
    <>

    <p>Usuario logado = {nomeDoUsuario}</p>
        <p>Dashboard</p>
        <Link to="/login">Login</Link>    


    <p> <button onClick={logout}>Sair </button></p>
    </>
    );
}