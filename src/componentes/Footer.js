import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="row  footer-text">
            <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Cochabamba - Bolivia
            </p>
        </div>
    </div>
  )
}
