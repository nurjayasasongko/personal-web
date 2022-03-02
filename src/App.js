import { ColorButton, TransparentBtn } from "./components/Button";
import { Input } from "./components/Form";

function App() {
  return (
    <div class='bg-background w-full h-screen font-poppins'>
      <h1 class='text-blue-jeans text-center text-2xl font-poppins'>Nurjaya Sasongko</h1>
      <div class='flex justify-center my-5'>
        <ColorButton text='Lets Talk' className='mr-2'/>
        <TransparentBtn text='Download CV'/>
      </div>
      <div class='flex justify-center'>
        <Input />
      </div>
    </div>
  );
}

export default App;
