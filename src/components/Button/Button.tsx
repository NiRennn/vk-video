import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  btnGoal?: string;
};

export default function Button({ text, onClick, btnGoal }: ButtonProps) {
  const sendMainButtonGoal = () => {
    if (!window._tmr) return;

    window._tmr.push({
      id: "3718190",
      type: "reachGoal",
      goal: btnGoal,
    });
  };

  const handleClick = () => {
    sendMainButtonGoal();
    onClick?.();
  };

  return (
    <button className="Button" onClick={handleClick}>
      <p>{text}</p>
      <img src="/icons/button-icon.svg" alt="" />
    </button>
  );
}
