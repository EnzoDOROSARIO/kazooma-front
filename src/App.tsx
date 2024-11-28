import { KeyIcon } from "@heroicons/react/20/solid";
import { SidebarLayout } from "./adapters/primary/react/components/SidebarLayout.tsx";
import { Navbar } from "./adapters/primary/react/components/Navbar.tsx";
import {
  Sidebar,
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./adapters/primary/react/components/Sidebar.tsx";
import { Text } from "./adapters/primary/react/components/Text.tsx";

function App() {
  return (
    <SidebarLayout
      navbar={<Navbar />}
      sidebar={
        <Sidebar>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/api-keys">
                <KeyIcon />
                <SidebarLabel>Api keys</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <Text>Hello world</Text>
    </SidebarLayout>
  );
}

export default App;
