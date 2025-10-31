function Button() {
  return (
    <button
      className={styles.BUTTON}
      onClick={() => {
        navigate(Route);
      }}
    >
      Next
    </button>
  );
}

export default Button;
