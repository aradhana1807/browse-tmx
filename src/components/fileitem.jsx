import { File, Folder } from "lucide-react";
import PropTypes from "prop-types";

const FileItem = ({ node, onFolderClick }) => {
  return (
    <div className="flex items-center mb-2">
      {node.isFolder ? (
        <Folder className="mr-2 text-yellow-500" />
      ) : (
        <File className="mr-2 text-gray-500" />
      )}
      <button
        className="text-blue-500"
        onClick={() => node.isFolder && onFolderClick(node)}
      >
        {node.name}
      </button>
    </div>
  );
};

FileItem.propTypes = {
  node: PropTypes.shape({
    isFolder: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onFolderClick: PropTypes.func.isRequired,
};

export default FileItem;
