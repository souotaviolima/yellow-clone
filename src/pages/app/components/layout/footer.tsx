import React, { useState } from 'react'

import {
  FacebookSquare,
  Instagram,
  Whatsapp
} from '@styled-icons/boxicons-logos'

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: 'var(--theme-grey-background)' }}
    >
      <div className="footer-container container-xxl mg-t-5 mg-b-5 pd-t-5 pd-b-5">
        <div className="column-6 col-12">
          <div className="content">
            {' '}
            <nav>
              <ul className="content-row pd-b-4 pd-t-4">
                <li className="btn-s-2 pd-r-2">
                  <Whatsapp fill="#575b61" size="35px" />
                </li>
                <li className="btn-s-2 pd-r-2">
                  <FacebookSquare fill="#575b61" size="35px" />
                </li>

                <li className="btn-s-2 pd-r-2">
                  <Instagram fill="#575b61" size="35px" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="column-6 col-12">
          <div className="content">
            <nav className="footer-nav">
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Institucional</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Agendamento Online</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Onde Estamos</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Sobre a GiOlaser</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Nosso Grupo</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Seja um Franqueado</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Contato</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Trabalhe Conosco</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Tratamentos</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Depilação a Laser</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Tratamentos Faciais</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Tratamentos Corporais</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Contatos</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">(84) 9.9619.1917</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">
                      Av. Romualdo Galvão, 138 A Barro vermelho - Natal/RN
                    </a>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }} />
      <div
        className="footer-copyright"
        style={{
          borderTop: '1px solid #dddddd',
          backgroundColor: 'var(--theme-grey-background)'
        }}
      >
        <div className="footer-container container-xxl pd-t-5 pd-b-5">
          <div className="column-6 col-12">
            <div className="content footer-copyright-text responsive-align">
              <small>
                <b style={{ color: '#000', fontWeight: 900, marginRight: 5 }}>
                  24.891.593/0001-91
                </b>
                | AMO NEGOCIOS E SERVIÇO EIRELI | TODOS OS DIREITOS RESERVADOS
              </small>
            </div>
          </div>
          <div className="column-6 col-12">
            <div className="content footer-copyright-text responsive-align">
              <small>
                <b style={{ color: '#606060', fontWeight: 900 }}>
                  Agende sua avaliação grátis
                </b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
