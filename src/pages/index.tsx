import React, { useState } from 'react'
import Wrap from './app/components/layout/wrap'
import Products from './app/components/widgets/products'

import { ArrowRightShort } from '@styled-icons/bootstrap'

export default function Index() {
  return (
    <Wrap>
      <div className="container-xxl mg-t-5 mg-b-5">
        <div className="content">
          <div className="column-4 col-12">
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
                    <img src="/assets/img/tile_market-om-1.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-8">
            <div className="column-6">
              <div
                className="card-primary card-light mg-4 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
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
                <div className="card-content mg-l-6 mg-b-1 mg-r-5">
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
                    <div className="mg-b-5 between-display">
                      <button
                        type="submit"
                        className="btn btn-primary pd-1"
                        style={{
                          display: 'flex',
                          backgroundColor: 'var(--color-black)',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#ffffff"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div
                className="card-primary card-light mg-4 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
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
                <div className="card-content mg-l-6 mg-b-1 mg-r-5">
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
                    <div className="mg-b-5 between-display">
                      <button
                        type="submit"
                        className="btn btn-primary pd-1"
                        style={{
                          display: 'flex',
                          backgroundColor: 'var(--color-black)',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#ffffff"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div
                className="card-primary card-light mg-4 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
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
                <div className="card-content mg-l-6 mg-b-1 mg-r-5">
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
                    <div className="mg-b-5 between-display">
                      <button
                        type="submit"
                        className="btn btn-primary pd-1"
                        style={{
                          display: 'flex',
                          backgroundColor: 'var(--color-black)',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#ffffff"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-6">
              <div
                className="card-primary card-light mg-4 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
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
                <div className="card-content mg-l-6 mg-b-1 mg-r-5">
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
                    <div className="mg-b-5 between-display">
                      <button
                        type="submit"
                        className="btn btn-primary pd-1"
                        style={{
                          display: 'flex',
                          backgroundColor: 'var(--color-black)',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#ffffff"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both' }} />
        <div className="content">
          <div className="header-section mg-3 mg-t-6 mg-b-6 responsive-align">
            <div className="content-header-section" style={{ display: 'flex' }}>
              <div className="content-header mg-r-5">
                <img
                  style={{ width: 45, height: 45 }}
                  src="/assets/img/om.svg"
                />
              </div>

              <div className="content-header">
                <h2 className="title-s-2">
                  Freshly baked object mockups
                  <br />
                  and 3D Models / 58558 items
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="column-4">
              <div
                className="card-primary card-light mg-2 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
              >
                <div className="card-content mg-l-6 mg-b-1 mg-r-6">
                  <div style={{ width: '100%' }} className="between-display">
                    <div className="mg-b-5 mg-t-6">
                      <h2
                        className="title-s-2 mg-b-1"
                        style={{ color: 'var(--color-black)' }}
                      >
                        Lorem Ipsum is simply <br />
                        dummy text of the printing.
                      </h2>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'flex',
                          backgroundColor: 'transparent',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#3F3F3F"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                    </div>
                    <div className="mg-b-5 mg-t-5">
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div
                className="card-primary card-light mg-2 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
              >
                <div className="card-content mg-l-6 mg-b-1 mg-r-6">
                  <div style={{ width: '100%' }} className="between-display">
                    <div className="mg-b-5 mg-t-6">
                      <h2
                        className="title-s-2 mg-b-1"
                        style={{ color: 'var(--color-black)' }}
                      >
                        Lorem Ipsum is simply <br />
                        dummy text of the printing.
                      </h2>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'flex',
                          backgroundColor: 'transparent',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#3F3F3F"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                    </div>
                    <div className="mg-b-5 mg-t-5">
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div
                className="card-primary card-light mg-2 mg-t-1"
                style={{
                  backgroundColor: 'var(--color-gray)',
                  borderRadius: 23
                }}
              >
                <div className="card-content mg-l-6 mg-b-1 mg-r-6">
                  <div style={{ width: '100%' }} className="between-display">
                    <div className="mg-b-5 mg-t-6">
                      <h2
                        className="title-s-2 mg-b-1"
                        style={{ color: 'var(--color-black)' }}
                      >
                        Lorem Ipsum is simply <br />
                        dummy text of the printing.
                      </h2>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'flex',
                          backgroundColor: 'transparent',
                          borderRadius: 30,
                          minWidth: '3rem'
                        }}
                      >
                        <ArrowRightShort
                          fill="#3F3F3F"
                          size="35px"
                          style={{ marginTop: -3 }}
                        />
                      </button>
                    </div>
                    <div className="mg-b-5 mg-t-5">
                      <img
                        style={{ height: 100 }}
                        src="/assets/img/tile_market-cs-1.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both' }} />
        <Products />
        <div style={{ clear: 'both' }} />
        <div className="content mg-t-7">
          <div className="column-6">
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
              </div>
              <div className="card-content mg-l-6 mg-b-1 mg-r-6">
                <div style={{ width: '100%' }} className="between-display">
                  <div className="mg-b-5">
                    <h2
                      className="title-s-2 mg-b-1"
                      style={{ color: 'var(--color-black)' }}
                    >
                      Lorem Ipsum is simply <br />
                      dummy text of the printing.
                    </h2>
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        backgroundColor: 'var(--color-black)',
                        borderRadius: 30,
                        minWidth: '8rem'
                      }}
                    >
                      Join Now
                    </button>
                  </div>
                  <div className="mg-b-5">
                    <img
                      style={{
                        height: 192,
                        position: 'relative',
                        right: -64,
                        bottom: -25
                      }}
                      src="/assets/img/tile_affiliate.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-6">
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
              </div>
              <div className="card-content mg-l-6 mg-b-1 mg-r-6">
                <div style={{ width: '100%' }} className="between-display">
                  <div className="mg-b-5">
                    <h2
                      className="title-s-2 mg-b-1"
                      style={{ color: 'var(--color-black)' }}
                    >
                      Lorem Ipsum is simply <br />
                      dummy text of the printing.
                    </h2>
                    <button
                      type="submit"
                      className="btn btn-primary pd-1"
                      style={{
                        backgroundColor: 'var(--color-black)',
                        borderRadius: 30,
                        minWidth: '8rem'
                      }}
                    >
                      Join Now
                    </button>
                  </div>
                  <div className="mg-b-5">
                    <img
                      style={{
                        height: 192,
                        position: 'relative',
                        right: -64,
                        bottom: -25
                      }}
                      src="/assets/img/tile_affiliate.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ clear: 'both' }} />
      </div>
    </Wrap>
  )
}
