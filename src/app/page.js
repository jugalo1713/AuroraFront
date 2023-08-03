import { BackgroundImage } from "./Components/BackgroundImage"
import BackgroundImageVessel from '../../public/container-vessel.jpg'
import { LoginForm } from "./Components/LoginForm"



export default function Home() {
  return (
    <main>
      <BackgroundImage 
        imgSrc={BackgroundImageVessel}
        alt={"Vessel in the sea"}
        imgOpacity={'u-image-opacity-height'}
      />
      <LoginForm />
    </main>
  )
}
