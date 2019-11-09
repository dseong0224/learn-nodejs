const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class SpeakerService {
  constructor(datafile){
    this.datafile = datafile;
  }

  getData(){

  }
}

module.exports = SpeakerService