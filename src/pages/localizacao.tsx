import React, { useState } from 'react'

import Wrap from './app/components/layout/wrap'
import HeaderPage from './app/components/layout/headerPage'

import { Facebook, Instagram } from '@styled-icons/boxicons-logos'

export default function Index() {
  return (
    <Wrap>
      <HeaderPage
        title="Localização"
        small="Conheça os procedimentos oferecidos pelaaclínica"
      />
      <div className="container-xxl">
        <div className="column-12 col-12">
          <div className="content-map pd-t-6 pd-b-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3845918541447!2d-35.20657448523288!3d-5.801234295796206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3000357211167%3A0x4486822657b73d4f!2sAv.%20Romualdo%20Galv%C3%A3o%2C%20138a%20-%20Barro%20Vermelho%2C%20Natal%20-%20RN%2C%2059022-100!5e0!3m2!1spt-BR!2sbr!4v1637865757480!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
        <div className="column-6 col-12 mg-t-6">
          <div
            className="column-content"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div
              className="rw mg-b-6"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h1
                className="title-s-1 mg-b-3"
                style={{
                  fontSize: '2pc',
                  fontWeight: 400,
                  color: 'var(--theme-primary-color) !important'
                }}
              >
                Horário de atendimento
              </h1>
              <span
                className="small-s-1 mg-b-3"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                Segunda à sexta-feira: 08h às 18h
              </span>
              <span
                className="small-s-1"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                Sábado: 08h às 12h
              </span>
            </div>
            <div
              className="rw"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <h1
                className="title-s-1 mg-b-3"
                style={{
                  fontSize: '2pc',
                  fontWeight: 400,
                  color: 'var(--theme-primary-color) !important'
                }}
              >
                Localização - Escritório
              </h1>
              <span
                className="small-s-1 mg-b-3"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                Endereço: Av. Sen. Salgado Filho, 2850 – Candelária, Natal/RN
              </span>
              <span
                className="small-s-1 mg-b-3"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                Telefone: (84) 3322-1000
              </span>
              <span
                className="small-s-1 mg-b-3"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                Whatsapp: (84) 3322-1000
              </span>
              <span
                className="small-s-1 mg-b-3"
                style={{
                  fontSize: '1pc',
                  fontWeight: 300,
                  color: 'var(--color-grey) !important'
                }}
              >
                E-mail: contato@wowtelecom.com.br
              </span>
            </div>

            <div className="rw mg-t-6">
              <h1
                className="title-s-1 mg-b-3"
                style={{
                  fontSize: '1.5pc',
                  fontWeight: 400,
                  color: 'var(--theme-primary-color) !important'
                }}
              >
                Siga a Amo
              </h1>
              <ul style={{ display: 'flex' }}>
                <li className="mg-1">
                  <a href="#" className="btn pd-3" style={styles.btnSocial}>
                    <Instagram fill="#f4a2a0" size="35" />
                  </a>
                </li>
                <li className="mg-1">
                  <a href="#" className="btn pd-3" style={styles.btnSocial}>
                    <Facebook fill="#f4a2a0" size="35" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column-6 col-12 mg-t-6">
          <div className="header-form mg-b-6">
            <h1
              className="title-s-1"
              style={{
                fontSize: '2pc',
                fontWeight: 400,
                color: 'var(--theme-primary-color) !important'
              }}
            >
              Agendamento Online
            </h1>
            <small
              className="small-s-1"
              style={{
                fontSize: '1pc',
                fontWeight: 300,
                color: 'var(--color-grey) !important'
              }}
            >
              Para solicitar informações adicionais, tirar dúvidas ou dar
              sugestões, envie-nos uma mensagem, que entraremos em contato o
              mais breve possível.
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
                <select
                  className="form-control"
                  placeholder="E-mail*"
                  style={styles.inputControl}
                >
                  <option>opção 01</option>
                </select>
              </div>
              <div className="input-group mg-b-5" style={styles.inputGroup}>
                <textarea
                  className="form-control"
                  placeholder="Mensagem*"
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
