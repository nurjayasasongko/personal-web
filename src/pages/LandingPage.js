import { TransparentBtn, ColorBtn } from "../components/Button";
import back from "../assets/back-me.png";
import github from '../assets/svg/github.svg'
import linkedin from '../assets/svg/linkedin.svg'

export default function LandingPage() {
  return (
    <div class="flex flex-col justify-center items-center space-y-2">
      <div class="item w-full h-1/2 text-white text-center p-5 mt-5">
        <p class="text-lg font-semibold">Hello I'm</p>
        <h1 class="text-4xl mb-2 font-ubuntu font-bold">
          Abdul Fattah Nurjaya Sasongko
        </h1>
        <p class="text-base text-zinc-400">Fullstack Developer</p>
      </div>
      <div class="item w-auto h-1/2">
        <TransparentBtn text="Download CV" className="mr-4" />
        <ColorBtn text="Lets Talk" />
      </div>
      <div class="flex justify-between items-center space-y-2">
        <div class="item w-1/4 h-1/3 translate-y-20">
          <a href='https://github.com/nurjayasasongko'>
            <img src={github} alt="github" class='fill-blue-jeans mb-5' />
          </a>
          <a href='https://www.linkedin.com/in/nurjayasasongko/'>
          <img src={linkedin} alt="linkedin"/>
          </a>
        </div>
        <div class="item w-[670px] h-auto">
          <img src={back} alt="me"/>
        </div>
        <div class="item w-1/4 h-auto">
          <p class='text-blue-jeans translate-y-32 rotate-90'>Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
