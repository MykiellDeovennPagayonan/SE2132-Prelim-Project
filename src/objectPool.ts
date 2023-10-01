class ObjectPool {
  size: number;
  objects: Array<Square | Octagon | Circle>;
  availableObjects: Array<Square | Octagon | Circle>;

  constructor(size: number) {
    this.objects = [];
    this.size = size;
    this.availableObjects = [];
  }

  addObject(object: Square | Octagon | Circle) {
    if (this.objects.length < this.size) {
      this.objects.push(object)
    } else {
      console.log("size full")
    }
  }

  getObject() {
    if (this.availableObjects.length > 0) {
      return this.availableObjects.pop();
    } else {
      return null;
    }
  }

  returnObject(object: Square | Octagon | Circle) {
    if (this.objects.includes(object)) {
      const index = this.objects.indexOf(object);
  
      if (index !== -1) {
        this.objects.splice(index, 1);
      }
      
      this.availableObjects.push(object);
    }
  }

  removeAll() {
    this.objects = []
    this.availableObjects = []
  }
}

