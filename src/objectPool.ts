class ObjectPool {
  objects: Array<Object>;
  availableObjects: Array<Object>;

  constructor(size: number, ObjectClass: any) {
    this.objects = [];
    for (let i = 0; i < size; i++) {
      this.objects.push(new ObjectClass(0, 0));
    }
    this.availableObjects = [...this.objects];
  }

  getObject() {
    if (this.availableObjects.length > 0) {
      return this.availableObjects.pop();
    } else {
      return null;
    }
  }

  returnObject(object: Object) {
    if (object && this.objects.includes(object)) {
      this.availableObjects.push(object);
    }
  }
}
