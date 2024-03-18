module.exports = {
	extends: [require.resolve("@vg/config/eslint/web.js")],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
};
