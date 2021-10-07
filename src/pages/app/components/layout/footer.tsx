import React, { useState } from 'react'

import { ArrowRightShort } from '@styled-icons/bootstrap'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--color-gray)' }}>
      <div className="footer-container container-xxl mg-t-5 mg-b-5 pd-t-5 pd-b-5">
        <div className="column-6 col-12">
          <div className="content">a</div>
        </div>
        <div className="column-6 col-12">
          <div className="content">
            <nav className="footer-nav">
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Legal</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Legal</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
              </div>
              <div className="footer-nav-col">
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Legal</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
                <ul>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <b>Markets</b>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Terms & Conditions</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Licenses</a>
                  </div>
                  <div className="footer-menu-item pd-3 pd-l-5 pd-r-5">
                    <a href="#">Copyright Notice & Disclaimer</a>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div style={{ clear: 'both' }} />

      <div
        className="footer-copyright"
        style={{ borderTop: '1px solid #dddddd' }}
      >
        <div className="footer-container container-xxl pd-t-5 pd-b-5">
          <div className="column-6 col-12">
            <div className="content footer-logo">
              <div className="logo-header">
                <img
                  src="/assets/img/unnamed.jpg"
                  alt="Picture of the author"
                  width="40px"
                />
              </div>
            </div>
          </div>
          <div className="column-6 col-12">
            <div className="content footer-copyright-text responsive-align">
              <small>
                <b style={{ color: '#000', fontWeight: 900 }}>
                  Make your idea matter!
                </b>{' '}
                Trademarks and brands are the property of their respective
                owners.
                <br />© 2015–2021 Yellow Images Inc. Vancouver, BC, Canada.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
