export interface CurrentUser  {
	extId: string;
    isAuthed:boolean;
	isValid?:boolean;
	validationError?:string;
}