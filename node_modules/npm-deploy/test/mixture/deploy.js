exports.options = {

};

exports.script = {
  "id3": {
    "type": "npm"
  },
  "node-redis": {
    "type": "git",
    "path": "git://github.com/Tim-Smart/node-redis.git"
  },
  "run tests": {
    "type": "command",
    "commands": [
      function (done) {
        console.log('Function test done.');
        done();
      },
      "rm -rf .deploy"
    ]
  }
};
