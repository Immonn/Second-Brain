import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/plus";
import { ShareIcon } from "./icons/Share";



function App() {
  const [modalOpen,SetModalOpen]=useState(true)
  return <div className="p-4">
    <CreateContentModal open={modalOpen} onclose={() => { SetModalOpen(false)}}/>
    <div className="flex justify-end gap-4">
        <Button variant="Primary" onClick={()=>SetModalOpen(true)} text="Add Content" startIcon={<PlusIcon />} size="md"></Button>
        <Button variant="Secondary" text="Share Brain" startIcon={<ShareIcon />} size="md"></Button>
    </div>
    <div className="flex item gap-4 mt-10">
      <Card type="youtube" link="https://www.youtube.com/embed/08WDvRbyQaY" title="Hitesh"></Card>
      <Card type="x" link="https://x.com/arsh_goyal/status/2017090360342880432?s=20" title="elon"></Card>
    </div>
  </div>
}

export default App;



