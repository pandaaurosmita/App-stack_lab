import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <p>Copyright © 2024 Way2News Private Limited. All rights reserved.</p>
            <div>
                <a href="/terms" style={{ margin: '0 10px' }}>Terms & Conditions</a>
                <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
                <a href="/grievance" style={{ margin: '0 10px' }}>Grievance</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer
