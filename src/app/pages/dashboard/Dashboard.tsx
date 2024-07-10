import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';


export const Dashboard = ()=>{

    const {nomeDoUsuario} = useUsuarioLogado();


    return(
    <>

    <p>Usuario logado = {nomeDoUsuario}</p>
        <p>Dashboard</p>
        <Link to="/login">Login</Link>    
    </>
    );
}