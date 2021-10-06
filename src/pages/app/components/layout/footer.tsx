import React, { useState } from 'react'

import { ArrowRightShort } from '@styled-icons/bootstrap'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--color-gray)' }}>
      <div className="footer-container container-xxl mg-t-5 mg-b-5">
        <div className="column-6 col-12">
          <div className="content">a</div>
        </div>
        <div className="column-6 col-12">
          <div className="content">
            <nav className="footer-nav">
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
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
