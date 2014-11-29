exec = require('child_process').exec

function run(){
	path = Document.current().path();
	fileName = Document.current().displayName(),
	path = path.replace(fileName, '');
//This is /usr/local/bin/git as opposed to git, due to some issue that were had with difftool when running otherwise.
	exec("/usr/local/bin/git difftool",{"cwd":path},function(error,stdout,stderr){
		if (stderr.length>0){
			Alert.show("Error!",stderr);
		}
	});
}

Hooks.addMenuItem("Actions/Show Git difftool","cmd-shift-x",run)