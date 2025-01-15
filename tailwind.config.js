import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"sans-serif"', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                'text-primary': '#314252',
                't-secondary': '#556575',
                't-disabled': '#B1B5B8',
                'card-and-hover': '#E1D9C6',
                'main-and-focus': '#F7F4ED',
                'side-and-button': '#EFE9DB',
                'focus-outline': '#E4DECC',
                'main-outline': '#C7BDA8',
                'coin': '#FFA600',
                'warning': '#F95D6A',
                'success': '#00B47D',
            },

        },
    },

    plugins: [forms],
};
