function loop(value, test, update, execute) {
    if (!test(value)) return; // stop
    execute(value);
    return loop(update(value), test, update, execute);
  }
 
  loop(3, n => n > 0, n => n - 1, console.log);
