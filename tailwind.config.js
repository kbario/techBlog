module.exports = {
  content: ['views/*.handlebars', 'public/js/*.js', 'views/**/*.handlebars'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
