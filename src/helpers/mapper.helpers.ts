import { reduce } from 'lodash';

type DataItemT = { [key: string]: any };
type KeyItemT = { [key: string]: string };

export const getDataKeys = <DataT>(data: DataT) => {
	const keys = Object.keys(data);
	return reduce(
		keys,
		(result, value) => {
			result[value] = value;
			return result;
		},
		{} as KeyItemT,
	);
};
