import { Outlet } from "react-router";
import { HomeIcon, KeyIcon } from "@heroicons/react/20/solid";
import { SidebarLayout } from "./components/SidebarLayout.tsx";
import { Navbar } from "./components/Navbar.tsx";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./components/Sidebar.tsx";

export const Layout = () => (
  <SidebarLayout
    navbar={<Navbar />}
    sidebar={
      <Sidebar>
        <SidebarBody>
          <SidebarSection>
            <SidebarItem href="/" current>
              <HomeIcon />
              <SidebarLabel>Home</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="/keys">
              <KeyIcon />
              <SidebarLabel>Api keys</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarBody>
      </Sidebar>
    }
  >
    <Outlet />
  </SidebarLayout>
);
