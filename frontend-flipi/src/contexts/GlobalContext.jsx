import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
/* let bairro = 'Monte Verde' */

const [bairro, setBairro] = useState('Monte Verde')
const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])
const [usuarioLogado, setUsuarioLogado] = useState(false)
const [posicaoUsuario, setPosicaoUsuario] = useState('vazio')
const [posicaoUsuarioID, setPosicaoUsuarioID] = useState(null)
const [dadosUsuarioLogado, setDadosUsuarioLogado] = useState('')

    return(
        <GlobalContext.Provider value={{bairro, setBairro, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado, posicaoUsuario, setPosicaoUsuario, posicaoUsuarioID, setPosicaoUsuarioID, dadosUsuarioLogado, setDadosUsuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}
