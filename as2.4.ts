//Typescript interface using classes//

interface Item {
    id: string;
}

interface ItemConstructor <T extends Item>{
    new(id:string): T;
}

interface IdToItemMap <T extends Item> {
    [id: string]: T;
}

class ItemsCache<T extends Item>{
    private itemsCache: IdToItemMap<T>;

    constructor (
        private itemConstructor: ItemConstructor<T>
      )  {
            this.itemsCache = {};
        }
    public createItem(id: string): T {
        if (!!this.itemsCache[id]){
            return this.itemsCache[id];
        }

        const item: T =
            new this.itemConstructor(id);
        this.itemsCache[id] = item;

        return item;
    }
}

class Person1 implements Item {
    constructor(public id: string){

    }
}

const itemsCache = new ItemsCache<Person1>(Person1);

const person1 = 
    itemsCache.createItem("a");
const person2 = 
    itemsCache.createItem("b");
const person3 = 
    itemsCache.createItem("c");

console.log('person1', person1);
console.log('person2', person2);
console.log('person3', person3);
