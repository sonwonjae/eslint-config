/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ['./base.js', require.resolve('@vercel/style-guide/eslint/next')],
	env: {
		node: true,
		browser: true,
	},
};
