"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const Nav = () => {
	const path = usePathname();
	console.log(path);
	return (
		<nav className="flex gap-8 items-center">
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					className={cn(
						"capitalize transition-all font-medium hover:text-accent",
						link.path === path && "text-accent border-b-2 border-accent"
					)}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
