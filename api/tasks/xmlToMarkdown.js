module.exports = function (grunt) {
	var xmlParser = require('./lib/xmlParser')(grunt);
	var namespaceMarkdownGenerator = require('./lib/namespaceMarkdownGenerator')(grunt);
	var classMarkdownGenerator = require('./lib/classMarkdownGenerator')(grunt);

	var scapeFileName = function (name) {
		return name.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '_');
	};

	grunt.registerMultiTask('xmlToMarkdown', function () {
		var done = this.async();
		var promises = [];

		this.files.forEach(function (file) {
			var sources = file.src.filter(function (path) {
				if (!grunt.file.exists(path)) {
					grunt.log.warn('Source file ' + path + ' not found.');
					return false;
				}

				return true;
			});

			sources.forEach(function (path) {
				var namespacePromise = xmlParser.getModel(path)
					.then(function (model) {
						model.classes.forEach(function (c) {
							var classDestPath = file.dest + scapeFileName(c.name) + '.md';
							var classPromise = classMarkdownGenerator.generate(classDestPath, c);
							promises.push(classPromise);
						});

						var destPath = file.dest + scapeFileName(model.name) + '.md';
						return namespaceMarkdownGenerator.generate(destPath, model);
					});

				promises.push(namespacePromise);
			});
		});

		Promise.all(promises).then(function () {
			done();
		}).catch(function (err) {
			grunt.fail.warn(err);
			//done(false);
		});
	});
};