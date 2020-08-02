const express = require('express');
const app = express();
const chalk = require('chalk');
const moment = require('moment');

app.get('/',function(req,res){
	res.send('hello world')
})

app.get('/time',function(req,res){
	let day = req.query.day;
	let month = req.query.month;
	let year = req.query.year;

	let date = [year,month,day];

	// console.log(chalk.yellow.bgBlue("Connected " + moment(year+month+day,"YYYYMMDD")))
		let tujuh_hari = moment(date).add(7,'d').format("YYYY/MM/DD");
		let empat_puluh_hari = moment(date).add(40,'d').format("YYYY/MM/DD");
		let seratus_hari = moment(date).add(100,'d').format("YYYY/MM/DD");
		let satu_tahun = moment(date).add(1,'y').format("YYYY/MM/DD");
		let dua_tahun = moment(date).add(2,'y').format("YYYY/MM/DD");
		let seribu_hari = moment(date).add(1000,'d').format("YYYY/MM/DD");
		// console.log(chalk.yellow.bgRed("Connected "+date+" kesatu : "+kesatu+" kedua : "+kedua+" ketiga : "+ketiga+" keempat : "+keempat)+" kelima : "+kelima+" keenam : "+keenam);

		let data_selamatan = {
			tanggal:date,
			tujuh_hari,
			empat_puluh_hari,
			seratus_hari,
			satu_tahun,
			dua_tahun,
			seribu_hari
		}
		res.json(data_selamatan)
})

app.listen(8080)