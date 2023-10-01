"use strict";
class ObjectPool {
    constructor(size) {
        this.objects = [];
        this.size = size;
        this.availableObjects = [];
    }
    addObject(object) {
        if (this.objects.length < this.size) {
            this.objects.push(object);
        }
        else {
            console.log("size full");
        }
    }
    getObject() {
        if (this.availableObjects.length > 0) {
            return this.availableObjects.pop();
        }
        else {
            return null;
        }
    }
    returnObject(object) {
        if (this.objects.includes(object)) {
            const index = this.objects.indexOf(object);
            if (index !== -1) {
                this.objects.splice(index, 1);
            }
            this.availableObjects.push(object);
        }
    }
}
