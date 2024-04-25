import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>
        <CustomButton title="Arabaları Keşfet" designs="mt-10 min-w-[170px] hover:scale-95" />
      </div>

      <div className="flex-1 w-full flex justify-center">
        <motion.img
          // başlangıçta 210 sağdan ve 0.7 küçük boyutlu olarak başla 
          initial={{ translateX: 210, scale: 0.7 }}
          // şu an ki durumunu gelmesi için de whileInView   
          whileInView={{translateX: 0, scale: 1}}
          // animasyon 0.8 saniyede gerçekleşsin
          transition={{duration: 0.8}}
          src="/hero.png"
          alt=""
          className="object-contain"
          width={700}
        />
      </div>
    </div>
  );
};

export default Hero;
