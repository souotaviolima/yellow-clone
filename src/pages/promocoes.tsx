import React from 'react'

import Wrap from '../components/layout/wrap'
import HeaderPage from '../components/layout/headerPage'

const promotions: any = [
  { title: 'Dê adeus aos vasinhos', small: '', image: '/assets/img/vasos.jpg' },
  { title: 'Pescoço e Colo', small: '', image: '/assets/img/colo.jpg' },
  {
    title: 'Protocolos especiais Estrias',
    small: '',
    image: '/assets/img/estrias.jpg'
  }
]

export default function Index() {
  return (
    <Wrap>
      <HeaderPage title="Promoções" small="Veja as promoções da amo"/>
      <div className="container-xxl before after">
        <div className="columns">
          {promotions.map((promo: any, key: number) => (
            <div key={key} className="column-4 col-12">
              <div className="content pd-5" style={styles.card}>
                <img
                  src={promo.image}
                  title={promo.title}
                  style={styles.cardImage}
                />
              </div>
              <div className="content pd-5" style={styles.card}>
                <a
                  className="btn-s-2 pd-4 pd-l-5 pd-r-5 flex-display mg-1"
                  style={styles.cardCta}
                >
                  <strong style={{ fontWeight: 900, color: '#ffffff' }}>
                    Aproveitar oferta
                  </strong>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    </Wrap>
  )
}

const styles: any = {
  card: { display: 'block', width: '100%' },
  cardImage: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    borderRadius: 10
  },
  cardCta: {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'var(--theme-primary-color)'
  }
}
