import './Button.scss'

type ButtonProps = {
  text: string;
  onClick? : () => void;
}

export default function Button({text,onClick }: ButtonProps) {
  return (
    <button className='Button' onClick={onClick}>
        <p>{text}</p>
        <img src="/icons/button-icon.svg" alt="" />
    </button>
  )
}

 