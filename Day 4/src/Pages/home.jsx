import Navbars from "../Components/Navbar"
import Slideshow from "../Components/Slider"
import TopBar from "../Components/topbar"
import Sale from "../Components/sale"
import NewArrivals from "../Components/NewArrivals/NewArrivals"
import YearProduct from "../Components/YearProduct"
const Home=()=>{
    return(
        <div className="w-full bg-white">
            <Navbars/>
            <Slideshow/>
            <TopBar/>
            <Sale/>
            <NewArrivals name={'New Arrivals'}/>
            <NewArrivals name={'Best Seller'}/>
            <YearProduct/>
            <NewArrivals name={'Special Offers'}/> 
        </div>
    )
}
export default Home