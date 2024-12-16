import { useSelector } from "react-redux";
import { TrashIcon } from "@heroicons/react/16/solid";
import { apiKeysSelector } from "../../../selectors/api-keys-selector.ts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/Table.tsx";
import { Badge } from "../../../components/Badge.tsx";
import { ApiKey } from "../../../../../../store/appState.ts";
import { Button } from "../../../components/Button.tsx";
import { removeApiKey } from "../../../../../../hexagon/use-cases/remove-api-key/remove-api-key.ts";
import { useAppDispatch } from "../../../../../../store/reduxStore.ts";

export const ApiKeysTable = () => {
  const { apiKeys } = useSelector(apiKeysSelector);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeApiKey(id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Nom</TableHeader>
          <TableHeader>Clé</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader className="relative w-0">
            <span className="sr-only">Actions</span>
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {apiKeys.map((apiKey) => (
          <ApiKeyRow key={apiKey.id} apiKey={apiKey} onRemove={handleRemove} />
        ))}
      </TableBody>
    </Table>
  );
};

const ApiKeyRow = (props: {
  apiKey: ApiKey;
  onRemove: (id: string) => void;
}) => {
  const badgeFromType = {
    OPEN_AI: <Badge color="zinc">OpenAI</Badge>,
    ANTHROPIC: <Badge color="amber">Anthropic</Badge>,
  };

  return (
    <TableRow>
      <TableCell>{props.apiKey.name}</TableCell>
      <TableCell>
        {`${props.apiKey.key.slice(0, 3)}...${props.apiKey.key.slice(-4)}`}
      </TableCell>
      <TableCell>{badgeFromType[props.apiKey.type]}</TableCell>
      <TableCell>
        <Button plain onClick={() => props.onRemove(props.apiKey.id)}>
          <TrashIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
