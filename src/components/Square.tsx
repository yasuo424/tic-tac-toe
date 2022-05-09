type SquareState = "O" | "X" | null;

type SquareProps = {
  value: SquareState;
  // onClick: () => void;
};

export const Square = (props: SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
