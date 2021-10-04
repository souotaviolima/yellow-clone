import React, { useEffect, useState } from 'react'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect'

import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'

import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { Search } from '@styled-icons/boxicons-regular'

//import api from '@src/services/service_api'

type Search = [
  {
    id: string
    location: any
    plans: any
  }
]

const LocationModal = ({ modal }) => {
  const { register, handleSubmit } = useForm()

  const [getSearch, setSearch] = useState<Search>()
  const [getOpenModal, setOpenModal] = useState(false)
  const [version, setVersion] = useState({ browser: null, mobile: null })

  useEffect(() => {
    if (isMobile) setVersion({ browser: false, mobile: true })
    if (isBrowser) setVersion({ browser: true, mobile: false })
  }, [isMobile, isBrowser])

  useEffect(() => {
    async function initialData() {
      try {
        //const resSearch = await api.get('/search/location')
        //setSearch(resSearch.data)
      } catch (error) {}
    }
    initialData()
    setOpenModal(!modal)
  }, [modal])

  useEffect(() => {
    if (Cookies.get('location')) setOpenModal(true)
  }, [Cookies])

  async function onLcation(location, id) {
    try {
      await Cookies.set('location', id, { expires: 1 })
      await localStorage.setItem('@location', JSON.stringify(location))
      setTimeout(function () {
        window.location.reload()
        window.location.href = '#planos-alsol'
      }, 0)
      setOpenModal(true)
    } catch (error) {}
  }

  async function onSearch(e) {
    try {
      if (e.keyword) {
        const resSearch = await api.get('/search/location/' + e.keyword)
        if (resSearch.data) setSearch(resSearch.data)
      } else {
        const resSearch = await api.get('/search/location')
        setSearch(resSearch.data)
      }
    } catch (error) {}
  }

  return (
    <div style={getOpenModal ? { display: 'none' } : { display: 'block' }}>
      {!getOpenModal && (
        <style
          dangerouslySetInnerHTML={{
            __html: [
              'html { overflow: hidden;}',
              '::-webkit-input-placeholder {',
              'color: #ffffff40;',
              '}',
              '::-webkit-scrollbar {',
              'width: 10px;',
              '}',
              '::-webkit-scrollbar-thumb {',
              'background: #0000001a; ',
              'border-radius: 10px',
              '}',
              '.mv-modal-selection-form-result li:hover',
              'background: #00000015;',
              '}'
            ].join('\n')
          }}
        ></style>
      )}
      <div className="mv-container-modal" style={Modal.container}>
        <div className="mv-header-modal" style={{ height: '40%' }}>
          <div className="content" style={Modal.content}>
            <div
              className="mv-header-modal-content"
              style={{
                height: '100%',
                width: '100%',
                display: 'inline-flex',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '59px 0px'
              }}
            >
              <div
                className="mv-header-logo"
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <h2
                  style={{
                    fontSize: '1.5pc',
                    color: ' #ffffff',
                    fontWeight: 'bold',
                    fontFamily: '"Montserrat", Sans-serif'
                  }}
                >
                  Disponibilidade de serviço.
                </h2>
              </div>
              <button
                onClick={() => setOpenModal(true)}
                type="button"
                style={{
                  padding: '6px',
                  border: 0,
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                <CloseOutline size="40px" fill="#ffffff" />
              </button>
            </div>
            <div className="mv-header-modal-content">
              <form onChange={handleSubmit(onSearch)}>
                <div className="mv-row-input">
                  <span style={{ position: 'absolute', margin: '16px' }}>
                    <Search fill="#ffffff" size="30px" />
                  </span>
                  <input
                    {...register('keyword')}
                    style={{
                      display: 'block',
                      width: '100%',
                      maxWidth: '100%',
                      border: 'navajowhite',
                      textAlign: 'center',
                      color: 'rgb(255 255 255)',
                      fontFamily: '"Montserrat", Sans-serif',
                      fontSize: '25px',
                      minHeight: 40,
                      lineHeight: 1.8,
                      margin: '20px 0px 0px',
                      verticalAlign: 'middle',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      borderBottom: '3px solid #0000001a',
                      background: '#0000001a'
                    }}
                    type="text"
                    name="keyword"
                    placeholder="alexandria"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mv-content-modal" style={{ height: '90%' }}>
          <div
            className="content"
            style={
              version.mobile
                ? {
                    width: '99%',
                    margin: 'auto',
                    overflowY: 'scroll',
                    height: '60%'
                  }
                : {
                    width: '70%',
                    margin: 'auto',
                    overflowY: 'scroll',
                    height: '60%'
                  }
            }
          >
            <ul className="mv-modal-selection-form-result">
              {getSearch &&
                getSearch.map((widget, key) => (
                  <a
                    key={key}
                    onClick={() => onLcation(widget.location, widget.id)}
                  >
                    <li
                      style={
                        version.mobile
                          ? {
                              cursor: 'pointer',
                              display: 'inline-block',
                              width: '100%',
                              maxWidth: '100%',
                              height: '60px',
                              padding: 20,
                              minHeight: 40,
                              marginBottom: '10px',
                              borderBottom: '.5px solid #ffffff50',
                              fontSize: '1pc',
                              color: '#ffffff',
                              fontFamily: '"Montserrat", Sans-serif',
                              fontWeight: 'bold'
                            }
                          : {
                              cursor: 'pointer',
                              display: 'inline-block',
                              width: '100%',
                              maxWidth: '100%',
                              height: '60px',
                              padding: 20,
                              minHeight: 40,
                              marginBottom: '10px',
                              borderBottom: '.5px solid #ffffff50',
                              fontSize: '1.5pc',
                              color: '#ffffff',
                              fontFamily: '"Montserrat", Sans-serif',
                              fontWeight: 'bold'
                            }
                      }
                    >
                      <div
                        className="mv-result-item"
                        style={{
                          height: '100%',
                          width: '100%',
                          display: 'inline-flex',
                          alignContent: 'center',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <strong>
                            {widget.location.name}/{widget.location.state}
                          </strong>
                        </div>
                        <div>
                          <small>{/*widget.plans.length} planos*/}</small>
                          <ArrowIosForwardOutline fill="#cccccc" size="30px" />
                        </div>
                      </div>
                    </li>
                  </a>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
const Modal: any = {}
Modal.container = {
  position: 'fixed',
  zIndex: 9999,
  width: '100%',
  height: '100%',
  backgroundColor: '#FA2D28',
  backdropFilter: 'blur(15px)'
}
Modal.content = {
  width: '70%',
  margin: 'auto'
}
export default LocationModal
