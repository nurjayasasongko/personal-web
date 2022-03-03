import { TransparentBtn, ColorBtn } from "../components/Button";
import me from "../assets/me.png";
import github from '../assets/svg/github.svg'
import linkedin from '../assets/svg/linkedin.svg'

export default function LandingPage() {
  return (
    <div class="flex flex-col justify-center items-center space-y-2">
      <div class="item w-full h-1/2 text-white text-center p-5">
        <p class="text-lg">Hello I'm</p>
        <h1 class="text-4xl mt-2 mb-4 font-bold">
          Abdul Fattah Nurjaya Sasongko
        </h1>
        <p class="text-lg">Fullstack Developer</p>
      </div>
      <div class="item w-auto h-1/2">
        <TransparentBtn text="Download CV" className="mr-4" />
        <ColorBtn text="Lets Talk" />
      </div>
      <div class="flex justify-between items-center space-y-2">
        <div class="item w-1/4 h-1/3">
          <img src={github} alt="github" class='fill-blue-jeans' />
          <img src={linkedin} alt="linkedin" />
        </div>
        <div class="item w-[700px] h-auto">
          <img src={me} alt="me" />
        </div>
        <div class="item w-1/4 h-auto">
          <p class='text-blue-jeans translate-y-40 rotate-90'>Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
