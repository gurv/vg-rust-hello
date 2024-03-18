# vg

[![.github/workflows/ci.yml](https://github.com/gurv/vg-rust-hello/actions/workflows/ci.yml/badge.svg)](https://github.com/gurv/vg-rust-hello/actions/workflows/ci.yml)

```
# install Rust

# install NodeJS

$ curl -fsSL https://get.pnpm.io/install.sh | sh -
$ pnpm install

$ cargo install wasm-pack
$ cargo install cargo-make

$ cargo new hello-wasm --lib
$ cargo new hello-lib --lib

$ wasm-pack build hello-wasm --target web
$ cargo build
$ cargo build --target wasm32-unknown-unknown --release

$ cargo check

$ cargo run
$ ./target/debug/vg
$ docker image build .

$ cd hello-wasm
$ python3 -m http.server
# http://localhost:8000/
$ cd ..

$ cd hello-cli-tui
$ cargo run
# exit - q
$ cd ..

$ cd hello-tauri
$ cargo install tauri-cli
$ cargo tauri dev 

$ pnpm run --filter @vg/desktop tauri dev
```
