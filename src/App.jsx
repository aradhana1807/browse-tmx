import { Toaster } from "sonner";
import "./App.css";
import { FileBrowser } from "./components/filebrowser";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/provider/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="font-JetMono min-h-screen mx-auto">
        <Navbar />
        <FileBrowser />
      </div>
      <Toaster position="bottom-center" richColors />
    </ThemeProvider>
  );
}
export default App;
