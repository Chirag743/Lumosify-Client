import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] backdrop-blur-xl border-t border-white/10 py-4 shadow-2xl ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Lumosify</span>
          </span>
          <span className="hidden md:inline">&middot;</span>
          <span>
            Powered by{" "}
            <span className="font-semibold text-purple-400">AI</span>
          </span>
        </div>
        <a
          href="https://github.com/yourusername/Lumosify"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-zinc-400 hover:text-purple-400 transition"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;