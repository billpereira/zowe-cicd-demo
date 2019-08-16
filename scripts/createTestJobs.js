const fs = require('fs');
const path = require('path');

const createTestCopy = (jclName, jclDirectory) => {
	fs.readFile(path.join(jclDirectory, jclName), (err, data) => {
		if (err) throw err;

		let newJcl = data.toString().replace(',SYSAFF=*', ',SYSAFF=*,TYPRUN=SCAN');

		fs.writeFile(`test.${jclName}`, newJcl, err => {
			if (err) throw err;
			console.log(`The file test.${jclName} has been saved!`);
		});
	});
};

const checkJcl = () => {
	const jclDirectory = path.resolve(path.join(__dirname, '..', 'app'));
	fs.readdir(jclDirectory, function(err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}

		files = files.filter(element => element.indexOf('jcl') > 0);

		console.log(files);

		files.forEach(jcl => createTestCopy(jcl, jclDirectory));
	});
};

checkJcl();
