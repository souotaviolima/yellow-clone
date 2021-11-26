import React, { useEffect, useState } from 'react'

import {
  FacebookSquare,
  Instagram,
  Whatsapp
} from '@styled-icons/boxicons-logos'

import api from '@src/services/service_api'

type TMenu = [
  {
    group: any
    name: string
    icon: string
    slug: string
    options: any
  }
]

const Footer = () => {
  const [getFooter, setFooter] = useState<TMenu>()

  async function header() {
    const resMenu = await api.get('/get/widget/footer')
    setFooter(resMenu.data.items)
  }

  useEffect(() => {
    header()
  }, [])

  return (
    <footer
      className="footer"
      style={{ backgroundColor: 'var(--theme-grey-background)' }}
    >
      <div className="footer-container container-xxl mg-t-5 mg-b-5 pd-t-5 pd-b-5">
        <div className="column-6 col-12">
          <div className="content">
            <div className="logo-header">
              <img
                src="/assets/img/amo-logo-sm.png"
                alt="Picture of the author"
                height="40px"
              />
            </div>
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
                  {getFooter &&
                    getFooter.map(
                      (menu: any, key: number) =>
                        menu.group === 'institucional' && (
                          <div
                            key={key}
                            className="footer-menu-item pd-3 pd-l-5 pd-r-5"
                          >
                            <a href={menu.slug}>{menu.name}</a>
                          </div>
                        )
                    )}
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Tratamentos</b>
                  </div>
                  {getFooter &&
                    getFooter.map(
                      (menu: any, key: number) =>
                        menu.group === 'tratamentos' && (
                          <div
                            key={key}
                            className="footer-menu-item pd-3 pd-l-5 pd-r-5"
                          >
                            <a href={menu.slug}>{menu.name}</a>
                          </div>
                        )
                    )}
                </ul>
              </div>

              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Contatos</b>
                  </div>
                  {getFooter &&
                    getFooter.map(
                      (menu: any, key: number) =>
                        menu.group === 'contatos' && (
                          <div
                            key={key}
                            className="footer-menu-item pd-3 pd-l-5 pd-r-5"
                          >
                            <a href={menu.slug}>{menu.name}</a>
                          </div>
                        )
                    )}
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
