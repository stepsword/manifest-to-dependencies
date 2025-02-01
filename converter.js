function convert(contents_of_file, load_when) {
    try {
        var contents = JSON.parse(contents_of_file);
        
        files_array = contents["files"];
        output = "dependencies {<br/>"
        for (var i = 0; i < files_array.length; i++) {
            obj = files_array[i];
            project_id = obj["projectID"];
            file_id = obj["fileID"];
            made_up_mod_name = "mod" + (i + 1);
            output_line = "&nbsp;&nbsp;&nbsp;&nbsp;" + load_when + " 'curse.maven:" + made_up_mod_name + "-" + project_id + ":" + file_id + "'<br/>";
            output += output_line;
            
        }
        output += "}"
        return output
    } catch (error) {
        return "Your JSON sucks or something, this totally worked on my computer:" + error;
    }
}