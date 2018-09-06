/*module.exports =  {
  park : () => {
    return "Stopped";
  },
  drive : () => {
    return "vrooom";
  }
}*/

function Car() {
  this.park = () => {
    return "stopped";
  };
  this.drive = () => {
    return "vrooom";
  }
}

module.exports = Car;
