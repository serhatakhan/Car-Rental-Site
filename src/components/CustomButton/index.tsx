import { ButtonProps } from "../../types";

const CustomButton = ({ title, btnType, designs, rIcon, handleClick }: ButtonProps) => {
  return (
    // type={btnType || "button"} -> butonunun tipi btnType olsun yoksa tipi "button" olsun
    <button
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn bg-blue-700 rounded-full hover:bg-blue-800 transition text-white ${designs}`}
      // ${designs} -> bu classlara ek olarak ekstardan dışardan gönderdiğmiiz classlar varsa onları da al
    >
      <span>{title}</span>
      {/* rIcon varsa img bas src'sine rIcon'u. */}
      {rIcon && ( <div className="relative w-6 h-6"> <img src={rIcon} /> </div> )}
    </button>
  );
};

export default CustomButton;
