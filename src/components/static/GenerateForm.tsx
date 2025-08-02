import { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { showToast } from "@/components/ui/custom-toast"
import { handleApiError } from '../utils/ApiError'
import { useNavigate } from 'react-router-dom'

interface FormProps {
    setVideoPath: (path: string) => void;
}

const imageStyleOptions = [
    {
        id: "anime",
        label: "Anime",
        image: "/images/anime.png",
    },
    {
        id: "realistic",
        label: "Realistic",
        image: "/images/realistic.png",
    },
    {
        id: "cartoon",
        label: "Cartoon",
        image: "/images/cartoon.png",
    },
    {
        id: "cyberpunk",
        label: "Cyberpunk",
        image: "/images/cyberpunk.png",
    },
];

const Form: React.FC<FormProps> = ({ setVideoPath }) => {
    const [projectName, setProjectName] = useState("");
    const [topic, setTopic] = useState("");
    const [script, setScript] = useState("");
    const [scriptOption, setScriptOption] = useState("manual");
    const [isScriptLoading, setIsScriptLoading] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(false);
    const [imageStyle, setImageStyle] = useState("anime");
    const navigate = useNavigate();

    const handleGenerateScript = () => {
        if (topic.trim() === "") {
            showToast({ 
                message: "Please enter a topic.", 
                type: "error" 
            });
            return;
        }
        setIsScriptLoading(true);
        setScript(""); // Clear previous script
        axios.post("http://localhost:8000/generate-script", { topic }).then((response) => {
            setScript(response.data.script);
            showToast({ 
                message: "Script generated successfully!", 
                type: "success" 
            });
        }).catch((error) => {
            handleApiError(error, navigate);
        }).finally(() => {
            setIsScriptLoading(false);
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!imageStyle) {
            showToast({ 
                message: "Please select an image style.", 
                type: "error" 
            });
            return;
        }
        const formData = {
            projectName,
            topic,
            script,
            imageStyle
        };
        setIsVideoLoading(true);
        showToast({ 
            message: "Starting video generation...", 
            type: "loading" 
        });
        axios.post("http://localhost:8000/generate-video", formData).then((response) => {
            setVideoPath(response.data.video_path);
            showToast({ 
                message: "Video generated successfully! Ready to preview.", 
                type: "success" 
            });
        }).catch((error) => {
            console.error("There was an error making the request:", error);
            showToast({ 
                message: "Failed to generate video. Please try again.", 
                type: "error" 
            });
        }).finally(() => {
            setIsVideoLoading(false);
        });
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="projectName" className="text-zinc-400">Project Name</Label>
                    <Input
                        id="projectName"
                        className="bg-[#111111] border-[#333333] focus-visible:ring-purple-400/20 text-zinc-200"
                        placeholder="Enter project name"
                        required
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="topic" className="text-zinc-400">Topic</Label>
                    <Input
                        id="topic"
                        className="bg-[#111111] border-[#333333] focus-visible:ring-purple-400/20 text-zinc-200"
                        placeholder="e.g. The Water Cycle"
                        required
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>
            </div>
            <div className="space-y-4">
                <Label className="text-zinc-400">Script Options</Label>
                <RadioGroup
                    value={scriptOption}
                    onValueChange={setScriptOption}
                    className="flex flex-col md:flex-row gap-4 md:gap-8"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="manual"
                            id="manual"
                            className="border-[#333333] text-indigo-400 data-[state=checked]:bg-indigo-400/20 data-[state=checked]:border-indigo-400"
                        />
                        <Label htmlFor="manual" className={`text-zinc-400 ${scriptOption === 'manual' ? 'text-indigo-400' : ''}`}>
                            Enter your own script
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="generate"
                            id="generate"
                            className="border-[#333333] text-indigo-400 data-[state=checked]:bg-indigo-400/20 data-[state=checked]:border-indigo-400"
                        />
                        <Label htmlFor="generate" className={`text-zinc-400 ${scriptOption === 'generate' ? 'text-indigo-400' : ''}`}>
                            Generate script from topic
                        </Label>
                    </div>
                </RadioGroup>
            </div>
            {scriptOption === "manual" && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Label htmlFor="script" className="text-zinc-400">Enter your script</Label>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <Textarea
                            id="script"
                            value={script}
                            onChange={(e) => setScript(e.target.value)}
                            rows={5}
                            placeholder="Enter your script here..."
                            className="bg-[#1A1A1A] border-[#333333] placeholder:text-zinc-600 text-zinc-300 resize-none focus:ring-1 focus:ring-offset-0 focus:ring-zinc-500 focus:border-zinc-500"
                            required
                        />
                    </motion.div>
                </motion.div>
            )}
            {scriptOption === "generate" && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 overflow-hidden"
                >
                    <Label className="text-zinc-400">Script</Label>
                    {script.trim() === "" ? (
                        <motion.div
                            className="flex flex-col items-center gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.p
                                className="text-zinc-500 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Script will be generated from topic.
                            </motion.p>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="button"
                                    onClick={handleGenerateScript}
                                    disabled={isScriptLoading}
                                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                                >
                                    {isScriptLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="mr-2 h-4 w-4" />
                                            Generate Script
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                            {isScriptLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-36"
                                >
                                    <Skeleton className="w-full h-36 rounded-lg bg-zinc-600 animate-pulse" />
                                </motion.div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 text-zinc-300 whitespace-pre-line min-h-[120px]"
                        >
                            {script}
                        </motion.div>
                    )}
                </motion.div>
            )}
            <Label className="text-zinc-400">Select Image Style</Label>
            <motion.div
                className="flex flex-row flex-wrap gap-x-13 gap-y-10 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {imageStyleOptions.map((style, index) => (
                    <motion.div
                        key={style.id}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.1 * index,
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img
                            src={style.image}
                            alt={style.label}
                            className={`w-40 h-40 rounded-xl cursor-pointer ${imageStyle === style.id ? 'border-2 border-indigo-500 shadow-lg shadow-indigo-500/20' : ''
                                }`}
                            onClick={() => setImageStyle(style.id)}
                            whileHover={{
                                boxShadow: "0 0 15px rgba(99, 102, 241, 0.3)"
                            }}
                        />
                        <motion.p
                            className="text-center mt-2 text-zinc-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 * index }}
                        >
                            {style.label}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
            <Button
                type="submit"
                disabled={isVideoLoading}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/20 py-6 text-lg"
            >
                {isVideoLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Generating Video...
                    </>
                ) : (
                    "Generate Video"
                )}
            </Button>
        </form>
    )
}

export default Form