import './App.css'
import Navbar from './components/navbar/Navbar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import ExplorerTree from './components/tree/ExplorerTree'
import Canvas from './components/canvas/Canvas'
import useFetchFs from './hooks/useFetchFs';
import { useEffect } from 'react'

function App() {

  const fetch = useFetchFs();
  
  useEffect(() => {
    fetch("root");
  },[]);
  
  return (
    <div className="h-screen w-full">
      <Navbar />
      <ResizablePanelGroup direction="horizontal" className='border-secondary border-t-2 !h-[calc(100vh-52px)]'>
        <ResizablePanel defaultSize={20} minSize={10} collapsible>
          <ExplorerTree />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <Canvas />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default App
