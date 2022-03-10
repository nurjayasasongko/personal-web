import { ColorBtn } from "../components/Button";
import me from "../assets/popout.png";
import Card from "../components/Card";

export default function AboutMe() {
  return (
    <div class="bg-background w-full h-screen text-center">
      <p class="text-medium font-medium  text-zinc-400">Get To Know</p>
      <h1 class="text-4xl font-ubuntu font-bold text-blue-jeans mb-10">About Me</h1>
      <div class="grid overflow-hidden grid-cols-3 grid-rows-2 gap-0 gap-x-3">
        <div class="box row-start-1 row-end-3 w-[300px]">
          <img src={me} alt="me" class="items-center" />
        </div>
        <div class="box col-start-2 col-end-4 flex justify-between items-center">
          <Card
            class="item w-1/3 h-1/3"
            title="Email"
            body="afnurjayas@gmail.com"
          />
          <Card class="item w-1/3 h-1/3" title="WhatsApp" body="082143666376" />
          <Card
            class="item w-1/3 h-1/3"
            title="Location"
            body="Tangerang Selatan"
          />
        </div>
        <div class="box col-start-2 col-end-4 p-5 text-white">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ColorBtn text="Lets Talk" class="mt-2" />
        </div>
      </div>
    </div>
  );
}
