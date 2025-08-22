import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
	return (
		<section className="h-full">
			{/* Intro banner */}
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">Front-End Developer</span>
						<h1 className="h1 mb-3">
							Hello I am <br />
							<span className="text-accent">QuangPhu</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/50">
							I excel at crafting elegant digital experiences and proficient in
							various programming languages and technologies.
						</p>

						{/* Button social */}
						<div className="mb-9 flex flex-col items-center xl:flex-row gap-8">
							<Button variant="outline" size="lg" className="flex items-center">
								<span className="mr-3">Download CV</span>
								<FiDownload className="text-xl" />
							</Button>
							<div>
								<Social
									containerStyles="flex gap-6 xl:mb-0 mb-5"
									iconStyles="size-9 border border-accent rounded-full flex justify-center items-center hover:text-primary hover:bg-accent text-base text-accent hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					{/* Photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
};

export default Home;
