// temp1

class A {
  sayHi() {
    console.log('hi');
  }
}

class B {
  sayHello() {
    console.log('hello');
  }
}

function CustomModule(metadata) {
  const propsKeys = Object.keys(metadata);

  return (target) => {
    for (const property in propsKeys) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, metadata[property], target);
      }
    }
  };
}

@CustomModule({
  controllers: [B],
  providers: [A],
})
class C {}

const providers = Reflect.getMetadata('providers', C);
const controllers = Reflect.getMetadata('controllers', C);

console.log(providers, controllers);
// [ [class A] [class B] ]

new providers[0]().sayHi(); // 'hi'
