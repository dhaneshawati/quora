import React from 'react'
import "../styles/SideOptions.css";

const SideOptions = () => {
  return (
    <div className='sideOptions'>
      <div className="side_content">
        <img
            src="https://qph.cf2.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
            alt="Mobile App"
            />
            <h5>Which is the best mobile in the market?</h5>
      </div>
      <div className="side_content"> 
        <img
            src="https://qph.cf2.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg"
            alt="Stock Market"
            />
            <h5>How to invest in the stock market?</h5>
      </div>
    </div>
  )
}

export default SideOptions
