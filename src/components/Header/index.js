import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        className="jobby-logo"
        alt="website logo"
      />
      <div className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/jobs">
            Jobs
          </Link>
        </li>
      </div>

      <div className="button-container">
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default withRouter(Header)
