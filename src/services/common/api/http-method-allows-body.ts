import { HttpMethod } from '../../../types';

export const httpMethodAllowsBody = (httpMethod: HttpMethod): boolean => {
	return (
		httpMethod === HttpMethod.Post ||
		httpMethod === HttpMethod.Put ||
		httpMethod === HttpMethod.Patch ||
		httpMethod === HttpMethod.Delete
	);
};
