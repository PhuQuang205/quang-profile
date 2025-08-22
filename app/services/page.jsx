"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
	{
		num: "01",
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi iste ea suscipit nam cum deserunt.",
		href: "",
	},
	{
		num: "02",
		title: "UI/UX Design",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi iste ea suscipit nam cum deserunt.",
		href: "",
	},
	{
		num: "03",
		title: "Logo Design",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi iste ea suscipit nam cum deserunt.",
		href: "",
	},
	{
		num: "04",
		title: "SEO",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem animi iste ea suscipit nam cum deserunt.",
		href: "",
	},
];

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
					}}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((service, index) => (
						<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
							{/* Top */}
							<div className="w-full flex justify-between items-center">
								<div className="text-5xl text-outline group-hover:text-outline-hover text-transparent font-semibold transition-all duration-500">{service.num}</div>
								<Link href={service.href} className="bg-white size-[70px] rounded-full text-primary flex justify-center items-center hover:-rotate-45 group-hover:bg-accent transition-all duration-500">
									<BsArrowDownRight className="text-3xl" />
								</Link>
							</div>
							{/* title */}
							<h2 className="text-2xl font-bold leading-none group-hover:text-accent transition-all duration-500">{service.title}</h2>
							{/* description */}
							<p>{service.description}</p>
              <div className="w-full border-b border-white/20"></div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
