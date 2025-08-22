import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors ring-offset-white",
	{
		variants: {
			variant: {
				default: "bg-accent text-primary hover:bg-accent-hover",
				primary: "bg-primary text-white",
				outline:
					"border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
			},
			size: {
				default: "h-[44px] px-6",
				md: "h-[48px] px-6",
				lg: "h-[56px] px-8 text-sm capitalize tracking-[2px]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({ className, variant, size, asChild = false, ...props }) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
