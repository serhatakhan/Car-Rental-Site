import { colors } from "../constants";
import { CarType, FilterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d33ced34dmshe921208dae0eedap10a7f8jsn7a8e9f31b93b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters:FilterType) {
  // ilk başta sabit değer olarak bunları gönderelim. kullanıcıyı açılışta bu bigideki araçlar karşılasın
  const {
    make = "bmw",
    model = "",
    limit = "",
    year = "",
    fuel = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    options
  );

  return await res.json() // fetchCars'ı çağırdım yerde bu yapının gelmesi için return et
}

// araba resimleri için api
export const generateImage = (car:CarType, angle?:string) => {
  // new Url -> yeni bir url oluştur
  const url = new URL("https://cdn.imagin.studio/getimage") 

  // url'e ekleme yapmak istediğimizde yine js'nin içinden gelen searchParams.append kullan !
  url.searchParams.append("customer", "hrjavascript-mastery") // api bu parametreleri istiyor
  url.searchParams.append("make", car.make) // api bu parametreleri istiyor
  url.searchParams.append("modelFamily", car.model) // api bu parametreleri istiyor
  url.searchParams.append("zoomType", "fullscreen") // api bu parametreleri istiyor

  // eğer angle değeri varsa, angle değer ekle yani arabanın hangi açısından gösterileceğini belirle
  if(angle){
  url.searchParams.append("angle", angle) // api bu parametreleri istiyor
  }

  // arabalar için api de tanımlanan renklerden rastgele renk üret
  const i = Math.round(Math.random() * colors.length)
  url.searchParams.append("paintId", colors[i])

  return String(url) // stringe çevirip döndür
} 
