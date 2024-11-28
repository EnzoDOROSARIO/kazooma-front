import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../../components/Button.tsx";
import { Heading } from "../../components/Heading.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/Table.tsx";
import { Badge } from "../../components/Badge.tsx";

export const ApiKeys = () => {
  const apiKeys = [
    {
      id: "1",
      name: "OpenAI",
      key: "sk-1234567890",
      type: "OPEN_AI",
    },
    {
      id: "2",
      name: "Anthropic",
      key: "sk-1234567890",
      type: "ANTHROPIC",
    },
  ];
  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Clés API</Heading>
        <div className="flex gap-4">
          <Button>
            <PlusIcon />
            Ajouter une clé
          </Button>
        </div>
      </div>
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
                {apiKey.type === "OPEN_AI" && (
                  <Badge color="lime">OpenAI</Badge>
                )}
                {apiKey.type === "ANTHROPIC" && (
                  <Badge color="amber">Anthropic</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
