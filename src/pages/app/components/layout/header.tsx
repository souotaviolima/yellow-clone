import React, { useContext, useState } from 'react'
import Sticky from 'react-stickynode'

import { GridThreeUp } from '@styled-icons/open-iconic'
import { Cart, Search } from '@styled-icons/boxicons-regular'

import DropDownItem from './dropdownItem'

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false)
  const handleStateChange = (status: any) => {
    setHeaderFixed(status.status === Sticky.STATUS_FIXED ? true : false)
  }

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
          style={{
            position: 'relative',
            zIndex: 9999,
            backgroundColor: 'var(--color-white)'
          }}
        >
          <div className="container-xxl between-display pd-r-3 pd-l-3">
            <div className="content flex-display">
              <div className="logo-header">
                <img
                  src="/assets/img/unnamed.jpg"
                  alt="Picture of the author"
                  width="40px"
                />
              </div>
            </div>

            <div className="content flex-display hidden-1">
              <nav>
                <ul className="content-row">
                  <li className="btn-s-2 pd-7 pd-l-3 pd-r-3 flex-display">
                    Home
                  </li>
                  <li className="btn-s-2 pd-7 pd-l-3 pd-r-3 flex-display">
                    Criador
                  </li>
                  <li className="btn-s-2 pd-7 pd-l-3 pd-r-3 flex-display">
                    Personalizar
                  </li>
                  <li className="btn-s-2 pd-7 pd-l-3 pd-r-3 flex-display">
                    Ajustes
                  </li>
                </ul>
              </nav>
            </div>

            <div className="content flex-display">
              <nav>
                <ul className="content-row">
                  <li
                    className={
                      headerFixed
                        ? 'btn-s-2 pd-0 flex-display mg-1 animations-show-in'
                        : 'btn-s-2 pd-0 flex-display mg-1 animations-hidden-out'
                    }
                  >
                    <Search fill="#000000" size="30px" />
                  </li>
                  <li
                    className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1 hidden-1"
                    style={{
                      borderRadius: 50,
                      backgroundColor: '#FFFB1F'
                    }}
                  >
                    <strong style={{ fontWeight: 900 }}>Get 90% OFF</strong>
                  </li>
                  <li
                    className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Login
                  </li>
                  <li
                    className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Join Now
                  </li>
                  <li
                    className="btn-s-2 pd-3 flex-display mg-1"
                    style={{
                      backgroundColor: '#FFFB1F',
                      borderRadius: 10
                    }}
                  >
                    <img
                      src={'/assets/icons/menu_grid_circle_icon.svg'}
                      height="25px"
                    />
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
          <div className="container-xxl">
            <form className="form flex-display  between-display">
              <div className="form-content mg-t-5" style={{ width: '100%' }}>
                <input
                  type="text"
                  name="password"
                  className="input input-primary pd-8"
                  placeholder="Busca"
                  style={{
                    backgroundColor: 'var(--color-gray)',
                    border: '1px solid #ddd'
                  }}
                />
              </div>
              <div className="form-content hidden-1 mg-t-5 mg-l-4">
                <button
                  type="submit"
                  className="btn btn-primary pd-l-5 pd-r-5"
                  style={{
                    backgroundColor: 'var(--color-black)',
                    borderRadius: 30,
                    minWidth: '12rem'
                  }}
                >
                  Search now
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white border-b-solid border-s-1 border-c-2 pd-t-5 pd-b-5">
            <div className="container-xxl between-display">
              <nav className="hidden-1">
                <ul className="content-row pd-b-4 pd-t-4">
                  <DropDownItem />

                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Home
                  </li>
                </ul>
              </nav>
              <nav className="hidden-1">
                <ul className="content-row">
                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    Home
                  </li>
                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Criador
                  </li>

                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Personalizar
                  </li>
                  <li
                    className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
                    style={{
                      borderRadius: 50,
                      border: '1px solid #ddd'
                    }}
                  >
                    {' '}
                    Ajustes
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
