import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const MainPage = () => {
  const [cars, serCars] = useState([1]);

  useEffect(() => {
    
  }, [])
  

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
            <CustomFilter title="Yakıt Tipi" />
            <CustomFilter title="Yıl" />
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
