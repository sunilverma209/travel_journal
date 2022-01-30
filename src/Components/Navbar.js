import Logo from '../worldwide.png'


function Navbar(){

    return(
        <nav>
            <img src={`${Logo}`} /><span>My Travel Journal</span>
        </nav>
    )

}
export default Navbar