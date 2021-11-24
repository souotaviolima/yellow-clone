import React, { useState } from 'react'
import Collapsible from 'react-collapsible'

import Wrap from './app/components/layout/wrap'
import Gallery from './app/components/widgets/gallery'
import HeaderPage from './app/components/layout/headerPage'

import StylesCustom from '../style/custom.module.css'

export default function Index() {
  return (
    <Wrap>
      <HeaderPage
        title="Carboxiterapia"
        small="Conheça os procedimentos oferecidos pelaaclínica"
      />
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
                    Ver resulta dos antes e depois
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
      <div className="container-xxl before after">
        <Gallery />
      </div>
      <div
        className="from-container mg-b-7"
        style={{
          backgroundImage: 'linear-gradient(to right, #6a002e, #6f0021)'
        }}
      >
        <div className="container-lg">
          <div className="content">
            <div className="column-5 col-12 ">
              <div className="header-form mg-b-5 before">
                <h1
                  className="title-s-1"
                  style={{
                    fontSize: '2pc',
                    fontWeight: 400,
                    color: 'var(--color-white) !important'
                  }}
                >
                  Agendamento Online
                </h1>
                <small
                  className="small-s-1"
                  style={{
                    fontSize: '1pc',
                    fontWeight: 300,
                    color: 'var(--color-white) !important'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </small>
              </div>
              <form style={styles.form} className="after">
                <div className="form-content" style={styles.formContent}>
                  <div className="input-group mg-b-3" style={styles.inputGroup}>
                    <div
                      className="input-group-prepend"
                      style={styles.groupPrepend}
                    >
                      <span className="input-group-text" id="basic-addon1">
                        ico
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome*"
                      style={styles.inputControl}
                    />
                  </div>
                  <div className="input-group mg-b-3" style={styles.inputGroup}>
                    <div
                      className="input-group-prepend"
                      style={styles.groupPrepend}
                    >
                      <span className="input-group-text" id="basic-addon1">
                        ico
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail*"
                      style={styles.inputControl}
                    />
                  </div>
                  <div className="input-group mg-b-5" style={styles.inputGroup}>
                    <div
                      className="input-group-prepend"
                      style={styles.groupPrepend}
                    >
                      <span className="input-group-text" id="basic-addon1">
                        ico
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Celular*"
                      style={styles.inputControl}
                    />
                  </div>
                  <button
                    className="btn-s-2 pd-2 pd-l-5 pd-r-5 flex-display"
                    style={{
                      borderRadius: 50,
                      backgroundColor: '#8f8f8f',
                      display: 'table',
                      margin: 'auto'
                    }}
                  >
                    <strong style={{ fontWeight: 700, color: '#ffffff' }}>
                      AGENDAR
                    </strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    </Wrap>
  )
}

const styles: any = {
  header: { backgroundColor: 'var(--theme-primary-color)' },
  columnsContent: { display: 'flex', justifyContent: 'space-evenly' },
  form: { width: '100%' },
  formContent: {
    display: 'block',
    padding: 20,
    backgroundColor: '#ffffff',
    paddingBottom: 100,
    borderRadius: 15,
    border: '1px solid #e3075e'
  },
  inputGroup: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #cccccc',
    borderRadius: 3
  },
  groupPrepend: {
    borderRight: '1px solid #cccccc',
    padding: '10px 15px',
    color: '#2e2e2e'
  },
  inputControl: {
    width: '100%',
    padding: 10,
    color: '#2e2e2e'
  },
  btnForm: {
    width: '100%',
    padding: 10,
    color: '#ffffff'
  }
}
