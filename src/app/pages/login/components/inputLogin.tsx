import React from "react"; 
// Importa a biblioteca React para criar componentes.

interface IInputLoginProps {
    label: string; // Rótulo do campo de entrada.
    value: string; // Valor do campo de entrada.
    type?: string; // Tipo do campo de entrada (padrão é texto, mas pode ser password, etc.).
    onChange: (newValue: string) => void; // Função chamada quando o valor do campo muda.
    onPressEnter?: () => void; // Função chamada quando a tecla Enter é pressionada.
}

//inputPasswordElement.current?.focus() // Comentário de código para focar no input de senha.

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    // Define e exporta o componente InputLogin, usando React.forwardRef para passar refs para o input.

    return (
        <label htmlFor="">
            <span>{props.label}</span> {/* Exibe o rótulo do campo */}
            <input 
                ref={ref} // Passa a referência para o input
                type={props.type} // Define o tipo do input
                value={props.value} // Define o valor do input
                onChange={e => props.onChange(e.target.value)} // Chama onChange quando o valor muda
                onKeyDown={e => e.key === 'Enter' 
                    ? props.onPressEnter && props.onPressEnter() // Chama onPressEnter quando a tecla Enter é pressionada
                    : undefined} 
            />
        </label>
    );
});

/* CÓDIGO ANTES DA AULA 13 ONDE ELE COLOCA O REF 

export const InputLogin: React.FC<IInputLoginProps>= (props) => {
    return(
        <label htmlFor="">
        <span>{props.label}</span>
        <input 
        type={props.type}
        value={props.value}  
        onChange={e => props.onChange(e.target.value)}
        onKeyDown={e => e.key === 'Enter' 
            ? props.onPressEnter: undefined}
        />
    </label>
    );
}
*/
