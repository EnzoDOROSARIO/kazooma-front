import { Outlet, useLocation } from "react-router";
import { HomeIcon, KeyIcon } from "@heroicons/react/20/solid";
import { SidebarLayout } from "./components/SidebarLayout.tsx";
import { Navbar } from "./components/Navbar.tsx";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./components/Sidebar.tsx";
import { ChatList } from "./components/sidebar/ChatList.tsx";

export const Layout = () => {
  const location = useLocation();

  return (
    <SidebarLayout
      navbar={<Navbar />}
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarSection>
              <SidebarItem href="/" current={location.pathname === "/"}>
                <HomeIcon />
                <SidebarLabel>Accueil</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/keys" current={location.pathname === "/keys"}>
                <KeyIcon />
                <SidebarLabel>Clés API</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <ChatList />
          </SidebarBody>
        </Sidebar>
      }
    >
      <Outlet />
    </SidebarLayout>
  );
};
