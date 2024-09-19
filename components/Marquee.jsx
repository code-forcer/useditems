import React from 'react'
export default function Marquee() {
  return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
          <p
            style={{
              display: 'inline-block',
              paddingLeft: '100%',
              animation: 'marquee 12s linear infinite',
              color: '#0ea4ff',
              fontFamily: "'Oswald', system-ui",
              padding: '5px',
              fontWeight:'bold'
            }}
          >
           Welcome to <span style={{color:'#ce1212',fontSize:'25px'}}>UsedItem.com</span>, the go-to marketplace for students at the Federal University of Technology Akure (FUTA) looking to buy or sell used items at unbeatable prices.
          </p>

          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
        </div>
  )
}
