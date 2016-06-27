export class SmallStuff {
	constructor (
	public name2:string,
	public  name3:string,
	public name4:string){}
}

export class BananaBox {
  constructor(
	     public name: string,
    public description: string,
    public smallStuff: SmallStuff
  ) {  }
}
