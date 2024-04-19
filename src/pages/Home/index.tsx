import './styles.css';
import ContentCard from '../../components/ContentCard';
import ContentSection from '../../components/ContentSection';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import CardTitle from '../../components/CardTitle';
import CardSubTitle from '../../components/CardSubTitle';
import Paragraph from '../../components/Paragraph';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import IconBox from '../../components/IconBox';
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiAdobeillustrator, SiGimp, SiBlender, SiSketchup  } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { Link } from 'react-router-dom';
import ImgBox from '../../components/ImgBox';
import IfoodThumb from '../../assets/img/ifood-thumb.png';
import XGStoreThumb from '../../assets/img/thumb-xbox-store.png';
import ToDoTaskerThumb from '../../assets/img/tasker-thumb.png';
import ToDoListThumb from '../../assets/img/to-do-thumb.png';
import ChaveiroGelsonThumb from '../../assets/img/chaveiro-gelson.png';
import { SiFirebase } from "react-icons/si";


const Home = () => {
    const [activeTopic, setActiveTopic] = useState('to-about');

    useEffect(() => {
        const handleScroll= () => {
            
            let activeTopicSection:string = '';
            const topicSection = document.querySelectorAll('.topic-section');
            
            topicSection.forEach(topic => {
                const topicRect: DOMRect = topic.getBoundingClientRect();
                const topicTop: number = topicRect.top;
                const windowHeight: number = window.innerHeight;

                if (topicTop < (windowHeight/4.5)) {
                    activeTopicSection = `to-${topic.id}`
                };
            })

            setActiveTopic(activeTopicSection);
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <>
            <ContentCard id='start-menu'>
                <ContentSection id='nav-title'>
                    <ImgBox src='./src/assets/img/logo-lucas.png' alt='logo' imgClassName='general-logo'></ImgBox>
                    <ContentSection id='title-menu'>
                        <Title id='general-title'>Lucas Gonçalves</Title>
                        <SubTitle id='general-subtitle'>Dev. Front-End Júnior</SubTitle>
                    </ContentSection>
                </ContentSection>
                <ContentSection id='topics'>
                    <HashLink
                    smooth
                    to='#about'
                    className={`topic-link ${('to-about' === activeTopic)
                    ?'topic-color'
                    :''}`}
                    id='to-about'>Sobre Mim</HashLink>

                    <HashLink
                    smooth
                    to='#skills'
                    className={`topic-link ${('to-skills' === activeTopic)
                    ?'topic-color'
                    :''}`}
                    id='to-skills'>Minhas Habilidades</HashLink>

                    <HashLink
                    smooth
                    to='#education'
                    className={`topic-link ${('to-education' === activeTopic)
                    ?'topic-color'
                    :''}`}
                    id='to-education'>Minha Formação</HashLink>

                    <HashLink
                    smooth
                    to='#projects'
                    className={`topic-link ${('to-projects' === activeTopic)
                    ?'topic-color'
                    :''}`}
                    id='to-projects'>Meus Projetos</HashLink>

                </ContentSection>
            </ContentCard>

            <ContentSection id='content-display'>
                <ContentCard className='topic-section' id="about">
                    <CardTitle className='topic-titles'>Sobre Mim</CardTitle>
                    <CardSubTitle className='topic-subtitle'>
                        Apresentação
                    </CardSubTitle>
                    <Paragraph className='topic-paragraph'>
                    Sou um desenvolvedor front-end originário de Pelotas, RS. Iniciei minha trajetória como técnico em edificações, seguindo para a graduação em arquitetura e urbanismo, porém minha verdadeira paixão sempre foi a tecnologia.
                    </Paragraph>
                    <Paragraph className='topic-paragraph'>
                    Ao longo da minha trajetória descobri a capacidade de transformar desafios em oportunidades. Explorando, por exemplo, o mundo da impressão 3D por conta própria, descobri novas dimensões de autonomia e resolução de problemas.
                    </Paragraph>
                    <Paragraph className='topic-paragraph'>
                    Atualmente, estou comprometido em aplicar noções adquiridas na arquitetura, como a interpretação de desafios multidisciplinares, para o desenvolvimento front-end. Busco sempre perspectivas inovadoras, mas com soluções práticas e acuradas para os projetos em que me envolvo.
                    </Paragraph>
                    <Paragraph className='topic-paragraph'>
                    Já tive a oportunidade de participar de cursos como a introdução ao desenvolvimento web, através da Faculdade Descomplica, recentemente sendo aprovado em uma concorrida seleção para cursar Desenvolvimento Front-end junto à Ada.Tech.
                    </Paragraph>
                    <Paragraph className='topic-paragraph'>
                    Me considero curioso por natureza, valorizando muito o generalismo. Sou capaz de desenvolver fazendo uso de tecnologias como HTML5, CSS3, JavaScript, além de bibliotecas e frameworks como React e BootStrap.
                    </Paragraph>
                </ContentCard>
                
                <ContentCard className='topic-section' id="skills" >
                    <CardTitle className='topic-titles'>Minhas Habilidades</CardTitle>
                    <ContentSection>

                        <CardSubTitle className='topic-subtitle'>Em Estudo</CardSubTitle>

                        <ContentSection className='skills-display'>
                                <Link to='https://react.dev/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='React.js' iconSize='3rem'>
                                        <FaReact />
                                    </IconBox>
                                </Link>

                                <Link to='https://www.typescriptlang.org/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='TypeScript' iconSize='3rem'>
                                        <SiTypescript />
                                    </IconBox>
                                </Link>

                                <Link to='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='JavaScript' iconSize='3rem'>
                                    <SiJavascript />
                                    </IconBox>
                                </Link>

                                <Link to='https://getbootstrap.com/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='BootStrap' iconSize='3rem'>
                                        <BsBootstrapFill />
                                    </IconBox>
                                </Link>

                                <Link to='https://firebase.google.com/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='Firebase' iconSize='3rem'>
                                        <SiFirebase />
                                    </IconBox>
                                </Link>

                        </ContentSection>

                        <CardSubTitle className='topic-subtitle'>Consolidadas</CardSubTitle>

                        <ContentSection className='skills-display'>

                                <Link to='https://html.spec.whatwg.org/multipage/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='HTML5' iconSize='3rem'>
                                        <SiHtml5 />
                                    </IconBox>
                                </Link>

                                <Link to='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='CSS3' iconSize='3rem'>
                                        <SiCss3 />
                                    </IconBox>
                                </Link>

                                <Link to='https://git-scm.com/' target='_blank'>
                                    <IconBox className='skill-iconbox' caption='Git' iconSize='3rem'>
                                        <FaGitSquare />
                                    </IconBox>
                                </Link>

                        </ContentSection>

                        <CardSubTitle className='topic-subtitle'>Outras</CardSubTitle>

                        <ContentSection className='skills-display'>

                            <Link to='https://www.figma.com/' target='_blank'>
                                <IconBox className='skill-iconbox' caption='Figma' iconSize='3rem'>
                                    <IoLogoFigma />
                                </IconBox>
                            </Link>

                            <Link to='https://www.adobe.com/br/creativecloud/renew/resubscribe-cci.html?sdid=12B9F15P&mv=search&ef_id=1c77229020b4157ab0db4480902e6649:G:s&s_kwcid=AL!3085!10!79164964787016!79165231641143&msclkid=1c77229020b4157ab0db4480902e6649' target='_blank'>
                                <IconBox className='skill-iconbox' caption='Illustrator' iconSize='3rem'>
                                    <SiAdobeillustrator />
                                </IconBox>
                            </Link>

                            <Link to='https://www.gimp.org/' target='_blank'>
                                <IconBox className='skill-iconbox' caption='Gimp' iconSize='3rem'>
                                    <SiGimp />
                                </IconBox>
                            </Link>

                            <Link to='https://www.blender.org/' target='_blank'>
                                <IconBox className='skill-iconbox' caption='Blender' iconSize='3rem'>
                                    <SiBlender />
                                </IconBox>
                            </Link>

                            <Link to='https://www.sketchup.com' target='_blank' >
                                <IconBox className='skill-iconbox' caption='Sketchup' iconSize='3rem'>
                                    <SiSketchup />
                                </IconBox>
                            </Link>
                        </ContentSection>

                    </ContentSection>
                </ContentCard>

                <ContentCard className='topic-section' id="education" >
                    <CardTitle className='topic-titles'>Minha Formação</CardTitle>
                    <CardSubTitle className='topic-subtitle'>Formação Acadêmica</CardSubTitle>

                    <ContentSection className='education-display'>
                        <ContentCard className='educational-card'>
                            <CardSubTitle className='educational-card-title'>Arquitetura e Urbanismo</CardSubTitle>
                            <CardSubTitle className='educational-card-subtitle'>Nível: Graduação</CardSubTitle>
                            <Paragraph>Instituição: UFPel</Paragraph>
                            <Paragraph>Conclusão: Janeiro/2023</Paragraph>
                        </ContentCard>
                        
                        <ContentCard className='educational-card'>
                            <CardSubTitle className='educational-card-title'>Técnico em Edificações</CardSubTitle>
                            <CardSubTitle className='educational-card-subtitle'>Nível: Técnico</CardSubTitle>
                            <Paragraph>Instituição: IFSul - Campus Pelotas</Paragraph>
                            <Paragraph>Conclusão: Janeiro/2023</Paragraph>
                        </ContentCard>
                    </ContentSection>

                    <CardSubTitle className='topic-subtitle'>Cursos Livres</CardSubTitle>

                    <ContentSection className='education-display'>
                        <ContentCard className='educational-card'>
                            <CardSubTitle className='educational-card-title'>Vem Ser Tech</CardSubTitle>
                            <CardSubTitle className='educational-card-subtitle'>Nível: Formação Livre</CardSubTitle>
                            <Paragraph>Instituição: Ada.Tech</Paragraph>
                            <Paragraph>Conclusão: Março/2024</Paragraph>
                        </ContentCard>
                    
                        <ContentCard className='educational-card'>
                            <CardSubTitle className='educational-card-title'>Introdução ao Desenvolvimento Web</CardSubTitle>
                            <CardSubTitle className='educational-card-subtitle'>Nível: Formação Livre</CardSubTitle>
                            <Paragraph>Instituição: Faculdade Descomplica</Paragraph>
                            <Paragraph>Conclusão: Agosto/2023</Paragraph>
                        </ContentCard>
                    </ContentSection>

                </ContentCard>
                
                <ContentCard className='topic-section' id="projects" >

                    <CardTitle className='topic-titles'>Meus Projetos</CardTitle>

                    <ContentCard className='project-card'>
                        <CardTitle className='project-title'>Ifood Landing Page</CardTitle>
                        <ContentSection className='project-general'>
                            <ContentSection className='project-subsection'>
                                <ImgBox src={ IfoodThumb } alt='Ifood Thumb' imgClassName='project-thumb' figClassName='project-figure'>

                                    <Link to='https://lukesgon.github.io/ifood-project-page/' target='_blank' className='project-links'>Deploy</Link>
                                    
                                    <Link to='https://github.com/lukesgon/ifood-project-page' target='_blank' className='project-links'>Code</Link>

                                </ImgBox>
                            </ContentSection>

                            <ContentSection>
                                <Paragraph className='tecs-p'>Este projeto foi desenvolvido durante a trilha de Desenvolvimento Front-End do curso Ada.Tech.</Paragraph>
                                <Paragraph className='tecs-p'>A proposta deste exercício, era a emulação de uma landing page para o Ifood, contando com o uso de tecnologias essenciais para o desenvolvimento front-end, como HTML e CSS.</Paragraph>
                                <Paragraph className='tecs-p'>Seguindo um padrão de página única, também conhecido como SPA, a ideia foi criar uma estrutura responsiva, que servisse para o desenvolvimento de técnicas fundamentais de desenvolvimento.</Paragraph>
                                <Paragraph className='tecs-p'>É importante destacar ainda, sua característica estática, visto que o exercício foi realizado sem a adoção de JavaScript em seu desenvolvimento.</Paragraph>

                            </ContentSection>

                            <ContentSection>
                                <CardSubTitle className='tecs-subtitle'>Tecnologias Utilizadas</CardSubTitle>

                                <ContentSection className='used-tecs'>
                                    <IconBox className='tec-iconbox' caption='HTML5' iconSize='1.6rem'>
                                        <SiHtml5 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='CSS3' iconSize='1.6rem'>
                                        <SiCss3 />
                                    </IconBox>

                                </ContentSection>
                            </ContentSection>
                        </ContentSection>
                    </ContentCard>

                    <ContentCard className='project-card'>
                        <CardTitle className='project-title'>Xbox Game Store</CardTitle>
                        <ContentSection className='project-general'>
                            <ContentSection className='project-subsection'>
                                <ImgBox src={ XGStoreThumb } alt='Ifood Thumb' imgClassName='project-thumb' figClassName='project-figure'>
                                
                                <Link to='https://lukesgon.github.io/xgstore/' target='_blank' className='project-links'>Deploy</Link>
                                
                                <Link to='https://github.com/lukesgon/xgstore' target='_blank' className='project-links'>Code</Link>
                                </ImgBox>

                            </ContentSection>

                            <ContentSection>
                                <Paragraph className='tecs-p'>Este projeto foi desenvolvido durante a trilha de Desenvolvimento Front-End do curso Ada.Tech.</Paragraph>
                                <Paragraph className='tecs-p'>A proposta aqui foi a utilização dos fundamentos do JavaScript para a criação de uma página dinâmica, neste caso a simulação de um E-Commerce.</Paragraph>
                                <Paragraph className='tecs-p'>Devido a natureza introdutória deste projeto, diversas funções relativas a gestão do carrinho de compras não foram desenvolvidas, mas houve enfoque especial na representação das categorias de produtos da loja.</Paragraph>

                            </ContentSection>

                            <ContentSection>
                                <CardSubTitle className='tecs-subtitle'>Tecnologias Utilizadas</CardSubTitle>

                                <ContentSection className='used-tecs'>
                                    <IconBox className='tec-iconbox' caption='HTML5' iconSize='1.6rem'>
                                        <SiHtml5 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='CSS3' iconSize='1.6rem'>
                                        <SiCss3 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='JavaScript' iconSize='1.6rem'>
                                        <SiJavascript />
                                    </IconBox>

                                </ContentSection>
                            </ContentSection>
                        </ContentSection>
                    </ContentCard>

                    <ContentCard className='project-card'>
                        <CardTitle className='project-title'>To-do Tasker</CardTitle>
                        <ContentSection className='project-general'>
                            <ContentSection className='project-subsection'>
                                <ImgBox src={ ToDoTaskerThumb } alt='To-do Tasker' imgClassName='project-thumb' figClassName='project-figure'>
                                <Link to='https://lukesgon.github.io/todo-tasker/' target='_blank' className='project-links'>Deploy</Link>

                                <Link to='https://github.com/lukesgon/todo-tasker' target='_blank' className='project-links'>Code</Link>
                                </ImgBox>
                            </ContentSection>

                            <ContentSection>

                                <Paragraph className='tecs-p'>Este projeto foi desenvolvido durante o módulo inicial de JavaScript, da trilha de Front-End do curso Ada.Tech</Paragraph>
                                
                                <Paragraph className='tecs-p'>Com proposta inicial de desenvolvimento apenas da lógica por trás de um sistema de gerenciamento de tarefas, o projeto ganhou uma proporção maior que a esperada, contando ainda com o desenvolvimento inicial de sua interface gráfica.</Paragraph>

                                <Paragraph className='tecs-p'>O projeto conta ainda com uma interface simplificada, possibilitando a adição, edição, conclusão e exclusão de tarefas, mas sem um modo persistente de salvamento das tarefas. </Paragraph>

                            </ContentSection>

                            <ContentSection>
                                <CardSubTitle className='tecs-subtitle'>Tecnologias Utilizadas</CardSubTitle>

                                <ContentSection className='used-tecs'>
                                    <IconBox className='tec-iconbox' caption='HTML5' iconSize='1.6rem'>
                                        <SiHtml5 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='CSS3' iconSize='1.6rem'>
                                        <SiCss3 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='JavaScript' iconSize='1.6rem'>
                                        <SiJavascript />
                                    </IconBox>

                                </ContentSection>
                            </ContentSection>
                        </ContentSection>
                    </ContentCard>

                    <ContentCard className='project-card'>
                        <CardTitle className='project-title'>To-Do List</CardTitle>
                        <ContentSection className='project-general'>
                            <ContentSection className='project-subsection'>
                                <ImgBox src={ ToDoListThumb } alt='To-do Tasker' imgClassName='project-thumb' figClassName='project-figure'>
                                <Link to='https://lukesgon.github.io/to-doList/' target='_blank' className='project-links'>Deploy</Link>

                                <Link to='https://github.com/lukesgon/to-doList' target='_blank' className='project-links'>Code</Link>
                                </ImgBox>
                            </ContentSection>

                            <ContentSection>
                                <Paragraph className='tecs-p'>Outro projeto desenvolvido durante a trilha de Front-End da Ada.Tech, mas com um diferencial: Neste projeto o trabalho foi desenvolvido em grupo.</Paragraph>
                                <Paragraph className='tecs-p'>Contando com a colaboração dos colegas <Link className='link-coop-profile' to='https://www.linkedin.com/in/wild-barreto/' target='_blank'>Wild Barreto</Link> e <Link className='link-coop-profile' to='https://www.linkedin.com/in/rodrigo-carvalho-06dk/' target='_blank'>Rodrigo Carvalho</Link>, o projeto foi pensado como uma aplicação web.</Paragraph>
                                <Paragraph className='tecs-p'>Apresentando um gerenciador de tarefas mais avançado, o projeto conta com o uso de localStorage para a persistência de dados, além de uma função de monitoramento para alterações no localStorage, mantendo o DOM sempre atualizado a cada alteração.</Paragraph>

                            </ContentSection>

                            <ContentSection>
                                <CardSubTitle className='tecs-subtitle'>Tecnologias Utilizadas</CardSubTitle>

                                <ContentSection className='used-tecs'>
                                    <IconBox className='tec-iconbox' caption='HTML5' iconSize='1.6rem'>
                                        <SiHtml5 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='CSS3' iconSize='1.6rem'>
                                        <SiCss3 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='JavaScript' iconSize='1.6rem'>
                                        <SiJavascript />
                                    </IconBox>

                                </ContentSection>
                            </ContentSection>
                        </ContentSection>
                    </ContentCard>

                    <ContentCard className='project-card'>
                        <CardTitle className='project-title'>Chaveiro Gelson - Landing Page</CardTitle>
                        <ContentSection className='project-general'>
                            <ContentSection className='project-subsection'>
                                <ImgBox src={ ChaveiroGelsonThumb } alt='To-do Tasker' imgClassName='project-thumb' figClassName='project-figure'>
                                <Link to='https://chaveirogelson.com.br/' target='_blank' className='project-links'>Deploy</Link>

                                </ImgBox>
                            </ContentSection>

                            <ContentSection>
                                <Paragraph className='tecs-p'>
                                    Este foi meu primeiro projeto comercial. A proposta era, além de apresentar uma página que funcionasse como cartão de visitas, contasse ainda com um sistema de solicitação de orçamentos.
                                    </Paragraph>
                                <Paragraph className='tecs-p'>
                                    Pensando na questão do orçamento, o cliente solicitou que um menu de cartões fosse criado, onde em poucos passos o cliente pudesse gerar uma mensagem direcionada ao WhatsApp da empresa, contando todas as informações essenciais para o orçamento.
                                    </Paragraph>
                                <Paragraph className='tecs-p'>
                                    O resultado obtido foi a criação de um sistema de cartões responsivo, o qual permite não apenas a criação da solicitação de orçamento, mas também a revisão da solicitação antes de sua conclusão.
                                </Paragraph>

                            </ContentSection>

                            <ContentSection>
                                <CardSubTitle className='tecs-subtitle'>Tecnologias Utilizadas</CardSubTitle>

                                <ContentSection className='used-tecs'>
                                    <IconBox className='tec-iconbox' caption='HTML5' iconSize='1.6rem'>
                                        <SiHtml5 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='CSS3' iconSize='1.6rem'>
                                        <SiCss3 />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='JavaScript' iconSize='1.6rem'>
                                        <SiJavascript />
                                    </IconBox>

                                    <IconBox className='tec-iconbox' caption='Firebase' iconSize='1.6rem'>
                                        <SiFirebase />
                                    </IconBox>

                                </ContentSection>
                            </ContentSection>
                        </ContentSection>
                    </ContentCard>

                </ContentCard>

            </ContentSection>
        </>
    )
};

export default Home;