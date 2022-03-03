function Input(props) {
  return (
    <div className="relative">
      <input
        onChange={props.onChange}
        className={`p-2 w-20 bg-background text-gray-300 rounded-md border-2 border-gray-500 focus:outline-none focus:border-2 focus:border-blue-jeans focus:text-blue-jeans ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onInput={props.onInput}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.children}
    </div>
  );
}

function DirectLink(props) {
  return (
    <p className="text-center text-gray-400 mt-4 text-sm">
      {props.text}
      <button
        type="button"
        onClick={props.onClick}
        className="font-bold text-red-700"
      >
        {props.textLink}
      </button>
    </p>
  );
}

export { Input, DirectLink };
