import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [bairro, setBairro] = useState('Monte Verde')
const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])
const [usuarioLogado, setUsuarioLogado] = useState(false)
const [posicaoUsuario, setPosicaoUsuario] = useState('vazio')
const [posicaoUsuarioID, setPosicaoUsuarioID] = useState(null)
const [dadosUsuarioLogado, setDadosUsuarioLogado] = useState('')
const [livroAcessado, setLivroAcessado] = useState('')
const [listaResenhas, setListaResenhas] = useState([])

const [biblioteca, setBiblioteca] = useState([
    {
        capaLivro: './images/DomCasmurro.png',
        idLivro: 0,
        tituloLivro: 'Dom Casmurro',
        autorLivro: 'Machado de Assis',
        isbnLivro: '9788594318602',
        anoLivro: '1899',
        editoraLivro: 'Livraria Garnier',
        sinopseLivro: 'Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu, que, apaixonados na adolescência, têm que enfrentar um obstáculo à realização de seus anseios amorosos, pois a mãe de Bentinho, D. Glória, fez uma promessa de que seu filho seria padre. Assim, no seminário, Bentinho conhece Escobar, que se torna seu melhor amigo e encontra uma solução para o problema.',
        generoLivro: ['Romance', 'Realista'],
        resenhasLivro: [{

            nomeUsuario: '',
            resenhaUsuario: '',

        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Vidas secas',
        autorLivro: 'Graciliano Ramos',
        isbnLivro: '9788501114785',
        anoLivro: '2019',
        editoraLivro: 'Record; 159ª edição',
        sinopseLivro: 'Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos. São também acompanhados pela cachorrinha da família, Baleia. O livro denuncia fortemente as mazelas do povo brasileiro, principalmente a situação de miséria do sertão nordestino. É o romance em que Graciliano alcança o máximo da expressão que vinha buscando em sua prosa: o que impulsiona os personagens é a seca, áspera e cruel, e paradoxalmente a ligação telúrica, afetiva, que expõe naqueles seres em retirada, à procura de meios de sobrevivência e um futuro.',
        generoLivro: ['Romance'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Battle Royale',
        autorLivro: 'Koushun Takami',
        isbnLivro: '9788525056122',
        anoLivro: '2014',
        editoraLivro: 'Alt; 1ª edição',
        sinopseLivro: 'Battle Royale se passa em uma versão fictícia do Japão, apresentado como um estado policial. O estado, conhecido como a República da Grande Ásia Oriental (大東亜共和国 Dai Tōa Kyōwakoku), se originou após uma revolta populacional e sofreu uma repressão pela junção das Forças Armadas e das Forças de Polícia. De tempos em tempos, 42 alunos do 9º ano de alguma escola secundária são selecionados aleatoriamente para pegar armas e lutar entre si até que somente um sobreviva. O Programa foi criado, supostamente, como uma forma de pesquisa militar, com o resultado de cada batalha sendo transmitido na televisão.',
        generoLivro: ['Thriller psicológico', 'Ficção Científica', 'Horror'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Romeu e Julieta',
        autorLivro: 'William Shakespeare',
        isbnLivro: '9788582850404',
        anoLivro: '2016',
        editoraLivro: 'Penguin-Companhia; 1ª edição',
        sinopseLivro: 'Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano.',
        generoLivro: ['Romance', 'Drama'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Capitães de areia',
        autorLivro: 'Jorge Amado',
        isbnLivro: '9788535914061',
        anoLivro: '2009',
        editoraLivro: 'Companhia de Bolso; Edição de bolso',
        sinopseLivro: 'Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes. Várias gerações de brasileiros sofreram o impacto e a sedução desses meninos que moram num trapiche abandonado no areal do cais de Salvador, vivendo à margem das convenções sociais. Verdadeiro romance de formação, o livro nos torna íntimos de suas pequenas criaturas, cada uma delas com suas carências e suas ambições: do líder Pedro Bala ao religioso Pirulito, do ressentido e cruel Sem-Pernas ao aprendiz de cafetão Gato, do sensato Professor ao rústico sertanejo Volta Seca. Com a força envolvente da sua prosa, Jorge Amado nos aproxima desses garotos e nos contagia com seu intenso desejo de liberdade.',
        generoLivro: ['Romance', 'Realismo Crítico'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'A Cidade Sem Amanhã',
        autorLivro: 'Helena Martins',
        isbnLivro: '9788598723451',
        anoLivro: '2019',
        editoraLivro: 'Lume Editora',
        sinopseLivro: 'Em um mundo onde o tempo parou, os habitantes de uma cidade vivem presos em um único dia. Daniel, um jovem relojoeiro, descobre um antigo relógio mágico que carrega a chave para trazer o amanhã de volta. Ao tentar ativá-lo, ele enfrenta escolhas difíceis e descobre verdades sombrias sobre sua própria família. Enquanto luta contra forças que preferem manter o tempo congelado, Daniel percebe que o relógio cobra um preço alto: a vida de quem ele ama. A busca pelo amanhã se transforma em uma corrida contra o tempo para salvar não apenas o futuro, mas a humanidade inteira.',
        generoLivro: ['Ficção Científica', 'Aventura', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'As Sombras do Pântano',
        autorLivro: 'Rodrigo Salgado',
        isbnLivro: '9788543981203',
        anoLivro: '2016',
        editoraLivro: 'Estrela Negra',
        sinopseLivro: 'Em uma vila isolada cercada por um pântano sombrio, os moradores vivem com medo de ataques misteriosos que ocorrem todas as noites. Clara, uma jovem corajosa, decide investigar e descobre rastros que levam a uma antiga lenda local sobre criaturas esquecidas. Enquanto explora as profundezas do pântano, Clara descobre uma caverna secreta que guarda segredos sobre sua própria linhagem. Agora, ela deve decidir entre enfrentar as criaturas ou libertar algo ainda mais perigoso. As escolhas de Clara podem salvar a vila ou condená-la para sempre.',
        generoLivro: ['Thriller', 'Terror', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'O Último Relógio',
        autorLivro: 'Sofia Almeida',
        isbnLivro: '9788578465143',
        anoLivro: '2021',
        editoraLivro: 'Horizonte Publicações',
        sinopseLivro: 'Após um colapso global que fragmentou o fluxo do tempo, a humanidade vive em pequenas comunidades presas em "bolsões temporais". Cada bolha vive um dia específico repetidamente, sem memória do futuro ou do passado. Um grupo de viajantes, liderado pelo cientista Jonas, descobre um relógio milenar capaz de sincronizar os fragmentos do tempo. No entanto, para ativar o relógio, eles precisam atravessar territórios perigosos e enfrentar aqueles que preferem o caos ao equilíbrio. Com dilemas éticos e reviravoltas inesperadas, o futuro do tempo está em jogo.',
        generoLivro: ['Ficção Científica', 'Aventura', 'Distopia'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Sob as Estrelas Vermelhas',
        autorLivro: 'Lucas Andrade',
        isbnLivro: '9788534512876',
        anoLivro: '2018',
        editoraLivro: 'Cosmos Editora',
        sinopseLivro: 'Em um planeta distante, onde os céus são tingidos por estrelas vermelhas, duas civilizações estão à beira de um conflito devastador. Um arqueólogo, Daren, encontra um artefato antigo que revela uma profecia esquecida. Segundo a lenda, o artefato pode unir as duas raças ou destruí-las completamente. Enquanto tenta desvendar os segredos do objeto, Daren se vê envolvido em uma conspiração que ameaça a paz de todo o planeta. Com aliados inesperados e inimigos ocultos, ele precisa decidir em quem confiar antes que o tempo acabe.',
        generoLivro: ['Ficção Científica', 'Aventura', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'A Ilha dos Esquecidos',
        autorLivro: 'Mariana Ribeiro',
        isbnLivro: '9788542104923',
        anoLivro: '2020',
        editoraLivro: 'Oceanus',
        sinopseLivro: 'Um grupo de exploradores naufraga em uma ilha cercada por tempestades incessantes. Ao acordarem, percebem que suas memórias estão desaparecendo gradualmente. Sofia, a líder do grupo, tenta juntar as peças do quebra-cabeça enquanto enfrenta fenômenos inexplicáveis na ilha. Logo, eles descobrem que a ilha está viva, e cada decisão que tomam afeta suas chances de sobrevivência. Para escapar, Sofia precisa descobrir quem eles realmente são e desvendar o segredo que a ilha guarda há séculos. Porém, a verdade pode ser mais aterrorizante do que eles imaginam.',
        generoLivro: ['Ficção Científica', 'Aventura', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Ventos do Norte',
        autorLivro: 'Fernando Azevedo',
        isbnLivro: '9788564891372',
        anoLivro: '2017',
        editoraLivro: 'Ventania Editora',
        sinopseLivro: 'Durante uma era glacial que ameaça extinguir a vida no continente, uma tribo nômade precisa realizar uma jornada épica em busca de terras férteis ao norte. Liderados por Kael, um jovem caçador, eles enfrentam nevascas, feras selvagens e forças sobrenaturais que tentam impedir sua travessia. Cada passo na jornada revela segredos sobre o passado da tribo e a origem da era glacial. Kael descobre que seu destino está diretamente ligado à sobrevivência de seu povo e ao fim do inverno eterno. Mas nem todos querem que a jornada chegue ao fim.',
        generoLivro: ['Fantasia', 'Aventura', 'Épico'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'O Guardião do Labirinto',
        autorLivro: 'Ana Paula Souza',
        isbnLivro: '9788575213983',
        anoLivro: '2015',
        editoraLivro: 'Labirinto Editorial',
        sinopseLivro: 'Em um reino antigo, a princesa Lara desaparece misteriosamente dentro de um labirinto mágico. Seu irmão, Caio, decide enfrentar os perigos do lugar para resgatá-la. Enquanto avança pelos corredores cheios de armadilhas e enigmas, ele descobre que o labirinto tem vida própria e está conectado às emoções humanas. O guardião do labirinto, uma criatura lendária, revela a Caio que sua coragem será testada a cada passo. À medida que enfrenta seus próprios medos, ele percebe que o verdadeiro desafio não é resgatar sua irmã, mas salvar a si mesmo.',
        generoLivro: ['Fantasia', 'Aventura', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'A Guerra das Luzes',
        autorLivro: 'Thiago Moreira',
        isbnLivro: '9788543108944',
        anoLivro: '2022',
        editoraLivro: 'Aurora Books',
        sinopseLivro: 'Em um futuro onde a tecnologia avançada é movida por luz pura, duas nações travam uma guerra brutal. Elias, um soldado desertor, descobre planos secretos que podem destruir ambos os lados. Em sua fuga, ele encontra Alana, uma cientista que trabalha em uma tecnologia proibida capaz de interromper a guerra. Juntos, eles precisam decidir se a paz vale o sacrifício que será necessário. Com batalhas épicas, intrigas políticas e um toque de romance, essa é uma história sobre os limites da ambição humana.',
        generoLivro: ['Ficção Científica', 'Aventura', 'Política'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'O Despertar dos Dragões',
        autorLivro: 'Clara Mendes',
        isbnLivro: '9788578456123',
        anoLivro: '2013',
        editoraLivro: 'Draconis Editora',
        sinopseLivro: 'Quando os dragões começam a acordar de um sono milenar, um reino precisa decidir se eles serão aliados ou inimigos na luta contra uma invasão iminente. Com o ressurgir dessas criaturas míticas, antigas rivalidades entre clãs e raças começam a emergir. O destino do reino parece incerto enquanto uma jovem guerreira se vê escolhida como mediadora entre os humanos e os dragões. Ela deve aprender a controlar os poderes recém-descobertos enquanto enfrenta traições dentro de seu próprio povo. Com o avanço da invasão, a linha entre aliados e inimigos começa a se desfocar, e a jovem precisará tomar decisões que definirão o futuro de todas as criaturas envolvidas.',
        generoLivro: ['Fantasia', 'Aventura', 'Épico'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'No Coração do Abismo',
        autorLivro: 'Carlos Henrique',
        isbnLivro: '9788582397645',
        anoLivro: '2021',
        editoraLivro: 'Abismo Editorial',
        sinopseLivro: 'Uma equipe de cientistas explora uma fenda no fundo do oceano e descobre uma civilização submersa que guarda segredos que podem mudar a história da humanidade. Enquanto buscam respostas sobre a origem dessa civilização perdida, eles se deparam com perigos inesperados, como criaturas marinhas desconhecidas e uma rede de mistérios que os próprios habitantes da cidade submersa protegeram ao longo dos milênios. À medida que as descobertas se intensificam, a equipe começa a perceber que os segredos que estão revelando podem ter implicações catastróficas para a superfície. Agora, eles terão que escolher entre salvar o que resta da humanidade ou manter a paz com as criaturas ancestrais que habitam as profundezas do oceano.',
        generoLivro: ['Ficção Científica', 'Mistério', 'Aventura'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'A Lenda do Guardião Prateado',
        autorLivro: 'Bruno Silva',
        isbnLivro: '9788563124905',
        anoLivro: '2018',
        editoraLivro: 'Prata Editora',
        sinopseLivro: 'Um artefato mágico foi roubado, e cabe ao guardião prateado, último de sua ordem, recuperá-lo antes que caia nas mãos erradas. O artefato, uma relíquia antiga que detém o poder de controlar as forças da natureza, está em posse de uma organização secreta que visa usá-lo para tomar o controle do reino. O guardião, com habilidades extraordinárias e um código de honra imutável, parte em uma jornada perigosa por terras desconhecidas. No caminho, ele fará alianças improváveis, enfrentará traições e descobrirá que a verdadeira ameaça ao reino não é apenas o artefato, mas a corrupção crescente entre os próprios líderes. Em um mundo onde a magia é tão poderosa quanto perigosa, o guardião precisará fazer sacrifícios que testarão seus próprios limites.',
        generoLivro: ['Fantasia', 'Aventura', 'Magia'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Chamas Eternas',
        autorLivro: 'Larissa Castro',
        isbnLivro: '9788549654125',
        anoLivro: '2020',
        editoraLivro: 'Fênix Editorial',
        sinopseLivro: 'Um mundo que depende de chamas mágicas para sobreviver enfrenta o caos quando o fogo começa a se apagar. Uma jovem alquimista, dotada de uma habilidade rara, é chamada para investigar a causa desse misterioso apagamento. Conforme ela e sua equipe se aprofundam nos estudos, descobrem que a perda das chamas está ligada a um poder obscuro que se esconde nas sombras do reino. A jovem alquimista deve enfrentar forças desconhecidas que buscam destruir o equilíbrio entre a magia e a natureza. Ela precisará dominar novas habilidades, fazer escolhas difíceis e enfrentar seus próprios demônios internos enquanto corre contra o tempo para salvar a sua terra antes que as chamas se apaguem para sempre.',
        generoLivro: ['Fantasia', 'Aventura', 'Mistério'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'O Código do Caos',
        autorLivro: 'Rafael Lima',
        isbnLivro: '9788576893142',
        anoLivro: '2019',
        editoraLivro: 'Código Editorial',
        sinopseLivro: 'Um hacker brilhante descobre um algoritmo que pode prever o futuro, mas cada uso do código traz consequências imprevisíveis e catastróficas. Quando ele se envolve com uma organização secreta que busca usar o código para alterar o curso da história, ele começa a questionar até onde pode ir para evitar que o futuro se torne ainda mais caótico. À medida que o algoritmo começa a mostrar resultados cada vez mais distorcidos, ele se vê preso em uma rede de mentiras, conspirações e jogos de poder. Agora, ele deve encontrar uma maneira de parar o uso do código antes que o caos se espalhe irreversivelmente, enquanto tenta salvar sua própria vida das forças que querem controlar o futuro.',
        generoLivro: ['Ficção Científica', 'Suspense', 'Tecnologia'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'A Ponte do Destino',
        autorLivro: 'Camila Farias',
        isbnLivro: '9788595463129',
        anoLivro: '2021',
        editoraLivro: 'Destino Publicações',
        sinopseLivro: 'Duas cidades separadas por uma ponte mágica têm seus destinos entrelaçados. Quando a ponte desaparece, dois jovens de lados opostos precisam se unir para restaurá-la. A ponte, um vínculo vital entre os dois mundos, foi construída por antigos seres místicos e mantém o equilíbrio entre as cidades. No entanto, uma força desconhecida começa a corromper as energias que a sustentam. Um jovem de uma das cidades é destinado a proteger a ponte, enquanto a jovem de outra cidade, desconhecedora de seu papel, se vê puxada para uma trama que pode destruir a própria estrutura do destino. Juntos, eles devem aprender a lidar com poderes que vão além da sua compreensão enquanto buscam restaurar a ponte e manter o equilíbrio entre os mundos.',
        generoLivro: ['Fantasia', 'Romance', 'Aventura'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    },
    {
        capaLivro: '',
        tituloLivro: 'Sombras na Neve',
        autorLivro: 'Eduardo Pires',
        isbnLivro: '9788534978123',
        anoLivro: '2020',
        editoraLivro: 'Tempestade Editorial',
        sinopseLivro: 'Em uma vila coberta por neve eterna, estranhas sombras começam a aparecer. Um caçador, conhecido por suas habilidades excepcionais, é chamado para investigar o que está acontecendo. Ao longo de sua jornada, ele descobre que as sombras são apenas a ponta do iceberg, e que forças antigas, adormecidas sob a neve, estão começando a se reerguer. Essas forças não são apenas sobrenaturais, mas também humanas, já que a vila esconde segredos que muitos preferem manter enterrados. O caçador precisará confrontar os terrores tanto da natureza quanto de sua própria linhagem enquanto luta para proteger o povo da vila e resolver o mistério por trás das sombras que ameaçam destruir tudo o que ele conhece.',
        generoLivro: ['Suspense', 'Mistério', 'Aventura'],
        resenhasLivro: [{
            nomeUsuario: '',
            resenhaUsuario: '',
        }],
    }
    
])

    return(
        <GlobalContext.Provider value={{bairro, setBairro, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado, posicaoUsuario, setPosicaoUsuario, posicaoUsuarioID, setPosicaoUsuarioID, dadosUsuarioLogado, setDadosUsuarioLogado, biblioteca, setBiblioteca, livroAcessado, setLivroAcessado}}>
            {children}
        </GlobalContext.Provider>
    )
}
