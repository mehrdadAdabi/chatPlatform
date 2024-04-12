import { Outlet, useParams } from "react-router-dom";
import ConversationsSideBar from "../components/conversations/ConversationsSideBar";
import { Page } from "../utilities/styles";
import ConversationPanel from "../components/conversations/ConversationPanel";

const Conversation = (props: any) => {
  const { id } = useParams();
  return (
    <Page display="flex" justifyContent="space-between">
      <ConversationsSideBar />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};

export default Conversation;
