import { useState } from "react";
import { useNavigate   } from "react-router-dom";



export  const Login = () => {

    const  [email, setEmail] = useState('');
    const  [senha, setSenha] = useState('');





    const history = useNavigate  ();

    const handleclick = () =>{
        history("/pagina-inicial");
    }

    return(
        <>
            <form action="">
                
                <label htmlFor="">
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>


                <label htmlFor="">
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </label>

                <button onClick={handleclick}>Voltar para Pagina Inicial</button>
            
            </form>

        
        </>
    );
}




