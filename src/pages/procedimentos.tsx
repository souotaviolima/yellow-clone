import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

import Wrap from './app/components/layout/wrap'
import Gallery from './app/components/widgets/gallery'

import StylesCustom from '../style/custom.module.css'

export default function Index() {
  return (
    <Wrap>
      <div className="header-page" style={styles.header}>
        <div className="container-xxl">
          <div
            className="content"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            <div className="column-6 col-12">
              <div className="content pd-t-6 pd-b-6 mg-t-6">
                <div className="page-resume-title">
                  <h1
                    className="title-s-1"
                    style={{
                      fontSize: '2pc',
                      fontWeight: 600,
                      color: 'var(--color-white) !important'
                    }}
                  >
                    Carboxiterapia
                  </h1>
                </div>
                <div className="page-resume-span mg-t-2">
                  <span
                    className="title-s-1 mg-t-5"
                    style={{
                      color: 'var(--color-white) !important',
                      fontWeight: 500
                    }}
                  >
                    Conheça os procedimentos
                    <br />
                    oferecidopelaaclínic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div
          className={'content' + ' ' + StylesCustom.content_columns}
          style={styles.columnsContent}
        >
          <div className="column-6 col-12">
            <div className="content pd-t-6 pd-b-6">
              <div className="page-resume-text mg-t-6">
                <p
                  style={{
                    color: 'var(--color-gray) !important',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'justify'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="column-4 col-12">
            <div
              className={'content' + ' ' + StylesCustom.content_procedimentos}
              style={{
                display: 'flex',
                width: '100%',
                position: 'relative',
                top: '-200px',
                flexDirection: 'column',
                alignContent: 'center'
              }}
            >
              <div className="page-image mg-t-6">
                <span
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    height: '400px',
                    borderRadius: 20,
                    background: '#a62539',
                    float: 'right'
                  }}
                />
              </div>

              <div className="mg-t-3">
                <a
                  className="btn-s-2 pd-4 pd-l-6 pd-r-6 flex-display mg-1"
                  style={{
                    borderRadius: 50,
                    backgroundColor: 'var(--theme-primary-color)',
                    display: 'table',
                    margin: 'auto'
                  }}
                >
                  <strong style={{ fontWeight: 900, color: '#ffffff' }}>
                    Verresulta dos antes e depois
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="content mg-t-6">
          <div className="header-list">
            <h2
              className="title-s-6"
              style={{ color: 'var(--theme-primary-color) !important' }}
            >
              Perguntas frequentes
            </h2>
          </div>
          <div className="collapsible-list mg-t-6">
            <Collapsible
              className="mg-b-6"
              trigger={
                <div
                  className="collapsible-header mg-t-3"
                  style={{
                    borderBottom: '2px solid #565b61',
                    cursor: 'pointer'
                  }}
                >
                  <h2
                    className="title-s-4"
                    style={{ color: 'var(--theme-primary-color) !important' }}
                  >
                    Quais cuidados deve ter após o procedimento?
                  </h2>
                </div>
              }
            >
              <div className="collapsible-content mg-t-6 mg-b-6">
                <p
                  style={{
                    color: 'var(--color-gray) !important',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'justify'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Collapsible>
            <Collapsible
              className="mg-b-6"
              trigger={
                <div
                  className="collapsible-header mg-t-3"
                  style={{
                    borderBottom: '2px solid #565b61',
                    cursor: 'pointer'
                  }}
                >
                  <h2
                    className="title-s-4"
                    style={{ color: 'var(--theme-primary-color) !important' }}
                  >
                    Quais cuidados deve ter após o procedimento?
                  </h2>
                </div>
              }
            >
              <div className="collapsible-content mg-t-6 mg-b-6">
                <p
                  style={{
                    color: 'var(--color-gray) !important',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'justify'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Collapsible>
            <Collapsible
              className="mg-b-6"
              trigger={
                <div
                  className="collapsible-header mg-t-3"
                  style={{
                    borderBottom: '2px solid #565b61',
                    cursor: 'pointer'
                  }}
                >
                  <h2
                    className="title-s-4"
                    style={{ color: 'var(--theme-primary-color) !important' }}
                  >
                    Quais cuidados deve ter após o procedimento?
                  </h2>
                </div>
              }
            >
              <div className="collapsible-content mg-t-6 mg-b-6">
                <p
                  style={{
                    color: 'var(--color-gray) !important',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'justify'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Collapsible>
            <Collapsible
              className="mg-b-6"
              trigger={
                <div
                  className="collapsible-header mg-t-3"
                  style={{
                    borderBottom: '2px solid #565b61',
                    cursor: 'pointer'
                  }}
                >
                  <h2
                    className="title-s-4"
                    style={{ color: 'var(--theme-primary-color) !important' }}
                  >
                    Quais cuidados deve ter após o procedimento?
                  </h2>
                </div>
              }
            >
              <div className="collapsible-content mg-t-6 mg-b-6">
                <p
                  style={{
                    color: 'var(--color-gray) !important',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: 'justify'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <Gallery />
      </div>
    </Wrap>
  )
}

const styles: any = {
  header: { backgroundColor: 'var(--theme-primary-color)' },
  columnsContent: { display: 'flex', justifyContent: 'space-evenly' }
}
