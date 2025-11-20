import './Button.scss'

type ButtonProps = {
  text: string;
  onClick? : () => void;
}

export default function Button({text,onClick }: ButtonProps) {

  const sendMainButtonGoal = () => {
  if (!window._tmr) return;

  window._tmr.push({
    id: "3718190",
    type: "reachGoal",
    goal: "mainButtonOpenModal",
  });
};

  const handleClick = () => {
    sendMainButtonGoal();
    onClick?.();
  };

  return (
    <button className='Button' onClick={handleClick}>
        <p>{text}</p>
        <img src="/icons/button-icon.svg" alt="" />
    </button>
  )
}
 
 