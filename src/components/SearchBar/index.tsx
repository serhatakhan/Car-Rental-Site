import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";

type ButtonProps = { // propun tipi
    styling: string
}

// içerde bir componet oluşturduk
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    // dışardan bir style classı gelirse
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};


const SearchBar = () => {
  // aracın marka ve modelinin state'ini tuttuk. react select değiştiğinde setMake ile içerisindeki değeri aktaracağız
  const [make, setMake] = useState<string>("")
  const [model, setModel] = useState<string>("")

  // handleSubmit içine girdiğimiz yapıyı gönderdiğimizde url'e eklmesini istiyoruz. url'e eklemek için de useSearchParams 
  const [params, setParams] = useSearchParams()


  // * parametredeki e(event) gibi reactın içinden gelen eventlerde bunların tipini 
  // kendimiz tanımlayamayız. event'in içinde bir sürü özellik var çünkü.
  // * bunların tiplerini tanımlarken react'ın içerisinde yerleşik olarak bulunan tipleri
  // kullanıyoruz. mesela types klasöründeki MouseEventHandler gibi. 
  // * Formun içinde FormEvent yapısını kullanacağız. Bunu dedikten sonra kullanacağımız yapının
  // HTMLFormElement olması gerekiyor. 
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // url'e marka ve model parametreleri ekle
    setParams({
      make:make.toLowerCase(),
      model:model.toLowerCase()
    })
  };


  // * useMemo -> öncesinde tanımlanan bir değeri önbelleğe alıyor. 
  // * seçtiğimiz aracın markasını bellekte tutuyor. sonra tekrar o daha önce seçilen markayı seçip
  // istek attığımızda bunu gdip veritabanına istek atmak yerine önbellekte tuttuğu veriyi alıyor. performans+  
  const options:OptionType[] = useMemo(
    ()=> 
      makes.map((item)=> ({
        label:item,
        value:item
      })),
    [make] // ARACIN MARKASI HER DEĞİŞTİĞİNDE(YANİ İLGİLİ REACT SELECT) USEMEMO ÇALIŞSIN !
  )
  

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect 
        className="w-full" 
        options={options}
        onChange={(e)=> e && setMake(e.value)}
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          src="/model-icon.png"
          alt=""
          width={25}
          className="absolute ml-[10px]"
        />
        <input
          type="text"
          placeholder="ör: civic"
          onChange={(e)=> setModel(e.target.value)} //react-select'de value demeye gerek olmadığı için orada yazmıyorduk. bu inputta değere erişmek istiyorsak yazacağız.
          className="searchbar__input rounded text-black"
        />
        <SearchButton styling={"sm:hidden"} />
        {/* sm ekranlardan sonra gizle */}
      </div>
      {/* büyük ekranlarda sadece bu buton görünecek. üstteki 2 buton görünmeyecek.
      ama küçük ekranlarda bu görünmesin, diğer 2 buton görünsün. */}
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
