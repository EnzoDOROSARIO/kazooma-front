import { useEffect, useState } from "react";
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
import { ApiKey } from "../../../../../../store/appState.ts";

export const ApiKeysTable = () => {
  const { apiKeys, loading } = useSelector(apiKeysSelector);
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
              </TableRow>
            ))
          : apiKeys.map((apiKey) => (
              <ApiKeyRow key={apiKey.id} apiKey={apiKey} />
            ))}
      </TableBody>
    </Table>
  );
};

const ApiKeyRow = (props: { apiKey: ApiKey }) => {
  const badgeFromType = {
    OPEN_AI: <Badge color="lime">OpenAI</Badge>,
    ANTHROPIC: <Badge color="amber">Anthropic</Badge>,
  };

  return (
    <TableRow>
      <TableCell>{props.apiKey.name}</TableCell>
      <TableCell>{props.apiKey.key}</TableCell>
      <TableCell>{badgeFromType[props.apiKey.type]}</TableCell>
    </TableRow>
  );
};
