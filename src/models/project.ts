export type ProjectTag = {
	name: string;
	color: string;
};

export type Project = {
	name: string;
	description: string;
	image: string;
	source_code_link?: string;
	published_link?: string;
	tags: ProjectTag[];
};
