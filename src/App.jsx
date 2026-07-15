import GuessCharacter from "./pages/GuessCharacter"

function App() {
  return (
    <div style={{backgroundImage: "url(/src/assets/745138-1920x1080-desktop-full-hd-hunter-x-hunter-wallpaper.jpg)"}} className="bg-cover bg-center h-screen w-screen">
      <div className="absolute inset-0 bg-[#111316]/70 z-0"></div>
      <div className="relative z-10">
        <GuessCharacter  />
      </div>
    </div>
  )
}

export default App
