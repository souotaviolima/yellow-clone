import React, { useState } from 'react'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'

const DropdownItem = ({ title, row }: any) => {
  const [down, setDown] = useState(false)

  return (
    <nav className="nav-dropdown-menu-horizontal">
      <div className="dropdown-menu-horizontal">
        <li
          onClick={() => setDown(!down)}
          className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
          style={{
            borderRadius: 50,
            border: '1px solid #ddd'
          }}
        >
          Object mockups
          <ArrowIosDownwardOutline
            className={down ? 'animations-rotation-all mg-l-2' : 'mg-l-2'}
            fill="#000000"
            size="18px"
          />
        </li>
        <ul
          style={down ? { display: 'block' } : { display: 'none' }}
        >
          <div
            style={{ position: 'relative' }}
            className={down ? 'content-dropdown animations-scale-down' : 'content-dropdown'}
          >
            <li
              className={
                down
                  ? 'item-dropdown animations-dropdown-scale-item pd-b-3 pd-t-5 pd-7'
                  : 'item-dropdown pd-b-3 pd-t-5 pd-7'
              }
            >
              Object mockup
            </li>
            <li
              className={
                down
                  ? 'item-dropdown animations-dropdown-scale-item pd-b-3 pd-t-5 pd-7'
                  : 'item-dropdown pd-b-3 pd-t-5 pd-7'
              }
            >
              Creative Store
            </li>
            <li
              className={
                down
                  ? 'item-dropdown animations-dropdown-scale-item pd-b-4 pd-t-5 pd-7'
                  : 'item-dropdown pd-b-4 pd-t-5 pd-7'
              }
            >
              PNG Images
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default DropdownItem
