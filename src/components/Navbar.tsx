import { Link, useLocation } from "react-router-dom";
import { VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full p-2.5 shadow-lg shadow-purple-500/20">
            <VideoIcon className="h-6 w-6 text-white" />
          </span>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Lumosify
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className={`font-medium transition-colors ${location.pathname === "/" ? "text-purple-400" : "text-zinc-400 hover:text-purple-400"}`}>
            Home
          </Link>
          <Link to="/form" className={`font-medium transition-colors ${location.pathname === "/form" ? "text-purple-400" : "text-zinc-400 hover:text-purple-400"}`}>
            Create
          </Link>
          <Button
            variant="ghost"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all"
          >
            <a href="https://github.com/chirag743/Text-To-Video" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;