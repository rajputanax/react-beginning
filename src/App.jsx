import ConditionalRendering from "./components/ConditionalRendering"
import Filtered from "./components/Filtered"
import Home from "./components/Home"

function App() {
  const data=[
    {
    id:1,
    name:"anas"
  },
    {
    id:1,
    name:"Naveed"
  },
    {
    id:1,
    name:"mub"
  },
    {
    id:1,
    name:"amir"
  },
]
let name="Anas"
  return (
    <>
     {/* <h1>{2+2}</h1>
     <h2>Hello {name}</h2>
    { data.map(name=>(
      <Home />
    ))
    } */}
    {/* <ConditionalRendering/> */}
    <Filtered/>
    </>
  )
}

export default App
