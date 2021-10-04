import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])

//import api from '@src/services/service_api'

const Plans = () => {
  const [getLocation, setLocation] = useState([])

  useEffect(() => {
    async function initialData() {
      try {
        const idLocation = Cookies.get('location')
        if (idLocation) {
         //const resSearch = await api.get('/search/location/id/' + idLocation)
         // setLocation(resSearch.data)
        } else {
        //  const resSearch = await api.get('/search/location')
        //  setLocation(resSearch.data)
        }
      } catch (error) {}
    }
    initialData()
  }, [])

  return (
    <section
      id="planos-alsol"
      className="elementor-section elementor-top-section elementor-element elementor-element-8c1093b elementor-section-height-min-height elementor-section-items-top elementor-section-boxed elementor-section-height-default"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: [
            '.elementor-container.elementor-column-gap-default.mv-pl{',
            'overflow-y: scroll;',
            'overflow-x: none;',
            '}',
            '.elementor-container.elementor-column-gap-default::-webkit-scrollbar {',
            'width: 0px;',
            '}',
            '.elementor-container.elementor-column-gap-default::-webkit-scrollbar-thumb{',
            'background: #F8140F; ',
            'border-radius: 10px',
            '}'
          ].join('\n')
        }}
      ></style>
      <div className="elementor-background-overlay" />
      <div className="elementor-container elementor-column-gap-default mv-pl">
        {getLocation.map((location, key) => (
          <div key={key} className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7e31787"
              data-id="7e31787"
              data-element_type="column"
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-3a1b439 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="3a1b439"
                    data-element_type="section"
                  >
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-row">
                        <div
                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-920165a"
                          data-id="920165a"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-c8db76c elementor--h-position-center elementor--v-position-middle elementor-arrows-position-inside elementor-widget elementor-widget-slides"
                                data-id="c8db76c"
                                data-element_type="widget"
                                data-settings='{"navigation":"arrows","transition_speed":2,"autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","transition":"slide"}'
                                data-widget_type="slides.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-swiper">
                                    <div
                                      className="elementor-slides-wrapper elementor-main-swiper swiper-container"
                                      dir="ltr"
                                      data-animation="fadeInLeft"
                                    >
                                      <style
                                        dangerouslySetInnerHTML={{
                                          __html: [
                                            '.swiper-button-prev {',
                                            'background-image: url(/assets/icons/chevron_left_icon.svg);',
                                            'background-size: 15px;',
                                            'filter: invert(1);',
                                            '}',

                                            '.swiper-button-next {',
                                            'background-image: url(/assets/icons/chevron_right_icon.svg);',
                                            'background-size: 15px;',
                                            'filter: invert(1);',
                                            '}'
                                          ].join('\n')
                                        }}
                                      ></style>
                                      <Swiper
                                        navigation={true}
                                        className="swiper-wrapper elementor-slides"
                                      >
                                        {location.plans.map((plan, key) => (
                                          <SwiperSlide>
                                            <div
                                              key={key}
                                              className="elementor-repeater-item-d21b9aa swiper-slide"
                                            >
                                              <div className="swiper-slide-bg" />
                                              <a
                                                className="swiper-slide-inner"
                                                href="https://api.whatsapp.com/send?phone=5583996271818&text=Gostaria%20de%20saber%20mais%20sobre%20os%20planos!"
                                              >
                                                <div className="swiper-slide-contents">
                                                  <div className="elementor-slide-heading">
                                                    <span
                                                      style={{
                                                        marginRight: 10,
                                                        textTransform:
                                                          'uppercase',
                                                        fontWeight: 600,
                                                        color: '#FBBE0E'
                                                      }}
                                                    >
                                                      <b>{plan.name.lng}</b>
                                                    </span>
                                                    <b
                                                      style={{
                                                        textTransform:
                                                          'uppercase',
                                                        fontWeight: 400
                                                      }}
                                                    >
                                                      {plan.name.lng_two}
                                                    </b>
                                                  </div>
                                                  <div className="elementor-slide-description">
                                                    <b
                                                      style={{
                                                        fontWeight: 700,
                                                        textTransform:
                                                          'initial',
                                                        marginRight: 5
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontWeight: 700,
                                                          textTransform:
                                                            'initial',
                                                          marginRight: 5
                                                        }}
                                                      >
                                                        {plan.velocity.download}
                                                      </span>
                                                      {
                                                        plan.velocity.type
                                                          .default
                                                      }
                                                    </b>
                                                    de Download
                                                    <br />
                                                    <b
                                                      style={{
                                                        fontWeight: 700,
                                                        textTransform:
                                                          'initial',
                                                        marginRight: 5
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontWeight: 700,
                                                          textTransform:
                                                            'initial',
                                                          marginRight: 5
                                                        }}
                                                      >
                                                        {plan.velocity.upload}
                                                      </span>
                                                      {
                                                        plan.velocity.type
                                                          .default
                                                      }
                                                    </b>
                                                    de Upload
                                                    <br />
                                                    <b
                                                      style={{
                                                        fontWeight: 700,
                                                        textTransform:
                                                          'initial',
                                                        marginRight: 5
                                                      }}
                                                    >
                                                      {plan.type.lng}
                                                    </b>
                                                    <br />
                                                    <b
                                                      style={{
                                                        fontWeight: 700,
                                                        textTransform:
                                                          'initial',
                                                        marginRight: 5
                                                      }}
                                                    >
                                                      Wi-Fi Plus Ultra Veloz
                                                    </b>{' '}
                                                    Dual Band
                                                    <br />
                                                    Em Comodato
                                                    <br />
                                                    <b
                                                      style={{
                                                        fontWeight: 700,
                                                        textTransform:
                                                          'initial',
                                                        marginRight: 5
                                                      }}
                                                    >
                                                      Instalação Grátis
                                                    </b>
                                                    <br />
                                                    <br />
                                                  </div>
                                                  <div className="elementor-button elementor-slide-button elementor-size-sm">
                                                    CONTRATE JÁ!
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                          </SwiperSlide>
                                        ))}
                                      </Swiper>
                                      <div className="elementor-swiper-button elementor-swiper-button-prev">
                                        <span className="elementor-screen-only">
                                          Previous
                                        </span>
                                      </div>
                                      <div className="elementor-swiper-button elementor-swiper-button-next">
                                        <span className="elementor-screen-only">
                                          Next
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-32a4a4d"
                          data-id="32a4a4d"
                          data-element_type="column"
                        >
                          <div className="elementor-column-wrap elementor-element-populated">
                            <div className="elementor-widget-wrap">
                              <div
                                className="elementor-element elementor-element-7d4c2d0 elementor-widget elementor-widget-spacer"
                                data-id="7d4c2d0"
                                data-element_type="widget"
                                data-widget_type="spacer.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-spacer">
                                    <div className="elementor-spacer-inner" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-5136be3 elementor-widget elementor-widget-heading"
                                data-id="5136be3"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Planos de Internet para{' '}
                                    <strong
                                      style={{
                                        textTransform: 'uppercase',
                                        fontWeight: 'bolder'
                                      }}
                                    >
                                      {location.location.name},{' '}
                                      {location.location.state}{' '}
                                    </strong>
                                  </h3>{' '}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-0a69c64 elementor-widget elementor-widget-heading"
                                data-id="0a69c64"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    OFERTAS EXCLUSIVAS
                                  </h3>{' '}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-ebe7496 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                data-id="ebe7496"
                                data-element_type="widget"
                                data-widget_type="divider.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-divider">
                                    <span className="elementor-divider-separator"></span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-70757d2 elementor-widget elementor-widget-heading"
                                data-id="70757d2"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    Escolha o plano de internet que melhor
                                    atende à você e sua família.
                                  </h3>{' '}
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-51d5ad9 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
                                data-id="51d5ad9"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-button-wrapper">
                                    <a
                                      href="http://www.alsol.com.br/nossos-planos/"
                                      className="elementor-button-link elementor-button elementor-size-md"
                                      role="button"
                                    >
                                      <span className="elementor-button-content-wrapper">
                                        <span className="elementor-button-text">
                                          VER TODOS OS PLANOS
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
