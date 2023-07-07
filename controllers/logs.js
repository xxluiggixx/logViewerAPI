
const { readdirSync } = require('fs');
const { response } = require('express');
const { request } = require('http');
const path = require('path');


const pathlog = process.env.PATHLOG || path.join(__dirname,'../logs/');


const getLogs = async (req, res = response) => {

   let fileLogs = []; 
   
    const files = await readdirSync(pathlog);
    for (const file of files){
        const shortName = file.split('.');
        console.log(shortName);
        if ( shortName.length == 2 ){         
            fileLogs.push(file);
        };
    }
    res.json({
        fileLogs
    })
}

const downloadLogs = (req = request, res = response) =>{
    const name = req.params
    const file = pathlog + name['name'];
    res.download(file, (err) =>{
        if (err){
            console.log(err)
        }
    })
}


module.exports = {
    getLogs,
    downloadLogs
}