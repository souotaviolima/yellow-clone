import React, { useState } from 'react'

const Services: any = [
  {
    name: 'Drenagem',
    title: 'Drenagem Linfática',
    small:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sagittis magna.',
    image: '/assets/img/img-04-drenagem.png'
  },
  {
    name: 'Limpeza',
    title: 'Limpeza de pele',
    small:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sagittis magna.',
    image: '/assets/img/img-03-limpeza.png'
  },
  {
    name: 'Criolipólise',
    title: 'Criolipólise',
    small:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sagittis magna.',
    image: '/assets/img/img-05-crioli.png'
  },
  {
    name: 'Radiofrequência',
    title: 'Radiofrequência',
    small:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sagittis magna.',
    image: '/assets/img/img-02-radio.png'
  },
  {
    name: 'Preenchimento',
    title: 'Preenchimento labial',
    small:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sagittis magna.',
    image: '/assets/img/img-01-labial.png'
  }
]

type IService = [
  {
    name: string
    title: string
    small: string
    image: string
  }
]

export default function Index() {
  const [services, setServices] = useState<IService>(Services)

  return (
    <div className="content">
      <div className="row">
        <ul>
          {services.map((service, key) => (
            <li key={key} className="card-product-item-li">
              <div
                style={{
                  borderRadius: 23
                }}
              >
                <div className="content-column">
                  <div
                    className="mg-t-1"
                    style={{
                      width: '100%'
                    }}
                  >
                    <div
                      className="img pd-4"
                      style={{
                        width: '100%',
                        height: 350,
                        borderRadius: 10,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  </div>
                  <div
                    className="mg-t-3"
                    style={{
                      width: '100%'
                    }}
                  >
                    <h2
                      className="title-s-1"
                      style={{ color: 'var(--color-black)' }}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <div
                    className="mg-t-1"
                    style={{
                      width: '100%'
                    }}
                  >
                    <small
                      className="small-s-1 mg-b-1"
                      style={{ color: '#707070', fontSize: '0.8rem' }}
                    >
                      {service.small}
                    </small>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
