import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../firebase/firebase.js'
import { faGear, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faFolderTree } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import bg from './bg.png'
import Tab from './tab'
import LogIn from '../logIn'
const Home = ({user, setUser}) => {

    return (
        <>
        {user?(
                    <>
                    <div className='homePage'>
                <img src={bg} alt="background"/>

                <div >
                    <Tab data={["clients", faUserGroup]}/>
                    <Tab data={["Sites", faDisplay]}/>
                    <Tab data={["Repos", faFolderTree]}/>
                    <Tab data={["Account", faGear]}/>
                    <Tab data={["Resources", faLightbulb]}/>
                    <Tab data={["Our Team", faPeopleGroup]}/>
                </div>
            </div>
                    </>
                ):(
                    <>
                    <LogIn setUser={setUser}/>
                    </>
                )}

        </>
    )
}

export default Home
