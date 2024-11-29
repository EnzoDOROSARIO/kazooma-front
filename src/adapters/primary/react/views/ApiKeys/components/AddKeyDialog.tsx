import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogTitle,
} from "../../../components/Dialog.tsx";
import { Field, FieldGroup, Label } from "../../../components/Fieldset.tsx";
import { Select } from "../../../components/Select.tsx";
import { Input } from "../../../components/Input.tsx";
import { Button } from "../../../components/Button.tsx";
import { useForm } from "react-hook-form";

type FormValues = {
  type: "OPEN_AI" | "ANTHROPIC";
  name: string;
  key: string;
};

export const AddKeyDialog = (props: {
  open: boolean;
  onClose: () => void;
  onAdd: (data: FormValues) => void;
}) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      type: "OPEN_AI",
    },
  });

  const onSubmit = handleSubmit((data) => {
    props.onAdd(data);
    reset();
  });

  const handleClose = () => {
    reset();
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <form onSubmit={onSubmit}>
        <DialogTitle>Ajouter une clé</DialogTitle>
        <DialogBody>
          <FieldGroup>
            <Field disabled>
              <Label>Type</Label>
              <Select {...register("type")}>
                <option value="OPEN_AI">OpenAI</option>
                <option value="ANTHROPIC">Anthropic</option>
              </Select>
            </Field>
            <Field>
              <Label>Nom</Label>
              <Input {...register("name")} placeholder="Kiryu Kazuma" />
            </Field>
            <Field>
              <Label>Clé</Label>
              <Input {...register("key")} placeholder="sk-XXXXX" />
            </Field>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button type="button" plain onClick={handleClose}>
            Annuler
          </Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
