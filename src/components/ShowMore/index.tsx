import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  // url'den limit parametresinin değerini al. numbera çevir
  // -> || 5 ile başlangıçta limit değeri 5 olsun dedik !! sonrasında limiti 10 dan devem ettireceğiz.
  // * Eğer URL'de "limit" parametresi yoksa veya boşsa veya sayısal bir değere dönüştürülemezse, limit değişkeni varsayılan olarak 5 olarak ata demek || 5 ifadesi.
  const limit = Number(params.get("limit")) || 5 

  const handleLimit = () => {
    const newLimit = limit + 5; // limite 5 ekleyip url'e yollayacağız
    params.set("limit", String(newLimit)); // url'e eklerken string olmalı
    setParams(params); // url'i güncelle !
  };

  return (
    <div className="flex-center my-8">
      {limit < 30 && (
        <CustomButton
          title="Daha Fazla"
          handleClick={handleLimit}
          designs="min-w-[130px] hover:scale-95"
        />
      )}
    </div>
  );
};

export default ShowMore;
