module.exports = {
	extends: [require.resolve('@vg_rust_hello/config/eslint/web.js')],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json'
	}
};
