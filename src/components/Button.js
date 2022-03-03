function ColorBtn(props) {
  return (
    <button
      class={` p-2 rounded-md text-background bg-blue-jeans border-2 border-blue-jeans hover:bg-white text-background ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function TransparentBtn(props) {
  return (
    <button
      class={` p-2 rounded-md text-blue-jeans bg-background border-2 border-blue-jeans hover:bg-white text-blue-jeans ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export { ColorBtn, TransparentBtn };
