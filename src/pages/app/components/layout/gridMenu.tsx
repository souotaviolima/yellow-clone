import React, { useState } from 'react'

import { ArrowRightShort } from '@styled-icons/bootstrap'

const GridMenu = () => {
  return (
    <div className="content" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="column-4 col-12">
        <div
          className="card-primary card-light mg-4 mg-t-1"
          style={{
            backgroundColor: 'var(--theme-secundary-color)',
            borderRadius: 23
          }}
        >
          <div className="card-header mg-6 mg-b-1">
            <span
              className="title-s-1"
              style={{
                color: 'var(--color-grey) !important',
                fontWeight: 400
              }}
            >
              Procedimentos
            </span>
          </div>
          <div className="card-content mg-l-6 mg-r-6">
            <div style={{ width: '100%' }}>
              <div className="mg-b-5">
                <h2
                  className="title-s-2 mg-b-1"
                  style={{
                    color: 'var(--color-white) !important',
                    fontWeight: 400
                  }}
                >
                  Conheça os procedimentos oferecido pela a clínica
                </h2>
              </div>
              <div>
                <img
                  src="/assets/img/modelo_w_01.png"
                  style={{ height: 365, bottom: -40, position: 'relative' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column-8">
        <div className="column-6">
          <div
            className="card-secondary card-light mg-4 mg-t-1"
            style={{
              backgroundColor: 'var(--theme-secundary-color)',
              borderRadius: 23
            }}
          >
            <div className="card-image">
              <div className="card-header mg-6 mg-b-1">
                <span
                  className="title-s-1"
                  style={{
                    color: 'var(--color-grey) !important',
                    fontWeight: 400
                  }}
                >
                  Agendamento
                </span>
              </div>
              <div className="card-content mg-l-6 mg-b-6 mg-r-5">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="mg-b-5">
                    <h2
                      className="title-s-1 mg-b-1"
                      style={{
                        color: 'var(--color-white) !important',
                        fontWeight: 400
                      }}
                    >
                      Agende sua avaliação GRÁTIS de forma rápida e prática
                    </h2>
                  </div>
                  <div className="mg-b-5 between-display">
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        display: 'flex',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 30,
                        minWidth: '3rem'
                      }}
                    >
                      <ArrowRightShort
                        fill="#f4a2a0"
                        size="35px"
                        style={{ marginTop: -3 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-image hidden-1"
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <img
                style={{ height: 120, margin: 10 }}
                src="/assets/img/calendar_i.png"
              />
            </div>
          </div>
        </div>
        <div className="column-6">
          <div
            className="card-secondary card-light mg-4 mg-t-1"
            style={{
              backgroundColor: 'var(--theme-primary-color)',
              borderRadius: 23
            }}
          >
            <div className="card-image">
              <div className="card-header mg-6 mg-b-1">
                <span
                  className="title-s-1"
                  style={{
                    color: 'var(--color-white) !important',
                    fontWeight: 400
                  }}
                >
                  Promoções
                </span>
              </div>
              <div className="card-content mg-l-6 mg-b-6 mg-r-5">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="mg-b-5">
                    <h2
                      className="title-s-1 mg-b-1"
                      style={{
                        color: 'var(--color-white) !important',
                        fontWeight: 400
                      }}
                    >
                      Os procedimentos queredinhos que estão em promoção
                    </h2>
                  </div>
                  <div className="mg-b-5 between-display">
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        display: 'flex',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 30,
                        minWidth: '3rem'
                      }}
                    >
                      <ArrowRightShort
                        fill="#aa1937"
                        size="35px"
                        style={{ marginTop: -3 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-image hidden-1"
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <img
                style={{ height: '80%' }}
                src="/assets/img/modelo_w_02.png"
              />
            </div>
          </div>
        </div>
        <div className="column-6">
          <div
            className="card-secondary card-light mg-4 mg-t-1"
            style={{
              backgroundColor: 'var(--theme-secundary-color)',
              borderRadius: 23
            }}
          >
            <div className="card-image">
              <div className="card-header mg-6 mg-b-1">
                <span
                  className="title-s-1"
                  style={{
                    color: 'var(--color-grey) !important',
                    fontWeight: 400
                  }}
                >
                  Sobre a AMO
                </span>
              </div>
              <div className="card-content mg-l-6 mg-b-6 mg-r-5">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="mg-b-5">
                    <h2
                      className="title-s-1 mg-b-1"
                      style={{
                        color: 'var(--color-white) !important',
                        fontWeight: 400
                      }}
                    >
                      Saiba mais sobre a nossa história e onde vamos chegar
                    </h2>
                  </div>
                  <div className="mg-b-5 between-display">
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        display: 'flex',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 30,
                        minWidth: '3rem'
                      }}
                    >
                      <ArrowRightShort
                        fill="#f4a2a0"
                        size="35px"
                        style={{ marginTop: -3 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-image hidden-1"
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <img
                style={{ height: '100%' }}
                src="/assets/img/modelo_w_03.png"
              />
            </div>
          </div>
        </div>
        <div className="column-6">
          <div
            className="card-secondary card-light mg-4 mg-t-1"
            style={{
              backgroundColor: 'var(--theme-secundary-color)',
              borderRadius: 23
            }}
          >
            <div className="card-image">
              <div className="card-header mg-6 mg-b-1">
                <span
                  className="title-s-1"
                  style={{
                    color: 'var(--color-grey) !important',
                    fontWeight: 400
                  }}
                >
                  Localização
                </span>
              </div>
              <div className="card-content mg-l-6 mg-b-6 mg-r-5">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="mg-b-5">
                    <h2
                      className="title-s-1 mg-b-1"
                      style={{
                        color: 'var(--color-white) !important',
                        fontWeight: 400
                      }}
                    >
                      Confira onde estamos localizados e como chegar
                    </h2>
                  </div>
                  <div className="mg-b-5 between-display">
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        display: 'flex',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 30,
                        minWidth: '3rem'
                      }}
                    >
                      <ArrowRightShort
                        fill="#f4a2a0"
                        size="35px"
                        style={{ marginTop: -3 }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-image hidden-1"
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              <img
                style={{ height: 120, margin: 10 }}
                src="/assets/img/calendar_i.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridMenu
