import interpreter1 from '@/assets/projects/interpreter1.png';
import interpreter2 from '@/assets/projects/interpreter2.png';
import flexecute1 from '@/assets/projects/flexecute1.png';
import wpmapp1 from '@/assets/projects/wpmapp1.png';
import wpmapp2 from '@/assets/wpmapp2.png';
import assemblytk1 from '@/assets/projects/assemblytk1.png';
import personal1 from '@/assets/projects/personal1.png'
import heartlensflutter from '@/assets/projects/heartlensflutter.png'
import heartlensnext from '@/assets/projects/heartlensnext.png'
import aimal from '@/assets/projects/aimal.png'
import {useState} from "react";
import Image from "next/image";

export const Projects = () => {

    const [hovering, setHovering] = useState("")

    const handleHover = (name: string) => {
        setHovering(name)
    }

    const handleLeave = () => {
        setHovering("")
    }

    return (
        <>
            <div className=" rounded-xl border border-slate-800 bg-gradient-to-l from-slate-700 to-slate-800 px-8 py-10 shadow-2xl text-left max-w-7xl w-full">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16">

                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/heartlensPortal", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("heartlensnext")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={heartlensnext} alt="heartlens next image"  className={`${hovering == "heartlensnext" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Biometrics Web App</p>
                            <p className={"language-gradient font-bold text-lg"}>Next, React, Typescript, Sk Learn, Firebase</p>
                        </button>
                        <p className={"text-gray-300"}> Doctor and healthcare provider portal to view and run analysis on patient data, retrieved through Firestore. Utilizes machine learning model to identify arrhythmias in electrocardiogram data.</p>
                        <p className={"desc-gradient"}><span className={"font-bold"}>Web</span> Component of <span className={"font-bold"}>HeartLens</span></p>
                        <a href={"https://www.youtube.com/watch?v=r2rrfsugdok&ab_channel=RaymondHouse"} target={"_blank"} className={"underline"} rel="noreferrer">link to prototype demo video</a>
                    </div>

                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/MedHacks-HeartLens", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("heartlensflutter")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={heartlensflutter} alt="heartlens flutter image"  className={`${hovering == "heartlensflutter" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Biometrics Mobile App</p>
                            <p className={"language-gradient font-bold text-lg"}>Flutter, Dart, Firebase</p>
                        </button>
                        <p className={"text-gray-300"}>Captures user's pulse and electrocardiogram-like data using camera brightness values. Users can login and upload to their data to healthcare providers, or save scans locally.</p>
                        <p className={"desc-gradient"}><span className={"font-bold"}>Mobile</span> Component of <span className={"font-bold"}>HeartLens</span></p>
                        <a href={"https://www.youtube.com/watch?v=r2rrfsugdok&ab_channel=RaymondHouse"} target={"_blank"} className={"underline"} rel="noreferrer">link to prototype demo video</a>
                    </div>

                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/tinycompiler", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("interpreter")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={interpreter1} alt="interpreter1"  className={`${hovering == "interpreter" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Java-based Compiler</p>
                            <p className={"language-gradient font-bold text-lg"}>Java, Dot</p>
                        </button>
                        <p className={"text-gray-300"}>SSA compiler for a context-free grammar. Compiler divided into a tokenizer, recursive-descent parser, and file reader. Generates Dot graph code for DLX processors. </p>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/AIMalwareDetection", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("aimalware")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={aimal} alt="aimalware"  className={`${hovering == "aimalware" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>File Malware Detection</p>
                            <p className={"language-gradient font-bold text-lg"}>Python, Tensorflow, Qt</p>
                        </button>
                        <p className={"text-gray-300"}>Machine learning model scans an input file via Qt to determine whether or not a file can be labeled malicious or not. Program is able to predict whether or not Portable Executables(PE's) are malicious. </p>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/fitnessnext", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("flexecute")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={flexecute1} alt="flexecute"  className={`${hovering === "flexecute" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Fitness App Registration</p>
                            <p className={"language-gradient font-bold text-lg"}>Next.js, Graphql, Prisma, Tensorflow, Postgres</p>
                        </button>
                        <p className={"text-gray-300"}>Machine learning based fitness tracking website made to simplify the meal prep and routine selection process. Model for suggestions developed with Tensorflow, website built in Next.js. </p>
                        <a href={"https://fitnessnext-rho.vercel.app/"} target={"_blank"} className={"underline"} rel="noreferrer">link to demo website</a>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/speedcodesite", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                onMouseEnter={() => handleHover("wpmapp")}
                                onMouseLeave={() => handleLeave()}
                            >
                                <Image src={wpmapp1} alt={"wpmapp image"} className={`${hovering === "wpmapp" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `} />
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Speed Coding Site</p>
                            <p className={"language-gradient font-bold text-lg"}>React, Node, Tailwind, Express</p>
                        </button>
                        <p className={"text-gray-300"}>Race to complete a randomly generated coding challenge in Java, Python, or C#. Users press Run Code to compile/interpret their language through Docker containers. </p>
                        <p>domain/demo soon</p>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/assembly-toolkit", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("toolkit")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={assemblytk1} alt="website1"  className={`${hovering === "toolkit" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200 h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Assembly Toolkit</p>
                            <p className={"language-gradient font-bold text-lg"}>React, Next, Tailwind</p>
                        </button>
                        <p className={"text-gray-300"}>Public website featuring bit and machine code to MIPS assembly instruction conversions. Helped me a lot in my computer organization course.</p>
                        <a href={"https://assemblytoolkit.com"} target={"_blank"} className={"underline"} rel="noreferrer">assemblytoolkit.com</a>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/personalsite", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("website")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <Image src={personal1} alt="website1"  className={`${hovering === "website" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200 h-52 w-96 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Personal Website</p>
                            <p className={"language-gradient font-bold text-lg"}>React, Tailwind, TS</p>
                        </button>
                        <p className={"text-gray-300"}>Personal website highlighting my skills and experience. Developed with React & Typescript and styled using Tailwind CSS. </p>
                        <a href={""} target={"_blank"} className={"underline"} rel="noreferrer">raymondhouse.net</a>
                    </div>
                </div>
            </div>
        </>
    )
}