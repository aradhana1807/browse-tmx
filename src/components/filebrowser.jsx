import { useState } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { fileSystem, updateFileSystem } from "../data";
import { MenuBar } from "./menubar";
import FileItem from "./fileitem";

export const FileBrowser = () => {
  const [path, setPath] = useState([]);
  const [currentDir, setCurrentDir] = useState(fileSystem);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCreate = (name, isFolder) => {
    const newItem = { name, isFolder, children: isFolder ? [] : undefined };
    currentDir.children.push(newItem);
    setCurrentDir({ ...currentDir });
    updateFileSystem(fileSystem);
  };

  const handleDelete = () => {
    if (selectedItem) {
      const index = currentDir.children.findIndex(
        (child) => child.name === selectedItem.name
      );
      currentDir.children.splice(index, 1);
      setCurrentDir({ ...currentDir });
      setSelectedItem(null);
      updateFileSystem(fileSystem);
    }
  };

  const navigateTo = (newPath) => {
    const newDir = newPath.reduce(
      (acc, cur) => acc.children.find((child) => child.name === cur.name),
      fileSystem
    );
    setPath(newPath);
    setCurrentDir(newDir);
    setSelectedItem(null);
  };

  const handleFolderClick = (folder) => {
    navigateTo([...path, folder]);
  };

  return (
    <div className="p-5 max-w-2xl h-[70vh] border shadow-md rounded-md bg-gray-200 dark:bg-neutral-700 mx-auto mt-10">
      <h1 className="text-2xl font-bold py-2">File Browser</h1>
      <MenuBar onCreate={handleCreate} onDelete={handleDelete} />

      <Breadcrumbs path={path} navigateTo={navigateTo} />

      <div>
        {currentDir.children.map((node, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(node)}
            className={`cursor-pointer ${
              selectedItem?.name === node.name ? "bg-blue-200" : ""
            }`}
          >
            <FileItem node={node} onFolderClick={handleFolderClick} />
          </div>
        ))}
      </div>
    </div>
  );
};
