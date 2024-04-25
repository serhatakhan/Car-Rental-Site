import { MouseEventHandler } from "react";

// custom button bileşeninin aldığı propsların type'ını tanımla
export type ButtonProps = {
  title: string;
  designs?: string;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler
};
/* 
 * MouseEventHandler

 * React'ın içerisinden gelen bir özellik, bir fonksiyondur. Tıklanma olayıdır. 
CustomButton onClick olduğunda bunu vereceğiz. tıklandığında bu fonk çalışacak.

*/

/* title'ı string olarak gönderiyoruz. designs'ı, btnType'ı diğerlerini
her zaman göndermeyebiliriz o yüzden opsiyonel olsun. */
