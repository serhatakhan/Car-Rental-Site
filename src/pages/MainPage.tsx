import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../utils";
import { CarType } from "../types";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);

  const [params, setParams] = useSearchParams()
  
  
  useEffect(() => {
    // * parametreden marka ve modeli alacağız. searchbar komponentinde obje olarak gönderdiğimiz 
    // için konsolda göremedik. burada objeye çevirip öyle görebildik geldiğini.
    const paramsObj = Object.fromEntries(params.entries())

    // parametredeki aradığımız marka modeli içeren nesneyi apiye yolla
    fetchCars(paramsObj)
    .then((res:CarType[])=> setCars(res)) // fetch ile de then kullanabiliyoruz
    //dönen cevap da dizi şeklinde geliyor.->res:CarType[]
    
  }, [params]) // PARAMETRE HER DEĞİŞTİĞİNDE API'YE İSTEK ATMASINI İSTİYORUZ
  

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-semibold">Araba Kataloğu</h1>
          <p>Araçları Keşfetmeye Hemen Başla</p>
        </div>

        {/* Filtreleme Alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Yıl" options={years} />
          </div>
        </div>

        {/* araba yoksa ya da bulunamadıysa bu yazıyı ekrana bas */}
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz herhangi bir sonuç bulunamadı.</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i)=> (
              <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
