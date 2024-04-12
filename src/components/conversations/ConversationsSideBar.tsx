import { ConversationSideBarStyle } from "../../utilities/styles";
import { MdPostAdd } from "react-icons/md";

const ConversationsSideBar = () => {
  return (
    <ConversationSideBarStyle>
      <header>
        Conversation
        <MdPostAdd size={20} />
      </header>
    </ConversationSideBarStyle>
  );
};

export default ConversationsSideBar;
