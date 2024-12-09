import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./TelaUsuarioConfigs.css"
import{ GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import IconUserCircle from "../components/IconUserCircle"
import ResenhasConfigs from "../components/ResenhasConfigs"
import NavbarVertical from "../components/NavbarVertical"
import axios from "axios"


function TelaUsuarioConfigs() {

  const {posicaoUsuario, setPosicaoUsuario, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado}=useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect (() => {

    if(usuarioLogado == false){

      alert('Não há usuário logado, por favor, cadastre-se ou entre na sua conta.')
      navigate('/landingpage')
    }

  }, [])

  function deslogarUsuario(){

    alert('Até mais!')
    setUsuarioLogado(false)
    setPosicaoUsuario(null)
    navigate('/landingpage')

  }

  useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3000/usuario'); // Faz a requisição para o backend
                setVetorObjetosUsuarios(response.data); // Atualiza o vetor de usuários com os dados do backend
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        fetchUsuarios();
    }, [setVetorObjetosUsuarios]);




  return (
    <div className="usuarioConfigs-container">

      <div className="usuarioConfigs-div-esquerda">



      </div>

      <div className="usuarioConfigs-body">
        
        
        

        <div className="usuarioConfigs-body-cima">

        </div>

        <div className="usuarioConfigs-body-meio">

          <div className="usuarioConfigs-body-meio-papel">

            <div className="usuarioConfigs-body-meio-papel-conta">

              <div className="usuarioConfigs-bmpc-titulo">

                <label className="lbl-titulos">Configurações de usuário</label>
                <IconUserCircle/>
                <label className="lbl-nome-usuario" >{vetorObjetosUsuarios[posicaoUsuario].usuario_nome}</label>

              </div>

              <div className="usuarioConfigs-bmpc-infos">

              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].usuario_apelido}</label>
              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].usuario_email}</label>
              <label className="lbl-infos" >{vetorObjetosUsuarios[posicaoUsuario].usuario_senha}</label>

                <input type="text" className="input" placeholder="Edite seu nome completo" />
                <input type="text" className="input" placeholder="Edite seu email" />
                <input type="text" className="input" placeholder="Edite sua senha" />
              </div>

              {/* <div className="usuarioConfigs-bmpc-inputs">

              </div> */}

              <div className="usuarioConfigs-bmpc-buttons">

                <button className="btn">Editar dados</button>
                <button className="btn" onClick={deslogarUsuario} >Deslogar</button>
                <button className="btn btn-delete">Apagar conta</button>
              </div>

            </div>

            <div className="usuarioConfigs-body-meio-papel-resenhas">

              <div className="usuarioConfigs-bmpr-titulo">

                <label className="lbl-titulos">Minha resenhas</label>
                {/* <label className="lbl-titulos">Minhas resenhas</label> */}

              </div>

              <div className="usuarioConfigs-bmpr-body">
                
              <ResenhasConfigs/><ResenhasConfigs/><ResenhasConfigs/><ResenhasConfigs/>
              </div>

          

            </div>

          </div>

        </div>

        <div className="usuarioConfigs-body-baixo">

        </div>

      </div>

      <div className="usuarioConfigs-navbar-container">
     
      <NavbarVertical />
      </div>
      
    </div>
  )
}

export default TelaUsuarioConfigs