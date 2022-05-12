
import { Header } from "../../Header/Header"
import { Posts } from "../../Posts/Posts"
import { Sidebar } from "../../Sidebar/Sidebar"
import "./Home.css"
export const Home = () => {
  return (
    <div >
      <Header></Header>
        <div className='home'>
          <Posts></Posts>
          <Sidebar></Sidebar>
        </div>
 
      
    </div>
  )
}
