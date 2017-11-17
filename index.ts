module com.teknikgymnasiet.programmering {
    export class Lektion2{
        protected_testVariabel: number = 0;

        constructor() {
            console.log("Hello World");
        }

        protected HelloWorld(){
            console.log("Hello World!");
        }
    }


    export class TestaProtected extends Lektion2 {
        private _egenReferens:boolean = false;

        constructor() {
            super();
            this.HelloWorld();
        }
    }
}

var VaranKlass = new com.teknikgymnasiet.programmering.Lektion2();
