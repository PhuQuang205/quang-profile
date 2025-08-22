"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const MobileNav = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="bg-blue-950 p-2 rounded-md">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>			
			<SheetContent className="flex flex-col">
				<SheetTitle></SheetTitle>
				<div className="mt-32 mb-32 text-2xl text-center">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Quang<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				<nav className="flex flex-col gap-5 items-center justify-center">
					{links.map((link, index) => (
						<Link 
                        key={index}
                         href={link.path}
                         className= {cn("capitalize hover:text-accent", link.path === pathname && "text-accent border-b-2 border-accent")}
						 onClick={() => setOpen(false)}
                         >
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
