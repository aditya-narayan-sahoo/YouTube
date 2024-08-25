import { USER_ICON } from "../utils/constants";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-1">
      <img src={USER_ICON} alt="user" className="h-7" />
      <span className="font-semibold pl-1 pr-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
