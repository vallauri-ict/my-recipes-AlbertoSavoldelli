import { IngredientModel } from "./ingredient.model";

export class RecipeModel{
    public _id:string;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:IngredientModel[];
    constructor(name:string,desc:string,img:string){
        this.name=name;
        this.description=desc;
        this.imagePath=img;
    }
}
