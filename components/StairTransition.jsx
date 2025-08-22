"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// component
import Stairs from "@/components/Stairs";

const StairTransition = () => {
	const pathname = usePathname();

	return (
		<>
			<AnimatePresence mode="wait">
				<div key={pathname}>
					<div className="w-screen h-screen pointer-events-none z-40 top-0 left-0 right-0 fixed flex">
						<Stairs />
					</div>

					<motion.div
						className="h-screen w-screen bg-primary fixed pointer-events-none"
						initial={{ opacity: 1 }}
						animate={{
							opacity: 0,
							transition: {
								delay: 1,
								ease: "easeInOut",
								duration: 0.3,
							},
						}}
					/>
				</div>
			</AnimatePresence>
		</>
	);
};

export default StairTransition;
