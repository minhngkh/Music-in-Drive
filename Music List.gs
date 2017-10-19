function Music_List() {
	function Split(file, name) {
		ex = (file.getMimeType().split('/'))[1];
			if(ex.search('-') != -1) {
  				ex = (ex.split('-'))[1]
  			};
  		ex_remove = name.replace('.' + ex, "");
  		final = ex_remove.split(' - ');
  		return final;
 	};
 	var folder_name = '[6] Music';
 	var folder_list = 'Music list of ' + folder_name;
 
 	var folder = DriveApp.getFoldersByName(folder_name)
 	var folders = folder.next();
 	var data = folders.getFiles();
  
 	var ss = SpreadsheetApp.create(folder_list);
 	var sheet = ss.getActiveSheet();
 	sheet.appendRow( ['Full name', 'Music Name', 'Author'] );
  
 	while(data.hasNext()) {
  		file = data.next();
  		full_name = file.getName();
  		before = Split(file, full_name);
  		name = before[0];
  		author = before[1];
  		sheet.appendRow( [full_name, name, author] );   
 	};
};
