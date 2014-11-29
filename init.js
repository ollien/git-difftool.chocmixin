exec = require('child_process').exec

function run(){
	path = Document.current().path();
	fileName = Document.current().displayName(),
	path = path.replace(fileName, '');
//Uncomment the following line if it's giving you trouble. Comment the one after that. It worked on my system with the former one, but I realize not all setups will be the same. 

	// exec("/usr/local/bin/git difftool",{"cwd":path},function(error,stdout,stderr){
	exec("git difftool",{"cwd":path},function(error,stdout,stderr){
		if (stderr.length>0){
			Alert.show("Error!",stderr);
		}
	});
}

Hooks.addMenuItem("Actions/Show Git difftool","cmd-shift-x",run)