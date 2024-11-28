import { useState } from "react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../../components/Button.tsx";
import { Heading } from "../../components/Heading.tsx";
import { ApiKeysTable } from "./components/ApiKeysTable.tsx";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "../../components/Dialog.tsx";
import { Field, FieldGroup, Label } from "../../components/Fieldset.tsx";
import { Input } from "../../components/Input.tsx";
import { Select } from "../../components/Select.tsx";

export const ApiKeys = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <ApiKeysTable />
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Ajouter une clé</DialogTitle>
        <DialogBody>
          <FieldGroup>
            <Field disabled>
              <Label>Type</Label>
              <Select name="type" value="OPEN_AI">
                <option value="OPEN_AI">OpenAI</option>
                <option value="ANTHROPIC">Anthropic</option>
              </Select>
            </Field>
            <Field>
              <Label>Nom</Label>
              <Input name="name" placeholder="Kiryu Kazuma" />
            </Field>
            <Field>
              <Label>Clé</Label>
              <Input name="key" placeholder="sk-XXXXX" />
            </Field>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Annuler
          </Button>
          <Button onClick={() => setIsOpen(false)}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
