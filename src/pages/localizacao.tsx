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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15875.570091392434!2d-35.2065571!3d-5.8707296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8f7e041e3c553b0e!2sWOW%20Telecom!5e0!3m2!1spt-BR!2sbr!4v1588220354133!5m2!1spt-BR!2sbr"
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
