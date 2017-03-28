//Typescript interface using classes//
var ItemsCache = (function () {
    function ItemsCache(itemConstructor) {
        this.itemConstructor = itemConstructor;
        this.itemsCache = {};
    }
    ItemsCache.prototype.createItem = function (id) {
        if (!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }
        var item = new this.itemConstructor(id);
        this.itemsCache[id] = item;
        return item;
    };
    return ItemsCache;
}());
var Person1 = (function () {
    function Person1(id) {
        this.id = id;
    }
    return Person1;
}());
var itemsCache = new ItemsCache(Person1);
var person1 = itemsCache.createItem("a");
var person2 = itemsCache.createItem("b");
var person3 = itemsCache.createItem("c");
console.log('person1', person1);
console.log('person2', person2);
console.log('person3', person3);
