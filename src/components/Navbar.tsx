import { Link, useLocation } from "react-router-dom";
import { VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl fixed top-0 left-0 z-30"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-flex items-center justify-center bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full p-2.5 shadow-lg shadow-purple-500/20"
            >
              <VideoIcon className="h-6 w-6 text-white" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Lumosify
            </motion.span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/" 
              className={`font-medium transition-colors ${location.pathname === "/" ? "text-purple-400" : "text-zinc-400 hover:text-purple-400"}`}
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/form" 
              className={`font-medium transition-colors ${location.pathname === "/form" ? "text-purple-400" : "text-zinc-400 hover:text-purple-400"}`}
            >
              Create
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all"
            >
              <a href="https://github.com/chirag743/Text-To-Video" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;