import { useNavigate   } from "react-router-dom";

export  const Login = () => {
    const history = useNavigate  ();

    const handleclick = () =>{
        history("/pagina-inicial");
    }


    return(
        <>
        Login
        <button onClick={handleclick}>Pagina Inicial</button>
        </>
    );
}