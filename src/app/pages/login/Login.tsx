import { useNavigate   } from "react-router-dom";

export  const Login = () => {
    const history = useNavigate  ();

    const handleclick = () =>{
        history("/pagina-inicial");
    }
    return(
        <>
            <form action="">
                <label htmlFor="">
                    <span>Email</span>
                    <input/>
                </label>


                <label htmlFor="">
                    <span>Senha</span>
                    <input type="password"/>
                </label>
            </form>

        
        <button onClick={handleclick}>Voltar para Pagina Inicial</button>
        </>
    );
}




