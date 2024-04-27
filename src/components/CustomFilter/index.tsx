import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[]; // string[] şeklinde de yapabilrdik ama OptionType ismi verip bir içindeki label ve value'nin tipini belirtmek işimizi daha da garantiye alacak.
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  // selectlerden herhangi biri seçildiğinde seçtiğimiz değeri tutmamız gerek. bunun için state.
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();


  // SELECTED HER DEĞİŞTİĞİNDE STATE'E EKLE !
  useEffect(() => {
    // gelen title Yakıt Tipi ise url'e benzin tipini al, değilse yılı al değişkene at
    const key = title === "Yakıt Tipi" ? "fuel" : "year"

    if(selected?.value){
      // seçilenin value'si varsa url'e key'i ekle, karşısındaki değeri ise seçtiğimiz değerin valuesi
      params.set(key,selected.value.toLowerCase())
    }else {
      // gelmiyorsa parametreden bu parametreden bu yapııyı sil
      params.delete(key)
    }

    // son olarak url'i güncelle
    setParams(params)
  }, [selected])
  

  return (
    <div>
      <ReactSelect
        options={options}
        placeholder={title}
        className="text-black min-w-[120px]"
        // değiştiğinde seçilen yakı tipini state'e ekle. e.target.value falan yapmadık. react selectte gerek yok
        onChange={(e)=> setSelected(e)}
      />
    </div>
  );
};

export default CustomFilter;
