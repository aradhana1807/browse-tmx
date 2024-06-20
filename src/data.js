export let fileSystem = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "Documents",
      isFolder: true,
      children: [
        { name: "Resume.pdf", isFolder: false },
        { name: "CoverLetter.pdf", isFolder: false },
      ],
    },
    {
      name: "Pictures",
      isFolder: true,
      children: [
        { name: "Vacation.jpg", isFolder: false },
        { name: "Family.png", isFolder: false },
        {
          name: "Japan Trip",
          isFolder: true,
          children: [
            { name: "Tokyo.jpg", isFolder: false },
            { name: "Yokohama.jpg", isFolder: false },
            { name: "Kyoto.jpg", isFolder: false },
            { name: "Sapporo.jpg", isFolder: false },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      isFolder: true,
      children: [
        { name: "Windows.zip", isFolder: false },
        { name: "Xubuntu.iso", isFolder: false },
        { name: "WineSetup.exe", isFolder: false },
      ],
    },
    { name: "todo.txt", isFolder: false },
  ],
};

export const updateFileSystem = (newFileSystem) => {
  fileSystem = newFileSystem;
};
