#![allow(non_snake_case)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use std::fs;
use std::path::PathBuf;

module_manifest!();

pub fn main() {}

#[marine]
pub fn write(data: String, path: String) -> bool {

    let vault = vault(&path);
    let _ = fs::write(vault,data).unwrap();

    true
}

#[marine]
pub fn dir(path: String) -> bool {

    let vault = vault(&path);
    let _ = fs::create_dir_all(vault).unwrap();

    true
}

#[marine]
pub fn inspect(path: String) -> Vec<String> {

    let vault = vault(&path);
    let mut filenames = Vec::new();

    // Read the directory
    let dir_entries = fs::read_dir(vault).unwrap();

    // Iterate over the directory entries
    for entry in dir_entries {
        let entry = entry.unwrap();
        let file_name = entry.file_name().into_string().unwrap(); // Convert OsString to String
        filenames.push(file_name);
    }

    filenames
}


fn vault(path: &String) -> String {
    
    let vault: String;
    let cp = marine_rs_sdk::get_call_parameters();

    if path == "." || path == "/" || path == "" {
        vault = format!("/tmp/vault/{}-{}", cp.particle.id, cp.particle.token)
    } else {
        vault = format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, path)
    }

    vault
}
