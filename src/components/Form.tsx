import { useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2, Sparkles } from "lucide-react"

const Form = () => {
    const [projectName, setProjectName] = useState("");
    const [topic, setTopic] = useState("");
    const [script, setScript] = useState("");
    const [scriptOption, setScriptOption] = useState("manual");
    const [isScriptLoading, setIsScriptLoading] = useState(false);
    const [isVideoLoading, setIsVideoLoading] = useState(false);
    const [videoPath, setVideoPath] = useState("");

    const handleGenerateScript = () => {
        if (topic.trim() === "") {
            alert("Please enter a topic.");
            return;
        }
        setIsScriptLoading(true);
        setScript(""); // Clear previous script
        axios.post("http://localhost:8000/generate-script", { topic }).then((response) => {
            setScript(response.data.script);
        }).catch((error) => {
            console.error("There was an error making the request:", error);
        }).finally(() => {
            setIsScriptLoading(false);
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            projectName,
            topic,
            script
        };
        setIsVideoLoading(true);
        axios.post("http://localhost:8000/generate-video", formData).then((response) => {
            setVideoPath(response.data.video_path);
            alert("Video generated successfully!");
        }).catch((error) => {
            console.error("There was an error making the request:", error);
        }).finally(() => {
            setIsVideoLoading(false);
        });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] py-8 px-4 pt-24">
            <Card className="w-full max-w-2xl bg-[#1A1A1A] border-[#333333]">
                <CardHeader>
                    <CardTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2 text-center">
                        Create Your Video
                    </CardTitle>
                    <CardDescription className="text-zinc-400 text-center text-base md:text-lg">
                        Turn your ideas into engaging videos in seconds!
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                        <div className="space-y-2">
                            <Label htmlFor="script" className="text-zinc-400">Enter your script</Label>
                            <Textarea
                                id="script"
                                value={script}
                                onChange={(e) => setScript(e.target.value)}
                                rows={5}
                                placeholder="Enter your script here..."
                                className="bg-[#1A1A1A] border-[#333333] placeholder:text-zinc-600 text-zinc-300 resize-none focus:ring-1 focus:ring-offset-0 focus:ring-zinc-500 focus:border-zinc-500"
                                required
                            />
                        </div>
                    )}
                    {scriptOption === "generate" && (
                        <div className="space-y-4">
                            <Label className="text-zinc-400">Script</Label>
                            {script.trim() === "" ? (
                                <div className="flex flex-col items-center gap-3">
                                    <p className="text-zinc-500 text-sm">Script will be generated from topic.</p>
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
                                </div>
                            ) : (
                                <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-4 text-zinc-300 whitespace-pre-line min-h-[120px]">
                                    {script}
                                </div>
                            )}
                        </div>
                    )}
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
                {videoPath && (
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-center mb-6">
                            Your Generated Video
                        </h3>
                        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                            <video
                                src={`http://localhost:8000${videoPath}`}
                                controls
                                className="w-full md:w-[340px] h-[220px] md:h-[340px] rounded-xl shadow-2xl bg-black/50"
                            />
                            {/* <Button
                                asChild
                                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                            >
                                <a href={`http://localhost:8000${videoPath}`} download>
                                    Download Video
                                </a>
                            </Button> */}
                        </div>
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
    )
}

export default Form