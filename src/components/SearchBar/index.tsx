import ReactSelect from "react-select";

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
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect className="w-full" />
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
