
export interface CreateButtonProps {
    text: string;
    className?: string;
    handleClick: () => void;
}

const CreateButton = ({ text, handleClick, className } : CreateButtonProps) => {
  return (
    <button className={className} onClick={() => handleClick()}>
        {text}
    </button>
  );
}

export default CreateButton;
