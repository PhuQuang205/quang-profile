import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const about = {
	title: "About me",
	description:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque temporibus porro optio ea laborum eveniet, maxime asperiores quaerat magni aliquam ",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Dinh Phu Quang",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+83) 353 225 080",
		},
		{
			fieldName: "Experience",
			fieldValue: "0+ Years",
		},
		{
			fieldName: "Skype",
			fieldValue: "Dinh Phu Quang",
		},
		{
			fieldName: "Nationality",
			fieldValue: "VietNam",
		},
		{
			fieldName: "Email",
			fieldValue: "dinhphuquang20052004@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "VietNamese",
		},
	],
};

export const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My Experience",
	description:
		"Over the years, I've worked across different roles in web development, gaining hands-on experience in both front-end and back-end technologies.",
	items: [
		{
			company: "Tech Solutions Ltd.",
			position: "Full Stack Developer",
			duration: "2023 - Present",
		},
		{
			company: "Web Design Studio",
			position: "Front-End Developer Intern",
			duration: "2022 - 2023",
		},
		{
			company: "Web Design Studio",
			position: "Front-End Developer Intern",
			duration: "2022 - 2023",
		},
		{
			company: "Web Design Studio",
			position: "Front-End Developer Intern",
			duration: "2022 - 2023",
		},
	],
};

export const education = {
	icon: "/assets/resume/cap.svg",
	title: "My Education",
	description:
		"Over the years, I've pursued studies in computer science and related fields, building a strong academic foundation for my career in technology.",
	items: [
		{
			institution: "University of Technology",
			degree: "Bachelor of Computer Science",
			duration: "2018 - 2022",
		},
		{
			institution: "City College of Information Technology",
			degree: "Associate Degree in Software Engineering",
			duration: "2016 - 2018",
		},
	],
};

export const skills = {
	title: "My Skills",
	description:
		"Through continuous learning and hands-on projects, I've built a strong skill set in both front-end and back-end development, as well as design tools.",
	skillList: [
		{ icon: <FaHtml5 />, name: "HTML5" },
		{ icon: <FaCss3 />, name: "CSS3" },
		{ icon: <FaJs />, name: "JavaScript" },
		{ icon: <FaReact />, name: "React.js" },
		{ icon: <SiNextdotjs />, name: "Next.js" },
		{ icon: <SiTailwindcss />, name: "Tailwind CSS" },
		{ icon: <FaNodeJs />, name: "Node.js" },
		{ icon: <FaFigma />, name: "Figma" },
	],
};

export const projects = [
	{
		num: "01",
		category: "frontend",
		title: "project 1z",
		descrition:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque consequatur velit consectetur",
		stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "full-stack",
		title: "project 2",
		descrition:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque consequatur velit consectetur",
		stack: [{ name: "Next Js" }, { name: "Tailwind css" }, { name: "Node Js" }],
		image: "/assets/work/thumb2.png",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "frontend",
		title: "project 3",
		descrition:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque consequatur velit consectetur",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
		image: "/assets/work/thumb3.png",
		live: "",
		github: "",
	},
];
