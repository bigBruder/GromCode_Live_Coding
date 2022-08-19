// function getName() {
//   console.log(this);
//   return 'James';
// }

// console.log(aaa);
// console.log(window);

// getName();
// window.getName();

// const obj = {
//   run: () => {
//     console.log(obj);
//   },
// };

// obj.run();

//timer task

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.secondsPassed;
    this.secondsPassed;
    //Fix with bind
    //     const callback =
    //       function () {
    // console.log('callback context', this)
    //         this.secondsPassed += 1;
    //       }.bind(this),
    //       1000,
    //     );

    setInterval(() => {
      console.log('callback context', this);
      this.secondsPassed += 1;

      this.intervalId = Math.random().toString(36).substring(2, 9);
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearInterval(this.intervalId);
    this.secondsPassed;
    this.minsPassed;
    return this.secondsPassed & this.minsPassed;
  },
  getTime() {
    if (this.minsPassed.toString().length === 1) {
      this.secondsPassed = `0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

//textData
timer.startTimer().stopTimer(); // context+

// 1.func called separately
// const func = timer.startTimer;
// func(); // context -

// 2. callback func loses context!!!

// 3. nested functions
// TODO

// use arrows functions not to lose context!
