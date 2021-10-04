import React, { useContext } from 'react'
import { GridThreeUp } from '@styled-icons/open-iconic'
import { Cart } from '@styled-icons/boxicons-regular'

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div
          className="border-b-solid border-s-1 border-c-2"
          style={{ backgroundColor: 'var(--color-white)' }}
        >
          <div className="container-xxl between-display">
            <div className="content flex-display">
              <div className="logo-header">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLSa-GfeS8w8Xx4ebvV3Rvwu6bsNCweB7FTGu2_lDg"
                  alt="Picture of the author"
                  width="40px"
                />
              </div>
            </div>

            <div className="content flex-display">
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
                  <li className="btn-s-2 pd-0 flex-display mg-1">
                    <Cart
                      fill="#000000"
                      size="30px"
                    />
                  </li>
                  <li
                    className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1"
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
        <div className="bg-white border-c-2">
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
              <div className="form-content mg-t-5 mg-l-4">
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
              <nav>
                <ul className="content-row pd-b-4 pd-t-4">
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
              <nav>
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

export default Header
