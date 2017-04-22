import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'
import g from '../styles/g'
import breakpoints from '../styles/breakpoints'
import elevations from '../styles/elevations'

export const MenuItem = ({children, ...other}) => (
  <div className='root' {...other}>
    <Ripples>
      <div className='inner subheading'>
        {children}
      </div>
    </Ripples>
    <style jsx>
      {
        `
        .inner {
          padding: 14px 0px 14px ${g(4)};
        }

        @media ${breakpoints.ml} {
          .inner {
            padding: 6px 0px 6px ${g(6)};
          }

          .dense .inner {
            padding: 2px 0 2px ${g(6)};

            font-size: 13px;
          }
        }
    `
      }
    </style>
  </div>
)

MenuItem.propTypes = {
  children: PropTypes.node,
}

const Menu = ({children, width, dense, style, ...other}) => (
  <div
    className={dense && 'dense'}
    style={{minWidth: width * 56, ...style}}
    {...other}
  >
    {children}
    <style jsx>
      {
        `
      div {
        padding: ${g(2)} 0;

        ${elevations.dp8}
      }


      @media ${breakpoints.ml} {
        .dense {
          padding: ${g(1)} 0;
        }
      }
    `
      }
    </style>
  </div>
)

Menu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  width: PropTypes.number,
  dense: PropTypes.bool,
}

Menu.defaultProps = {
  style: {},
  width: 2,
}

export default Menu
