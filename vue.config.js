const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/main.scss";
        `,
        includePaths: [
          path.resolve(__dirname, './node_modules/compass-mixins/lib'),
        ],
      },
    },
  },
};
