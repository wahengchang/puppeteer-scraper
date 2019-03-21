exports.execPromise = function(cmd){
    return new Promise((resolve, reject)=>{
        // this would be way easier on a shell/bash script :P
        const child_process = require('child_process');

        console.log(`[INFO] Child process: ${cmd}`)

        const p = child_process.exec(cmd,function (error, stdout, stderr) {
            console.log('error: ' + error);
            console.log('stderr: ' + stderr);
            console.log('stdout: ' + stdout);
            return resolve()
        })
    })
  };
  
  