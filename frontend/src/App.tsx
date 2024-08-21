import './App.css'
import Navbar from './components/navbar/Navbar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import ExplorerTree from './components/tree/ExplorerTree'

function App() {

  return (
    <div className="h-screen w-full">
      <Navbar />
      <ResizablePanelGroup direction="horizontal" className='border-secondary border-t-2'>
        <ResizablePanel defaultSize={20} minSize={10} collapsible>
          <ExplorerTree />
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default App
