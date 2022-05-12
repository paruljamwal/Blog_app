import { Sidebar } from '../../Sidebar/Sidebar'
import { Singlepost } from '../../Singlepost/Singlepost'
import './single.css'

export const Single = () => {
  return (
    <div className='single'>
      <Singlepost></Singlepost>
      <Sidebar></Sidebar>
    </div>
  )
}
