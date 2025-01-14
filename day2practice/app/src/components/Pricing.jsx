import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
        <table style={{ width: '100%', border: '1px solid black', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                <th style={{ border: '1px solid black', padding: '10px', textAlign: 'left' }}>Service</th>
                <th style={{ border: '1px solid black', padding: '10px', textAlign: 'left' }}>Fees</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{ border: '1px solid black', padding: '10px' }}>Web Development</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>$500</td>
                </tr>
                <tr>
                <td style={{ border: '1px solid black', padding: '10px' }}>Graphic Design</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>$300</td>
                </tr>
                <tr>
                <td style={{ border: '1px solid black', padding: '10px' }}>SEO Optimization</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>$200</td>
                </tr>
                <tr>
                <td style={{ border: '1px solid black', padding: '10px' }}>Content Writing</td>
                <td style={{ border: '1px solid black', padding: '10px' }}>$150</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Pricing