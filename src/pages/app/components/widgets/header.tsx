import React, { useContext, useEffect, useState } from 'react'
import Sticky from 'react-stickynode'

import api from '@src/services/service_api'
import ActiveLink from '@src/utils/activeLink'

type TMenu = [
  {
    name: string
    icon: string
    slug: string
    options: any
  }
]

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false)
  const [getHeader, setHeader] = useState<TMenu>()

  const handleStateChange = (status: any) => {
    setHeaderFixed(status.status === Sticky.STATUS_FIXED ? true : false)
  }

  async function header() {
    const resMenu = await api.get('/get/widget/header')
    setHeader(resMenu.data.items)
  }

  useEffect(() => {
    header()
  }, [])

  return (
    <React.Fragment>
      <Sticky onStateChange={handleStateChange} />
      <header
        className="header transition-s-1"
        style={
          headerFixed
            ? { position: 'fixed', top: '0', zIndex: 9999, width: '100%' }
            : {}
        }
      >
        <div
          className="border-b-solid border-s-1 border-c-2"
          style={
            headerFixed
              ? {
                  position: 'relative',
                  zIndex: 9999,
                  backgroundColor: 'var(--color-white)',
                  boxShadow: '0px 0px 7px 0px #cccccc78',
                  transition: '0.2s ease-in'
                }
              : {
                  position: 'relative',
                  zIndex: 9999,
                  backgroundColor: 'var(--color-white)',
                  transition: '0.2s ease-in'
                }
          }
        >
          <div className="container-xxl between-display pd-r-3 pd-l-3 pd-6">
            <div className="content flex-display">
              <div className="logo-header">
                <img
                  src="/assets/img/amo-logo-sm.jpg"
                  alt="Picture of the author"
                  height="40px"
                />
              </div>
            </div>
            <div className="content flex-display hidden-1">
              <nav>
                <ul className="content-row">
                  {getHeader &&
                    getHeader.map((menu: any, key: number) => (
                      <li className="btn-s-2 pd-7 pd-l-3 pd-r-3 flex-display">
                        <ActiveLink
                          activeClassName="a-href-nav-header-active"
                          href={menu.slug}
                        >
                          <a className="a-href-nav-header">{menu.name}</a>
                        </ActiveLink>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>

            <div className="content flex-display hidden-1">
              <nav>
                <ul className="content-row">
                  <li
                    className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      backgroundColor: 'var(--theme-primary-color)'
                    }}
                  >
                    <strong style={{ fontWeight: 900, color: '#ffffff' }}>
                      Agendar avaliação grátis
                    </strong>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div
          className="bg-white border-c-2 transition-s-8"
          style={headerFixed ? HeaderAnimation : { top: 0 }}
        >
          <div className="ctx-header border-b-solid border-s-1 border-c-2 pd-t-1 pd-b-1 hidden-1">
            <div className="container-xxl">
              <nav className="hidden-1">
                <ul className="content-row">
                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50
                    }}
                  >
                    <img
                      className="mg-r-3"
                      src="/assets/icons/whatsapp.svg"
                      style={{ height: 25 }}
                    />
                    <a href="#" className="a-href-nav-to-header">
                      (84) 9.9619.1917
                    </a>
                  </li>
                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50
                    }}
                  >
                    <img
                      className="mg-r-3"
                      src="/assets/icons/local.svg"
                      style={{ height: 25 }}
                    />
                    <a href="#" className="a-href-nav-to-header">
                      Av. Romualdo Galvão, 138 A - Barro Vermelho - Natal/RN
                    </a>
                  </li>

                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50
                    }}
                  >
                    <img
                      className="mg-r-3"
                      src="/assets/icons/horario.svg"
                      style={{ height: 25 }}
                    />
                    <a href="#" className="a-href-nav-to-header">
                      Seg. à sex das 8h às 18 | Sáb. 8h às 12h
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

const HeaderAnimation: any = {
  zIndex: 9998,
  position: 'relative',
  top: -900
}

export default Header
