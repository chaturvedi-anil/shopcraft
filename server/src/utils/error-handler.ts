export default class ErrorHandler extends Error {
  statusCode: number;
  details?: string;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}
