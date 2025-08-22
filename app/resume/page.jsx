"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { about, experience, skills, education } from "@/context/context";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex justify-center xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-12"
				>
					<TabsList className="w-full flex flex-col max-w-[300px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70px] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full mb-10">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="bg-primary overflow-hidden">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										{experience.items.map((item, index) => (
											<motion.li
												key={index}
												className="bg-[#232329] flex flex-col justify-center items-center gap-1 lg:items-start rounded-xl py-6 px-10"
												initial={{ opacity: 0, y: 40 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ amount: 0.3, once: true }}
												transition={{ duration: 0.6, delay: index * 0.1 }}
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.position}
												</h3>
												<div className="flex items-center gap-3">
													<span className="size-[6px] rounded-full bg-accent "></span>
													<p className="text-white/50">{item.company}</p>
												</div>
											</motion.li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
										{education.items.map((item, index) => (
											<motion.li
												key={index}
												className="bg-[#232329] flex flex-col justify-center items-center gap-1 lg:items-start rounded-xl py-6 px-10"
												initial={{ opacity: 0, y: 40 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ amount: 0.3, once: true }}
												transition={{ duration: 0.6, delay: index * 0.1 }}
											>
												<span className="text-accent">{item.duration}</span>
												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
													{item.degree}
												</h3>
												<div className="flex items-center gap-3">
													<span className="size-[6px] rounded-full bg-accent "></span>
													<p className="text-white/50">{item.institution}</p>
												</div>
											</motion.li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}
						<TabsContent value="skills" className="w-full mb-10">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] max-w-[600px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="xl:min-w-[600px] text-white/50 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
							</div>
							<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] mt-10">
								{skills.skillList.map((skill, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, y: 40 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ amount: 0.3, once: true }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
									>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
													<div className="text-6xl group-hover:text-accent transition-all duration-500">
														{skill.icon}
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p>{skill.name}</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</motion.li>
								))}
							</ul>
						</TabsContent>
						{/* about */}
						<TabsContent value="about" className="w-full pb-10 flex justify-center xl:text-left text-center">
							<div className="flex flex-col gap-[30px] max-w-[600px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="mx-auto xl:mx-0 text-white/50">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 max-w-[600px]">
									{about.info.map((item, index) => (
										<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
											<span className="text-white/50">{item.fieldName}:</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
