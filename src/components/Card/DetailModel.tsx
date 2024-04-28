import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils";

type DetailProps = {
  isOpen: boolean;
  closeModel: () => void;
  car:CarType
};
// closeModel fonksiyonu, dışarıya değer döndürmüyor. return değeri yok. sadece içinde bir işlem var

const DetailModel = ({ isOpen, closeModel, car }: DetailProps) => {

  return (
    <AnimatePresence>
      {isOpen && (
        // inset-0 sayesinde top0, left0, bottom0 right0 yazmaktan kurtuluyoruz. fixed verince tek başına yeterli olmuyor.
        <motion.div
          // BUARADA BU ANİMASYONLARI KULLANMAK İÇİN KAPSAYICISINDA AnimatePresence KULLANDIK !
          initial={{opacity:0, scale:0.4}} // animasyon nasıl başlasın
          animate={{opacity:1, scale:1}}  // animasyon açıldığında
          exit={{opacity:0, scale:0.5}}  // animasyon kapanırken
          className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-3 z-20 rounded-xl">
          <div className="bg-white relative p-5 max-w-lg w-full max-h-[90vh] rounded-xl flex flex-col gap-3 overflow-auto">
            {/* kapatma butonu */}
            <button onClick={closeModel} className="absolute top-1 end-1 rounded-full bg-white hover:bg-gray-100 transition cursor-pointer z-10 p-1">
              <img src="/close.svg" alt="" />
            </button>

            {/* resimler */}
            <div className="flex-1 flex flex-col gap-3">
                {/* büyük resim */}
                <div className="w-full relative h-40 bg-pattern bg-cover bg-center rounded-xl">
                  <img src={generateImage(car)} alt="" className="h-full object-contain mx-auto" />
                </div>
                {/* küçük resimler */}
                <div className="flex gap-3">
                    <div  className="flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-xl">
                        <img src={generateImage(car,"29")} alt="" className="h-full object-contain mx-auto"/>
                    </div>
                    <div  className="flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-xl">
                        <img src={generateImage(car, "33")} alt="" className="h-full object-contain mx-auto"/>
                    </div>
                    <div  className="flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-xl">
                        <img src={generateImage(car, "13")} alt="" className="h-full object-contain mx-auto" />
                    </div>
                </div>
            </div>

            {/* araç detay */}
            {/* gelen car propu bir nesne. bunu DİZİYE çevirmek için Object.entries kullandık. */}
            {/* alırken key,value şeklinde alabilmek için maplerken [key, value] şeklinde yazdık. yani bizim için otomatik bri şekilde parçalıyor. */}
            {Object.entries(car).map(([key, value], i)=> (
              <div className="flex justify-between items-center" key={i}>
                  {/* replace("_"," ") --> alt tireyi alıp parçala yerine boş string koy dedik !! */}
                  <h4 className="capitalize font-semibold text-gray-600">{key.replace("_"," ")}</h4>
                  <p className="text-black-100 font-extrabold capitalize">{value}</p>
              </div>
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModel;
