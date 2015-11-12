module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
/*    responsive_images: {
           
            dev:{
            files:[{
                expand:true,
                cwd: './img',
                src: ['old/*.jpg'],
                dest:'./img/new/'
            }],
            options:{
                //sizes:[{height:500,name:'small',width:500}],
                quality: 80,
                engine:'im'
            }
        }
       }
*/

    
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-responsive-images');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.

};