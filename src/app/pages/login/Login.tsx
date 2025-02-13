import { useCallback, useEffect, useMemo, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";
//import { UsuarioLogadoContext } from '../../shared/contexts';

export const Login = () => {
    // Define e exporta o componente Login.

    const inputPasswordRef = useRef<HTMLInputElement>(null); 
    // Cria uma referência para o elemento input da senha usando useRef.

    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');
    // Declara estados email e senha com os respectivos setters setEmail e setSenha.

    const history = useNavigate(); 
    // Usa useNavigate para obter a função history que permite navegação programática.

    const handleclick = () => {
        history("/pagina-inicial");
    }
    // Define a função handleclick que navega para "/pagina-inicial" quando chamada.

    const emailLenght = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);
    // Usa useMemo para calcular emailLenght, que depende do comprimento de email, multiplicado por 1000. Recalcula apenas quando email.length muda.

    const handleclickLogin = useCallback(() => {
        console.log(email);
        console.log(senha);
    }, [email, senha]);
    // Define a função handleclickLogin usando useCallback para registrar email e senha no console. Recalcula apenas quando email ou senha mudam.



    const {nomeDoUsuario} = useUsuarioLogado();



    return (
        <>
            <p>Quantidade de letras do email: {emailLenght}</p>
            {/* Exibe a quantidade de letras do email */}

            <p>{nomeDoUsuario}</p>

            <form action="">
                <InputLogin 
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    // O primeiro InputLogin para email com label, value, onChange e onPressEnter para focar no input de senha.
                />

                <InputLogin
                    type="password"
                    label="Senha"
                    value={senha}
                    ref={inputPasswordRef}
                    onChange={newValue => setSenha(newValue)}
                    // O segundo InputLogin para senha com type="password", label, value, ref e onChange.
                />
                
                <ButtonLogin type="button" onClick={handleclickLogin}>
                    Entrar
                </ButtonLogin>

                <ButtonLogin type="button" onClick={handleclickLogin}>
                    Cadastrar-se
                </ButtonLogin>
            
            
            </form>
            <br />
            <button onClick={handleclick}>Voltar para Página Inicial</button>
            {/* Botão que, quando clicado, chama handleclick para navegar de volta para a página inicial */}
        </>
    );
}
