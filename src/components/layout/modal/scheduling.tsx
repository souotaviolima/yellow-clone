import React, { useEffect, useState } from 'react'

const modal: any = {
  title: 'Agendamento On-line',
  image: 'assets/img/modelo_w_01.png'
}
export default function Modal({ image, isOpen, title, close, children }: any) {
  const [isModal, setIsModal] = useState(false)

  function openModal() {
    setIsModal(false)
  }

  useEffect(() => {
    setIsModal(isOpen)
  }, [isOpen])

  return (
    <React.Fragment>
      {isModal && (
        <div className="modal-overlay" style={styles.overlay}>
          <div className="animations-scale-down">
            <div className="modal-container" style={styles.container}>
              <div className="column-6 col-12">
                <div className="card-content hidden-1" style={styles.cardImage}>
                  <img
                    src={modal.image}
                    style={{ position: 'relative', bottom: -30 }}
                  />
                </div>
              </div>
              <div className="column-6 col-12">
                <div className="card-header pd-6 pd-b-1" style={styles.header}>
                  <h2
                    className="title-s-4"
                    style={{ color: '#fff !important' }}
                  >
                    {modal.title}
                  </h2>
                </div>
                <div className="card-content pd-6" style={{ width: '100%' }}>
                  <div className="card-content">
                    <form style={styles.form}>
                      <div className="form-content" style={styles.formContent}>
                        <div
                          className="input-group mg-b-3"
                          style={styles.inputGroup}
                        >
                          <div
                            className="input-group-prepend"
                            style={styles.groupPrepend}
                          >
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
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
                        <div
                          className="input-group mg-b-3"
                          style={styles.inputGroup}
                        >
                          <div
                            className="input-group-prepend"
                            style={styles.groupPrepend}
                          >
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
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
                        <div
                          className="input-group mg-b-3"
                          style={styles.inputGroup}
                        >
                          <div
                            className="input-group-prepend"
                            style={styles.groupPrepend}
                          >
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
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
                        <div
                          className="input-group mg-b-3"
                          style={styles.inputGroup}
                        >
                          <div
                            className="input-group-prepend"
                            style={styles.groupPrepend}
                          >
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
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
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn-s-2 pd-2 pd-l-5 pd-r-5 flex-display"
                      style={{
                        borderRadius: 50,
                        backgroundColor: 'var(--theme-primary-color)',
                        display: 'table',
                        margin: 'auto'
                      }}
                    >
                      <strong style={{ fontWeight: 700, color: '#ffffff' }}>
                        AGENDAR
                      </strong>
                    </button>
                  </div>
                  <div className="card-footer" style={styles.cardFooter}>
                    <button
                      className="btn pd-5"
                      style={{ color: '#ffffff' }}
                      onClick={() => setIsModal(!isModal)}
                    >
                      Não, obrigado.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

const styles: any = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff17',
    width: '100%',
    height: '100%',
    zIndex: '9999',
    backdropFilter: 'blur(8px)'
  },
  container: {
    position: 'fixed',
    overflow: 'hidden',
    maxWidth: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '2px solid var(--theme-primary-color)',
    borderRadius: 10,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'url(/assets/img/patt-bg-amo.jpg)',
    boxShadow: '-4px 11px 12px 3px #f4a2a057'
  },
  header: {
    width: '100%',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
    cursor: 'pointer'
  },
  cardImage: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'var(--theme-secundary-color)'
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column'
  },
  columnsContent: { display: 'flex', justifyContent: 'space-evenly' },
  form: { width: '100%' },
  formContent: {
    display: 'block'
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
