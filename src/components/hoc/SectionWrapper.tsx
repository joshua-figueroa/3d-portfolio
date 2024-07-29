import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component: JSX.ElementType, idName: string) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer(0.01, 0)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0 }}
				className="padding max-w-7xl mx-auto relative z-0"
			>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				{<Component />}
			</motion.section>
		);
	};

export default SectionWrapper;
