import React, { useState } from 'react'

import {
  FacebookSquare,
  Pinterest,
  Twitter,
  Youtube,
  Instagram,
  Behance
} from '@styled-icons/boxicons-logos'

import { Vk } from '@styled-icons/icomoon'

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
                <li className="btn-s-2 pd-r-5">
                  <FacebookSquare fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Youtube fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Pinterest fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Twitter fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Instagram fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Behance fill="#000000" size="22px" />
                </li>
                <li className="btn-s-2 pd-r-5">
                  <Vk fill="#000000" size="22px" />
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
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Tratamentos</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Contatos</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
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
