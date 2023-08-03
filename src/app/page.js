import { BackgroundImage } from "./Components/BackgroundImage"
import BackgroundImageVessel from '../../public/container-vessel.jpg'
import { LoginForm } from "./Components/LoginForm"

export const metadata = {
  title: 'Aurora - Login',
  description: 'Login page to Aurora',
}

export default function Home() {
  return (
    <main>
      <BackgroundImage 
        imgSrc={BackgroundImageVessel}
        alt={"Vessel in the sea"}
        imgOpacity={'u-image-opacity-small'}
      />
      <LoginForm />
    </main>
  )
}
