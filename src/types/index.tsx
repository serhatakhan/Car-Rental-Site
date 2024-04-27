import { MouseEventHandler } from "react";

// custom button bileşeninin aldığı propsların type'ını tanımla
export type ButtonProps = {
  title: string;
  designs?: string;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler;
};
/* 
 * MouseEventHandler:
 * React'ın içerisinden gelen bir özellik, bir fonksiyondur. Tıklanma olayıdır. 
CustomButton onClick olduğunda bunu vereceğiz. tıklandığında bu fonk çalışacak.
*/
/* title'ı string olarak gönderiyoruz. designs'ı, btnType'ı diğerlerini
her zaman göndermeyebiliriz o yüzden opsiyonel olsun. */


export type OptionType = {
  label: string;
  value: string;
};

// api'den gelen verilerin tipi. hepsi string
export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
};

// gelen arabaları tuttuğumuz state'in tipi
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
