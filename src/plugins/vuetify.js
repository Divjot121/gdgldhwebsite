import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#1a73e8',
            secondary: colors.grey.darken1,
            accent: '#34a853',
            error: '#ea4335',
            warning: '#fbbc04',
          },
          dark: {
            primary: '#8ab4f8',
            accent: '#81c995',
            error: '#f28b82',
            warning: '#fdd663',
          },
        },
    },
});
