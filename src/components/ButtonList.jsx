import { useSelector } from "react-redux";
import Button from "./Button";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const buttonNames = [
    "All",
    "Gaming",
    "Music",
    "Live",
    "Football",
    "Cricket",
    "Cooking",
    "News",
    "World",
    "Markets",
    "Mixes",
    "Jukebox",
    "Game Shows",
    "India",
    "CryptoCurrency",
    "You",
    "Others",
  ];

  return (
    <div
      className={`flex text-nowrap overflow-x-auto ${
        isMenuOpen ? "max-w-[1340px]" : "max-w-[1521px]"
      } scrollbar-hide`}
    >
      {buttonNames.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
