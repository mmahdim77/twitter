import './button.styles.css';

function CustomButton({icon , text , ...otherprops}) {
  return (
      <div className="custom-button">
          <img src={icon}></img>
          <span>{text}</span>
      </div>
  );
}

export default CustomButton;
