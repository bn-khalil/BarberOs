
import logo from '../assets/main-logo.png'
import { PATHS } from '../routes/paths'

function SideBar() {
  return (
    <div className='w-1/5 h-[98%] bg-main m-2 '>
        <img src={logo} className='w-25' alt="" />
        <ul>
            <li>
                <a href={PATHS.HOME}>Home</a>
            </li>
            <li>Services</li>
            <li>Barbers</li>
            <li>Clients</li>
            <li>Appointments</li>
        </ul>
    </div>
  )
}

export default SideBar