"use client";

import { cn } from "@/lib/utils";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats = [
	{
		num: 12,
		text: "Years of experience",
	},
	{
		num: 26,
		text: "Project completed",
	},
	{
		num: 8,
		text: "technologies mastered",
	},
	{
		num: 500,
		text: "Code commits",
	},
];

const Stats = () => {
	return (
		<section>
			<div className="container mx-auto">
				<div className="flex gap-6 flex-wrap mx-auto max-w-[80vw] xl:max-w-none mb-10">
					{stats.map((stat, index) => (
						<div key={index} className="flex flex-1 gap-4 justify-center items-center xl:justify-start">
							<CountUp
								end={stat.num}
								duration={5}
								delay={2}
								className="text-4xl xl:text-6xl font-extrabold"
							/>
                            <p className={cn("leading-snug text-white/80", stat.text.length < 15 ? "max-w-[100px]": "max-w-[150px]")}>{stat.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
