import React, { useEffect, useState } from 'react'

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
                    src={image}
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
                    {title}
                  </h2>
                </div>
                <div className="card-content pd-6" style={{ width: '100%' }}>
                  {children}
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
  }
}
