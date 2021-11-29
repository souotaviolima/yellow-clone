import React, { useState } from 'react'

import Wrap from '../components/layout/wrap'
import HeaderPage from '../components/layout/headerPage'

import { FileEarmarkArrowUp } from '@styled-icons/bootstrap'

export default function Index() {
  return (
    <Wrap>
      <HeaderPage
        title="Trabalhe Conosco"
        small="Conheça os procedimentos oferecidos pelaaclínica"
      />
      <div className="container-md">
        <div className="column-12 col-12 mg-t-6">
          <div className="header-form mg-b-6">
            <h1
              className="title-s-1"
              style={{
                fontSize: '2pc',
                fontWeight: 400,
                color: 'var(--theme-primary-color) !important'
              }}
            >
              Envie seu currículo e trabalhe conosco
            </h1>
          </div>
          <form style={styles.form} className="after">
            <div className="form-content" style={styles.formContent}>
              <div className="column-6 col-12">
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
                <span className="mg-r-3 hidden-1" style={{ display: 'block' }}/>
              </div>
              <div className="column-6 col-12">
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
                    placeholder="Sobrenome*"
                    style={styles.inputControl}
                  />
                </div>
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
                  placeholder="Telefone*"
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
                <select
                  className="form-control"
                  placeholder="E-mail*"
                  style={styles.inputControl}
                >
                  <option>opção 01</option>
                </select>
              </div>
              <div className="input-group mg-b-3" style={styles.inputGroup}>
                <label
                  className="form-control"
                  htmlFor="fileInput"
                  style={styles.inputControlFile}
                >
                  <FileEarmarkArrowUp size="40" fill="#8f8f8f" />
                  <span className="mg-t-3">
                    Clique aqui para selecionar o currículo
                  </span>
                </label>
                <input id="fileInput" type="file" style={{ display: 'none' }} />
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
                  ENVIAR
                </strong>
              </button>
            </div>
          </form>
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
    backgroundColor: '#ffffff',
    paddingBottom: 100
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
  inputControlFile: {
    display: 'flex',
    padding: 32,
    width: '100%',
    color: '#2e2e2e',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnForm: {
    width: '100%',
    padding: 10,
    color: '#ffffff'
  },
  btnSocial: {
    borderRadius: 50,
    border: '1px solid #dddddd'
  }
}
