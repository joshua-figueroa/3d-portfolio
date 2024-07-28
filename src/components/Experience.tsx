/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { experiences } from "../constants";
import { Experience } from "../models/exp";
import { textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ exp }: { exp: Experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={exp.date}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={exp.icon} alt={exp.company_name} className="w-3/4 h-3/4 object-contain" />
				</div>
			}
			iconStyle={{ background: exp.iconBg }}
		>
			<div>
				<h3 className="text-white text-xl font-semibold">{exp.title}</h3>
				<p className="text-secondary font-semibold">{exp.company_name}</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{exp.points.map((point, index) => (
					<li key={`exp-point-${index}`} className="text-white-100 text-sm pl-1 tracking-wider">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const ExperienceSection = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="section-sub-text">What I have done so far</p>
				<h2 className="section-head-text">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} exp={exp} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(ExperienceSection, "experience");
