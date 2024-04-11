import NavBar from "../../components/NavBar";
import "./styles.css";
import "../../components/Link/styles.css"
import { Link, Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState } from "react";
import Button from "../../components/Button";
import ContentSection from "../../components/ContentSection";
import ContentCard from "../../components/ContentCard";
import CardTitle from "../../components/CardTitle";
import CardSubTitle from "../../components/CardSubTitle";
import ImgBox from "../../components/ImgBox";
import Linkedin from "../../assets/linkedin-rounded-svgrepo-com.svg";
import GitHub from "../../assets/github-142-svgrepo-com.svg";
import Instagram from "../../assets/instagram-svgrepo-com.svg";
import Email from "../../assets/email-svgrepo-com.svg";
import WhatsApp from "../../assets/whatsapp-128-svgrepo-com.svg";
import Phone from "../../assets/phone-svgrepo-com.svg";
import { HashLink } from "react-router-hash-link";

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <NavBar id='nav-bar'>
        <HashLink to='/#'className='nav-button'>Início
        </HashLink>
        <Button onClick={(event) => handleClick(event)} className="nav-button">
          Contato
        </Button>
      </NavBar>
      <Outlet />

      { isOpen && createPortal(
          <ContentSection
            className="portal-section"
            onClick={(event) => handleClick(event)}
          >
            <ContentCard className="contact-card">
              <CardTitle id='contact-title'>Canais de Contato</CardTitle>
              <ContentSection className="contact-section">

                <ContentSection className="contact-subsection"
                >
                  <CardSubTitle>Minhas Redes</CardSubTitle>
                  <ContentSection className="contact-channels">
                    <Link to="https://www.linkedin.com/in/lucasdasgoncalves/"
                    className="card-button"
                    target="_blank" rel="noopener noreferrer">
                      <ContentCard className='contact-access'>
                        <ImgBox
                          imgClassName="contact-logo"
                          figClassName="contact-figure"
                          src={ Linkedin }
                          alt="Linkedin Logo"
                        >
                          LinkedIn
                        </ImgBox>
                      </ContentCard>
                    </Link>
                    <Link to="https://github.com/lukesgon"
                      className="card-button"
                      target="_blank" rel="noopener noreferrer">
                      <ContentCard className='contact-access'>
                        <ImgBox
                          imgClassName="contact-logo"
                          figClassName="contact-figure"
                          src={  GitHub }
                          alt="GitHub Logo"
                        >
                          GitHub
                        </ImgBox>
                    </ContentCard>
                    </Link>
                    <Link to="https://www.instagram.com/lukesgon/"
                      className="card-button"
                      target="_blank" rel="noopener noreferrer">
                      <ContentCard className='contact-access'>
                        <ImgBox
                          imgClassName="contact-logo"
                          figClassName="contact-figure"
                          src={ Instagram }
                          alt="Instagram Logo"
                        >
                          Instagram
                        </ImgBox>
                      </ContentCard>
                    </Link>
                  </ContentSection>
                </ContentSection>

                <ContentSection className='contact-subsection'>
                  <CardSubTitle>Outros Canais</CardSubTitle>
                  <ContentSection className="contact-channels">
                  
                  <Link to="mailto:lucasdasgoncalves@gmail.com"
                      className="card-button"
                      target="_blank" rel="noopener noreferrer">
                    <ContentCard className='contact-access'>
                      <ImgBox
                        imgClassName="contact-logo"
                        figClassName="contact-figure"
                        src={ Email }
                        alt="E-mail Logo"
                      >
                        E-mail
                      </ImgBox>
                    </ContentCard>
                    </Link>

                    <Link to="https://wa.me/+5553984688644"
                      className="card-button"
                      target="_blank" rel="noopener noreferrer">
                      <ContentCard className='contact-access'>
                        <ImgBox
                          imgClassName="contact-logo"
                          figClassName="contact-figure"
                          src={ WhatsApp }
                          alt="WhatsApp Logo"
                        >
                          WhatsApp
                        </ImgBox>
                      </ContentCard>
                    </Link>

                    <Link to="tel:+5553984688644"
                      className="card-button"
                      >
                      <ContentCard className='contact-access'>
                        <ImgBox
                          imgClassName="contact-logo"
                          figClassName="contact-figure"
                          src={ Phone }
                          alt="Phone Logo"
                        >
                          Telefone
                        </ImgBox>
                      </ContentCard>
                    </Link>

                  </ContentSection>
                </ContentSection>
              </ContentSection>
            </ContentCard>
          </ContentSection>,
          document.body
        ) }
    </>
  );
};

export default Root;
