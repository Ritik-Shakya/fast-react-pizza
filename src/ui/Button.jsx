function Button({ children, disabled = false, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-all hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 text-xs py-2 md:px-5 md:py-2.5",
    round: base + "px-2.5 text-xs py-1.5 md:px-3 md:py-2",
    secondary:
      "inline-block text-sm ml-2 rounded-full border-2 border-stone-300 font-semibold uppercase text-stone-800 transition-all hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-500 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
