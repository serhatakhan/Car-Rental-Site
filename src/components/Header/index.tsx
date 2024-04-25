import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img src="/bmw.png" alt="logo" width={60} />
        </Link>

        {/* title'ı string olarak gönderiyoruz. designs'ı, btnType'ı her zaman 
        göndermeyebiliriz o yüzden opsiyonel olsun. design içinde class gönderdik */}
        <CustomButton title="Kaydol" btnType="button" designs="min-w-[130px] hover:scale-95" />
      </nav>
    </header>
  );
};

export default Header;
