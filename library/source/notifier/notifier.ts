export interface INotifier {
	error(message: string): void;
	warn(message: string): void;
	log(message: string): void;
}

export class ConsoleNotifier implements INotifier {
	error(message: string): void {
		console.error(message);
	}

	warn(message: string): void {
		console.warn(message);
	}

	log(message: string): void {
		console.log(message);
	}
}