import React, { useState } from 'react'

import { ArrowRightShort } from '@styled-icons/bootstrap'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--color-gray)' }}>
      <div className="container-xxl mg-t-5 mg-b-5">
        <div className="content">
          <div className="column-lg">
            <div
              className="card-primary card-light mg-4 mg-t-1"
              style={{ backgroundColor: 'var(--color-gray)', borderRadius: 23 }}
            >
              <div className="card-header mg-6 mg-b-1">
                <h2
                  className="title-s-1"
                  style={{ color: 'var(--color-black)' }}
                >
                  Início
                </h2>
                <img
                  src="/assets/icons/home_icon.svg"
                  height="25px"
                  className="pd-r-2"
                />
              </div>
              <div className="card-content mg-l-6 mg-b-6  mg-r-6">
                <div style={{ width: '100%' }}>
                  <div className="mg-b-5">
                    <h2
                      className="title-s-2 mg-b-1"
                      style={{ color: 'var(--color-black)' }}
                    >
                      Lorem Ipsum is simply <br />
                      dummy text of the printing.
                    </h2>
                  </div>
                  <div className="mg-b-5">
                    <img src="https://cdn.yellowimages.com/images/illustrations/tile_market-om-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-lg">
            <div
              className="card-primary card-light mg-4 mg-t-1"
              style={{ backgroundColor: 'var(--color-gray)', borderRadius: 23 }}
            >
              <div className="card-header mg-6 mg-b-1">
                <h2
                  className="title-s-1"
                  style={{ color: 'var(--color-black)' }}
                >
                  Início
                </h2>
                <img
                  src="/assets/icons/home_icon.svg"
                  height="25px"
                  className="pd-r-2"
                />
              </div>
              <div className="card-content mg-l-6 mg-b-6  mg-r-6">
                <div style={{ width: '100%' }}>
                  <div className="mg-b-5">
                    <h2
                      className="title-s-2 mg-b-1"
                      style={{ color: 'var(--color-black)' }}
                    >
                      Lorem Ipsum is simply <br />
                      dummy text of the printing.
                    </h2>
                  </div>
                  <div className="mg-b-5">
                    <img src="https://cdn.yellowimages.com/images/illustrations/tile_market-om-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-lg">
            <strong>Market</strong>
            <ul>
              <li>link</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
