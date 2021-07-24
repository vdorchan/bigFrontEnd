const myExtends = (SuperType, SubType) => {
  function ExtendedType(...args) {
    SuperType.apply(this, args)
    SubType.apply(this, args)

    this.__proto__ = SubType.prototype;
  }


  SubType.prototype = Object.create(SuperType.prototype)
  SubType.prototype.constructor = SubType

  ExtendedType.prototype = Object.create(SubType.prototype)
  ExtendedType.prototype.constructor = ExtendedType

  Object.setPrototypeOf(ExtendedType, SuperType)

  return ExtendedType
}