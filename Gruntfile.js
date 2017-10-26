module.exports = function(grunt) {
	//配置grunt文档
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		cssmin:{
			combine:{
				files:{
					//两个文件结合在一起
					"app/css/style.css":["app/css/fontsize.css","app/css/background.css"]
				}
			}
		},
		uglify:{
			dist:{
				files:{
					//代码整合
					"app/js/main.min.js":["app/js/main.js"]
				}
			}
		}
	})
	grunt.loadNpmTasks("grunt-contrib-cssmin"); //两个单独执行
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default",["cssmin","uglify"]); //两个任务一起执行
	// grunt.registerTask("default",'',function(){
	// 	grunt.log.write("在终端运行Grunt命令就会执行这句话");
	// });
}	


//ajax无刷新的页面内容更新......