const {
  Observable,
  retry,
  timer,
  catchError,
  throwError,
  defer,
  lastValueFrom,
} = require('rxjs');

// 1. timer
// const exampleTimer = timer(2000);

// exampleTimer.subscribe({
//   next: (val) => console.log('timer emitted', val),
//   complete: () => console.log('timer completed'),
// });

// 2. retry
// let count = 0;
// const errorProneObserable = new Observable((subscriber) => {
//   console.log('retry', count++);
//   subscriber.error(new Error('this is an error'));
// });

// const handledObservable = errorProneObserable.pipe(
//   retry(3),
//   catchError((err) => {
//     console.log('catch error', err);
//     return throwError(() => new Error('Error after retries'));
//   }),
// );

// handledObservable.subscribe({
//   error: (err) => {
//     console.log('~', err);
//   },
// });

// 3. 延迟创建Observable,需要被订阅的时候，才会创建
const deferObservable = defer(() => {
  console.log('Observable created');
  return new Observable((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
  });
});

async function getDeferedValue() {
  const result = await lastValueFrom(deferObservable);
  console.log('Deferred Value:', result);
}

getDeferedValue();
