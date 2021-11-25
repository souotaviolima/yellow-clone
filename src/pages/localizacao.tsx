import React, { useState } from 'react'

import Wrap from './app/components/layout/wrap'
import HeaderPage from './app/components/layout/headerPage'

import StylesCustom from '../style/custom.module.css'

export default function Index() {
  return (
    <Wrap>
      <HeaderPage
        title="Localização"
        small="Conheça os procedimentos oferecidos pelaaclínica"
      />
      <div className="container-lg after">
        <div
          className={'content' + ' ' + StylesCustom.content_columns}
          style={styles.columnsContent}
        >
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
        </div>
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
