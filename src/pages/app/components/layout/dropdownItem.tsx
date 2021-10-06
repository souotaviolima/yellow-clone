import React, { useState } from 'react'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'

const DropdownItem = ({ title, row }: any) => {
  const [down, setDown] = useState(false)

  return (
    <nav>
      <div className="dropdown-menu-horizontal">
        <li
          onClick={() => setDown(!down)}
          className="btn-s-2 pd-3 pd-l-5 pd-r-5 flex-display mg-1"
          style={{
            borderRadius: 50,
            border: '1px solid #ddd'
          }}
        >
          Join Now
          <ArrowIosDownwardOutline
            className="mg-l-2"
            fill="#000000"
            size="18px"
          />
        </li>

        <ul
          className={
            down
              ? 'content-dropdown animations-dropdown-scale-content'
              : 'content-dropdown'
          }
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
        </ul>
      </div>
    </nav>
  )
}

export default DropdownItem
