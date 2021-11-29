import React, { useState } from 'react'

import Wrap from '../components/layout/wrap'
import HeaderPage from '../components/layout/headerPage'

import StylesCustom from '../style/custom.module.css'

export default function Index() {
  return (
    <Wrap>
      <HeaderPage
        title="A Clínica"
        small="Conheça os procedimentos oferecidos pelaaclínica"
      />
      <div className="container-md after">
        <div
          className={'content' + ' ' + StylesCustom.content_columns}
          style={styles.columnsContent}
        >
          <div className="column-12 col-12">
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
