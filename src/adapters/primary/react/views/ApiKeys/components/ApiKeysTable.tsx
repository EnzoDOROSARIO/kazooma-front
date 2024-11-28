import { useSelector } from "react-redux";
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

export const ApiKeysTable = () => {
  const { apiKeys } = useSelector(apiKeysSelector);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Nom</TableHeader>
          <TableHeader>Clé</TableHeader>
          <TableHeader>Type</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {apiKeys.map((apiKey) => (
          <TableRow key={apiKey.id}>
            <TableCell>{apiKey.name}</TableCell>
            <TableCell>{apiKey.key}</TableCell>
            <TableCell>
              {apiKey.type === "OPEN_AI" && <Badge color="lime">OpenAI</Badge>}
              {apiKey.type === "ANTHROPIC" && (
                <Badge color="amber">Anthropic</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
