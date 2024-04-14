import { FC } from "react";
import {
  ConversationMessageBox,
  ConversationSideBarItem,
  ConversationSideBarStyle,
} from "../../utilities/styles";
import { MdPostAdd } from "react-icons/md";
import { ConversationTypes } from "../../utilities/types";

type Props = {
  conversations: ConversationTypes[];
};
const ConversationsSideBar: FC<Props> = (props) => {
  const { conversations } = props;
  return (
    <ConversationSideBarStyle>
      <header>
        Conversation
        <MdPostAdd size={20} />
      </header>
      <ConversationMessageBox>
        {conversations.map((item, index) => {
          return (
            <ConversationSideBarItem key={index}>
              <div className="image">
                <img src={item.avatar} alt="userAvatar" />
              </div>
              <div>
                <span className="fullName">{item.name}</span>
                <p className="message">{item.lastMessag}</p>
              </div>
            </ConversationSideBarItem>
          );
        })}
      </ConversationMessageBox>
    </ConversationSideBarStyle>
  );
};

export default ConversationsSideBar;
