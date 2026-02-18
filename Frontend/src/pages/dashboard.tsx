import {  useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { CreateContentModal } from "../components/CreateContentModal"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ShareIcon } from "../icons/Share"
import { PlusIcon } from "../icons/plus"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { Magnify } from "../icons/Magnify"
import { Find } from "../components/Find"
import { useNavigate } from "react-router-dom"




export function Dashboard() {
  const [modalOpen, SetModalOpen] = useState(false)
  const [findOpen,setFindOpen]=useState(false)
  const contents = useContent()
  const navigate=useNavigate()
  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="p-4 lg:ml-72 ml-0 bg-main min-h-screen border-2 border-gray-200 ">
        <CreateContentModal open={modalOpen} onclose={() => { SetModalOpen(false) }} />
        <Find open={findOpen} onclose={() => { setFindOpen(false) }}/>
        <div className="flex justify-end gap-4 pt-5">
          <Button variant="Primary" onClick={() => SetModalOpen(true)} text="Add Content" startIcon={<PlusIcon />} size="md"></Button>
          <Button variant="Primary" onClick={() => setFindOpen(true)} text="Find Brain" startIcon={<Magnify/>} size="md"></Button>
          <Button onClick={async ()=>{
            const response=await axios.post(`${BACKEND_URL}/link/share`,{
              share:"yes"
            },{
              headers:{
                token:localStorage.getItem("token")
              }
            })
            const url=`${response.data.hash}`
            alert(url)
          }} variant="Secondary" text="Share Brain" startIcon={<ShareIcon />} size="md"></Button>
          <Button variant="logout" size="sm" text="Log Out" onClick={()=>navigate("/")}></Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
          {contents.map(({ _id, type, link, title }) => (
            <Card key={link + title} id={_id} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}