class ObjectPool<T> {
  private objects: T[];
  private availableObjects: T[];

  constructor(size: number, ObjectClass: { new (...args: any[]): T }) {
    this.objects = [];
    for (let i = 0; i < size; i++) {
      this.objects.push(new ObjectClass(0, 0));
    }
    this.availableObjects = [...this.objects];
  }

  getObject(): T | null {
    if (this.availableObjects.length > 0) {
      return this.availableObjects.pop() || null;
    } else {
      return null;
    }
  }

  returnObject(object: T): void {
    if (object && this.objects.includes(object)) {
      this.availableObjects.push(object);
    }
  }
}
