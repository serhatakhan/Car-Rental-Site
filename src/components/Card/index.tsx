import { useState } from "react";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import { motion } from 'framer-motion';
import DetailModel from "./DetailModel";
import { CarType } from "../../types";
import { generateImage } from "../../utils";

type CardProps = {
  car:CarType
}

const Card = ({car}:CardProps) => {
    // daha fazla yazısına(CustomButton bileşeni) tıklanma state'i
    const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
    initial={{scale:0.5, opacity:0}}
    whileInView={{opacity:1, scale:1}} // bu hale gelsin dedik
    transition={{duration:0.4}}
    className="group car-card">
      {/* arabanın adı */}
      <h2 className="car-card__content-title">{car.make} {car.model}</h2>

      {/* aracın fiyatı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className="text-[14px] self-end font-medium">/gün</span>  {/* self-end ile dikeyde alta almış oluyor */}
      </p>

      {/* resim alanı */}
      <div className="relative w-full h-40 my-3">
        <img src={generateImage(car)} alt="car-pic" className="w-full h-full object-contain" />
      </div>

      {/* alt bilgi kısmı */}
      <div className="relative w-full mt-2">
        <div className="group-hover:invisible flex justify-between mt-2 text-gray">
            <CarInfo title={"Otomatik"} icon="/steering-wheel.svg" />
            <CarInfo title="RWD" icon="/tire.svg" />
            <CarInfo title="MPG" icon="/gas.svg" />
        </div>
        <div className="car-card__btn-container">
            <CustomButton 
                title="Daha Fazla" 
                designs="w-full py-[16px] gap-3" 
                rIcon="/right-arrow.svg" 
                handleClick={()=> setIsOpen(true)}
                // bir değer döndürmüyor. tipini tanımlarken void 
            />
        </div>
      </div>


      <DetailModel isOpen={isOpen} closeModel={()=> setIsOpen(false)} car={car} />

    </motion.div>
    // hata almamak için kapanış yagına da motion verdik !
  );
};

export default Card;

/*
 * group / group-hover:invisible :

 * group anahtar kelimesiyle yapılıyor. kapsayıcıya group ver. değişmesini istediğimiz
yapıya group-hover ver.

 * car-card__btn-container --> hidden group-hover:flex absolute bottom-0 w-full z-10
bu classları alıyor.
(normalde görünmesin(display none), ama grup hover olunca displayi flex olsun.) !!!
*/