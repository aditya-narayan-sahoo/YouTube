import Button from "./Button";

const ButtonList = () => {
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
    <div className="flex text-nowrap overflow-x-auto max-w-[1323px] scrollbar-hide">
      {buttonNames.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
