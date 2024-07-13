export enum ErrorType {
	None = 'None',
	SSO = 'SSO',
	NotAuthenticated = 'NotAuthenticated',
	Unknown = 'Unknown',
	SystemDown = 'SystemDown',
	BadRequest = 'BadRequest',
	Forbidden = 'Forbidden',
	NotFound = 'NotFound',
	MethodNotAllowed = 'MethodNotAllowed',
	NotAcceptable = 'NotAcceptable',
	Timeout = 'Timeout',
	Unavailable = 'Unavailable',
}

export interface ErrorObject {
	type: ErrorType;
	statusCode?: number;
	title?: string;
	message?: string;
	context?: string;
}
