import { useState } from "react";
import { Button } from "./ui/button";
import { FolderPlus } from "lucide-react";
import { SquareX } from "lucide-react";
import { Input } from "./ui/input";

export const MenuBar = ({ onCreate, onDelete }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("folder");

  const handleCreate = () => {
    if (name.trim()) {
      onCreate(name, type === "folder");
      setName("");
    }
  };

  return (
    <div className="mb-4 flex space-x-4">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-1 dark:bg-neutral-900 rounded-md"
      >
        <option value="folder">Folder</option>
        <option value="file">File</option>
      </select>

      <Button
        onClick={handleCreate}
        size="icon"
        className="rounded-md bg-green-600 hover:bg-green-700 text-white p-2"
      >
        <FolderPlus className="w-8 h-8" />
      </Button>
      <Button
        onClick={onDelete}
        size="icon"
        className="rounded-md bg-red-500 hover:bg-red-600 text-white p-2"
      >
        <SquareX className="w-8 h-8" />
      </Button>
    </div>
  );
};
