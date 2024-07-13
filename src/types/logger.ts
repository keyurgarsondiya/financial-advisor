export interface Logger {
	info: (message?: any, ...optionalParams: Array<any>) => void;
	debug: (message?: any, ...optionalParams: Array<any>) => void;
	warn: (message?: any, ...optionalParams: Array<any>) => void;
	fatal: (message?: any, ...optionalParams: Array<any>) => void;
	error: (message?: any, ...optionalParams: Array<any>) => void;
}
