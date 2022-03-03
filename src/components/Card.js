export default function Card(props) {
  return (
    <div id={props.id} class="text-center rounded-sm bg-blue-crayola p-3 md:p-4 mx-4 md:mx-8 mb-8  w-40 md:w-64  md:h-80">
      <div class="card-img mt-2 md:mt-6 flex justify-center ">
        <img class="w-10 md:w-auto" src={props.img} alt="img" />
      </div>
      <div class="card-title my-4 text-lg md:text-2xl font-bold">{props.title}</div>
      <div class="card-body m-4">
        <p class="text-gray-400  text-sm md:text-lg">{props.body}</p>
      </div>
    </div>
  );
}