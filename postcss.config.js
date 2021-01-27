/* A postcss config file used to build and compress the tailwinds css file. */

// Remove comment and minify css
const cssnano = require('cssnano')({
    preset: ['default', {
        normalizeWhitespace: false
    }]
})

// Removes all unused css classes
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        '{,!(node_modules|_site)/**/}*.{html,md}',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = ctx => ({
    plugins: [
        require('tailwindcss')('tailwind.config.js'),
        require('autoprefixer'),
        ...ctx.env === 'production' ? [purgecss, cssnano] : [],
    ]
})
