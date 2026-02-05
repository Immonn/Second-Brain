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




export function Dashboard() {
  const [modalOpen, SetModalOpen] = useState(false)
  const contents = useContent()
  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="p-4 ml-72 bg-main min-h-screen border-2 border-gray-200 ">
        <CreateContentModal open={modalOpen} onclose={() => { SetModalOpen(false) }} />
        <div className="flex justify-end gap-4 pt-5">
          <Button variant="Primary" onClick={() => SetModalOpen(true)} text="Add Content" startIcon={<PlusIcon />} size="md"></Button>
          <Button onClick={async ()=>{
            const response=await axios.post(`${BACKEND_URL}/link/share`,{
              share:"yes"
            },{
              headers:{
                token:localStorage.getItem("token")
              }
            })
            const url=`http://localhost:5173/share/${response.data.hash}`
            alert(url)
          }} variant="Secondary" text="Share Brain" startIcon={<ShareIcon />} size="md"></Button>
        </div>
        <div className="flex item gap-4 mt-10 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card key={link + title} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}