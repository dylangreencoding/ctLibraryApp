
import { Link } from 'react-router-dom'


export default function Navbar() {
  



  return (
    <nav className='nav'>
      <div>
        <Link to='/' className='nav-link'>HOME</Link>
      </div>

        <div>
          <Link to='/data' className='nav-link'>DATA</Link>
        </div>
    </nav>
  )
}
