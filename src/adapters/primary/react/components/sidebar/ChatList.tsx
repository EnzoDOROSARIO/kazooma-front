import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { useAppDispatch } from "../../../../../store/reduxStore";
import {
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "../Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../store/appState";
import { fetchChatList } from "../../../../../hexagon/use-cases/fetch-chat-list/fetch-chat-list";
import { useEffect } from "react";

export const ChatList = () => {
  const dispatch = useAppDispatch();
  const chats = useSelector((state: AppState) => state.chatList.chats);

  useEffect(() => {
    dispatch(fetchChatList());
  }, [dispatch]);

  return (
    <>
      {chats.length > 0 && (
        <SidebarSection>
          <SidebarHeading>Dernières conversations</SidebarHeading>
          {chats.map((c) => (
            <SidebarItem key={c.id}>
              <SidebarLabel>{c.title}</SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
      )}
      <SidebarSection>
        <SidebarItem>
          <PencilSquareIcon />
          <SidebarLabel>Nouvelle conversation</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
    </>
  );
};
