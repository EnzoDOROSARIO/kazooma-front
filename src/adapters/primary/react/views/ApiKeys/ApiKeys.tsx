import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../../components/Button.tsx";
import { Heading } from "../../components/Heading.tsx";
import { ApiKeysTable } from "./components/ApiKeysTable.tsx";
import { AddKeyDialog } from "./components/AddKeyDialog.tsx";
import { addApiKey } from "../../../../../hexagon/use-cases/add-api-key/add-api-key.ts";
import { useAppDispatch } from "../../../../../store/reduxStore.ts";
import { fetchApiKeys } from "../../../../../hexagon/use-cases/fetch-api-keys/fetch-api-keys.ts";
import { AppState } from "../../../../../store/appState.ts";
import { removeApiKey } from "../../../../../hexagon/use-cases/remove-api-key/remove-api-key.ts";

export const ApiKeys = () => {
  const dispatch = useAppDispatch();
  const { apiKeys } = useSelector((state: AppState) => state.apiKeysFetching);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchApiKeys());
  }, [dispatch]);

  const handleRemove = (id: string) => {
    dispatch(removeApiKey(id));
  };

  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Clés API</Heading>
        <div className="flex gap-4">
          <Button onClick={() => setIsOpen(true)}>
            <PlusIcon />
            Ajouter une clé
          </Button>
        </div>
      </div>
      <ApiKeysTable apiKeys={apiKeys} onRemove={handleRemove} />
      <AddKeyDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAdd={(data) => {
          dispatch(addApiKey(data));
          setIsOpen(false);
        }}
      />
    </>
  );
};
