import { motion } from "framer-motion"

interface VideoPlayerProps {
    videoPath: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoPath }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mt-8"
        >
            <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-center mb-6"
            >
                Your Generated Video
            </motion.h3>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-6 items-center justify-center"
            >
                <motion.video
                    src={`http://localhost:8000${videoPath}`}
                    controls
                    className="w-full md:w-[340px] h-[220px] md:h-[340px] rounded-xl shadow-2xl bg-black/50"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    )
}

export default VideoPlayer