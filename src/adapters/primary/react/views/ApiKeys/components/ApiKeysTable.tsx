import { useEffect, useState } from "react";
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
  const { apiKeys, loading } = useSelector(apiKeysSelector);
  const dispatch = useAppDispatch();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timeoutId = loading
      ? setTimeout(() => setShowLoading(true), 200)
      : undefined;
    if (!loading) {
      setShowLoading(false);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [loading]);

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
        {showLoading
          ? [...Array(2)].map((_, index) => (
              <TableRow key={`skeleton-${index}`}>
                <TableCell className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-24" />
                </TableCell>
                <TableCell className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-500 rounded w-64" />
                </TableCell>
                <TableCell className="animate-pulse">
                  <div className="h-6 bg-gray-200 dark:bg-gray-500 rounded w-20" />
                </TableCell>
                <TableCell />
              </TableRow>
            ))
          : apiKeys.map((apiKey) => (
              <ApiKeyRow
                key={apiKey.id}
                apiKey={apiKey}
                onRemove={handleRemove}
              />
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
    OPEN_AI: <Badge color="lime">OpenAI</Badge>,
    ANTHROPIC: <Badge color="amber">Anthropic</Badge>,
  };

  return (
    <TableRow>
      <TableCell>{props.apiKey.name}</TableCell>
      <TableCell>{props.apiKey.key}</TableCell>
      <TableCell>{badgeFromType[props.apiKey.type]}</TableCell>
      <TableCell>
        <Button plain onClick={() => props.onRemove(props.apiKey.id)}>
          <TrashIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
