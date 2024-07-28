/* eslint-disable react-refresh/only-export-components */
import SectionWrapper from "./hoc/SectionWrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants/techs";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((tech, index) => (
				<div key={`${tech.name}_${index}`} className="w-28 h-28">
					<BallCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
