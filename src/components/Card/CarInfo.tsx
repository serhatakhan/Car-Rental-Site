type InfoProps = {
  icon: string;
  title: string;
};

const CarInfo = ({ title, icon }: InfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={icon} alt="icon" width={26} />
      <p className="text-[17px] font-medium">{title}</p>
    </div>
  );
};

export default CarInfo;
