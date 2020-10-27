import statuses from '../assets/statuses.json';

export type StatusT = typeof statuses[0];

export const getStatuses = () => {
	return statuses;
};

export const getNames = () => statuses.map((status) => status.name);

export const getStatusByName = (name: string): StatusT | undefined =>
	statuses.find((status) => status.name === name);
