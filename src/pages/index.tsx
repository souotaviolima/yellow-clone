import React, { useState } from 'react'

import Wrap from '../components/layout/wrap'
import GridMenu from '../components/layout/gridMenu'

import Products from '../components/widgets/products'

export default function Index() {
  return (
    <Wrap>
      <div className="container-xxl mg-t-5 mg-b-5">
        <GridMenu />
      </div>
      <div className="mg-t-6 mg-b-6">
        <span
          style={{
            display: 'block',
            height: 60,
            background: 'url(/assets/img/patt-bg-amo.jpg)',
            backgroundSize: 'auto 100%',
            boxShadow: '-4px 11px 12px 3px #f4a2a057'
          }}
        />
      </div>

      <div className="container-xxl mg-t-5 mg-b-5">
        <Products />
      </div>
    </Wrap>
  )
}
