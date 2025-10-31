function Dark_Button({ text, font, px, py }) {
  return (
    <button
      type="submit"
      className={`bg-black text-white ${font} w-fit rounded-sm cursor-pointer font-semibold`}
      style={{ padding: `${py}rem ${px}rem` }}
    >
      {text}
    </button>
  );
}

export default Dark_Button;
