import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Ingredients } from "./components/Ingredients"
import { Instructions } from "./components/Instructions"
import { Nutrition } from "./components/Nutrition"
import { Prep } from "./components/Prep"


function App() {

  return (
    <>
      <main className="flex justify-center items-center w-full h-screen my-[200px] md:my-[250px]">
        <div className="flex flex-col justify-center items-start w-[450px] p-6 rounded-md overflow-hidden bg-white">
          <Hero />
          <Prep />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
