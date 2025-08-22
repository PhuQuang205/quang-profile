"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/context/context";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Work = () => {
	const [project, setProject] = useState(projects[0]);
	const handleSlideChange = (swiper) => {
		// get current slide index
		const slideCurrent = swiper.activeIndex;
		setProject(projects[slideCurrent]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
			}}
			className="flex justify-center py-12 min-h-[80vh] flex-col xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-8">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* OutLine num */}
							<div className="text-8xl leading-none text-transparent text-outline font-extrabold">
								{project.num}
							</div>
							{/* project category */}
							<h2 className="text-5xl leading-none font-bold group-hover:text-accent transition-all duration-500 capitalize text-white">
								{project.category} project
							</h2>
							{/* project description */}
							<p className="text-white/50">{project.descrition}</p>
							{/* stack */}
							<ul className="flex gap-4">
								{project.stack.map((item, index) => (
									<li key={index} className="text-xl text-accent">
										{item.name}
										{index !== project.stack.length - 1 && ","}
									</li>
								))}
							</ul>
							<div className="border border-white/20" />
							<div className="flex items-center gap-4">
								{/* Live Project */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="size-16 bg-white/5 rounded-full flex justify-center items-center group">
												<BsArrowUpRight className="text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								{/* Github Project */}
								<Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="size-16 bg-white/5 rounded-full flex justify-center items-center group">
												<BsGithub className="text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github responsitory</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%] relative">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:w-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<div className="relative h-[460px] flex justify-center items-center bg-pink-50/20 group">
											{/* overlay */}
											<div className="absolute bg-black/20 w-full h-full top-0 bottom-0 z-10"></div>
											{/* image */}
											<div className="relative w-full h-full">
												<Image
													src={item.image}
													fill
													alt={item.category}
													className="object-cover"
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							<WorkSliderBtns
								containerStyles="absolute inset-0 flex items-center justify-between xl:static xl:mt-4 z-20 xl:w-full xl:justify-end xl:gap-2 px-2 xl:px-0"
								iconStyles=""
								btnStyles="hover:bg-accent size-[44px] hover:text-primary rounded-full flex justify-center items-center p-3 cursor-pointer transition-all duration-500"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
