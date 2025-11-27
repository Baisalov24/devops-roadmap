import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/home/Home"
import RoadMap from "./pages/roadMap/RoadMap"
import Progress from "./pages/progress/Progress"
import Practice from "./pages/practice/Practice"
import Projects from "./pages/projects/Projects"
import Network from "./tools/network/Network"
import Linux from "./tools/linux/Linux"
import AWS from "./tools/aws/AWS"
import Docker from "./tools/docker/Docker"
import Kubernetes from "./tools/kubernetes/Kubernetes"
import Terraform from "./tools/terraform/Terraform"
import Kafka from "./tools/kafka/Kafka"
import GitActions from "./tools/githubActions/GitActions"


function App() {

  return (
  <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/roadMap" element={<RoadMap/>} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/practice" element={<Practice/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/network" element={<Network/>} />
      <Route path="/linux" element={<Linux/>} />
      <Route path="/aws" element={<AWS/>} />
      <Route path="/docker" element={<Docker/>} />
      <Route path="/kubernetes" element={<Kubernetes/>} />
      <Route path="/terraform" element={<Terraform/>} />
      <Route path="/kafka" element={<Kafka/>} />
      <Route path="/githubActions" element={<GitActions/>} />
    </Routes>
    
  </div>
  )
}

export default App
