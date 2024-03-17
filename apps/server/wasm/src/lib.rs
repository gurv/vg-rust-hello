use wasm_bindgen::prelude::*;
use hello_lib;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {} {}!", name, hello_lib::add(2, 3)));
}
