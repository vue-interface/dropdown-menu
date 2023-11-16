const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = plugin(function({ addComponents, theme }) {
    addComponents(theme('dropdownMenu.css'));
}, {
    theme: {
        dropdownMenu: theme => ({
            css: {
                // The dropdown menu
                '.dropdown-menu': {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    display: 'none', // none by default, but block on "open" of the menu
                    minWidth: '10rem',
                    padding: '.5rem 0',
                    // margin: `${theme('dropdownMenu.spacer')} 0 0`, // override default ul
                    fontSize: '1rem',
                    // color: 'inherit',
                    textAlign: 'left', // Ensures proper alignment if parent has it changed (e.g., modal footer)
                    listStyle: 'none',
                    backgroundColor: colors.white,
                    backgroundClip: 'padding-box',
                    border: `1px solid ${colors.neutral[400]}`,
                    borderRadius: '.25rem',
                    boxShadow: '0 .25rem 1rem rgba(0, 0, 0, .5)',

                    '@apply dark:bg-neutral-800': {},
                    '@apply dark:border-neutral-700': {},

                    // The dropdown wrapper (`<div>`)
                    '.dropup:has(&), .dropright:has(&), .dropdown:has(&), .dropleft:has(&)': {
                        position: 'relative'
                    },

                    // When enabled Popper.js, reset basic dropdown position
                    // stylelint-disable-next-line no-duplicate-selectors
                    '&[x-placement^="top"], &[x-placement^="right"], &[x-placement^="bottom"], &[x-placement^="left"]': {
                        right: 'auto',
                        bottom: 'auto'
                    },

                    // Links, buttons, and more within the dropdown menu
                    //
                    // `<button>`-specific styles are denoted with `// For <button>s`
                    '.dropdown-item, & > :not(hr, .dropdown-header, .dropdown-item-text, .dropdown-item-plain, .dropdown-divider)': {
                        display: 'flex',
                        width: '100%', // For `<button>`s
                        padding: '.25rem 1rem',
                        clear: 'both',
                        fontWeight: 'normal',
                        color: theme('colors.neutral.800', colors.neutral[800]),
                        textAlign: 'inherit', // For `<button>`s
                        textDecoration: 'none',
                        whiteSpace: 'nowrap', // prevent links from randomly breaking onto new lines
                        backgroundColor: 'transparent', // For `<button>`s
                        border: 0, // For `<button>`s

                        '@apply dark:text-neutral-300': {},

                        '&:hover, &:focus': {
                            color: theme('colors.neutral.800', colors.neutral[900]),
                            textDecoration: 'none',
                            backgroundColor: theme('colors.neutral.100', colors.neutral[100]),

                            '@apply dark:bg-neutral-600 dark:text-neutral-200': {}
                        },
        
                        '&.active, &:active': {
                            color: theme('colors.white', colors.white),
                            textDecoration: 'none',
                            backgroundColor: theme('variations.primary', colors.blue[500]),

                            '@apply dark:bg-blue-500 dark:text-neutral-200': {}
                        },
        
                        '&.disabled, &:disabled': {
                            color: theme('colors.neutral.500', colors.neutral[500]),
                            pointerEvents: 'none',
                            backgroundColor: 'transparent',
                            backgroundImage: 'none'
                        },
                    },
        
                    // Dropdown section headers
                    '.dropdown-header, & > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
                        display: 'block',
                        padding: '.5rem',
                        marginBottom: 0, // for use with heading elements
                        fontSize: '.875rem',
                        fontWeight: 'bold',
                        color: theme('colors.neutral.500', colors.neutral[500]),
                        whiteSpace: 'nowrap', // as with > li > a

                        '@apply dark:text-neutral-400': {},
                    },

                    // Dividers (basically an `<hr>`) within the dropdown
                    '.dropdown-divider, & > hr': {
                        height: 0,
                        margin: 'calc(.125rem / 2) 0',
                        overflow: 'hidden',
                        borderTop: `1px solid ${theme('colors.neutral.200', colors.neutral[200])}`,

                        '@apply dark:border-neutral-700': {},
                    },
        
                    // Dropdown text
                    '.dropdown-item-text': {
                        display: 'block',
                        padding: '.25rem 1rem',
                        color: theme('colors.neutral.800', colors.neutral[800]),

                        '@apply dark:text-neutral-200': {},
                    },

                    '&.show': {
                        display: 'inline-block'
                    },

                    '&.dropdown-menu-left': {
                        right: 'auto',
                        left: 0
                    },

                    '&.dropdown-menu-right': {
                        right: 0,
                        left: 'auto'
                    }
                }
            }
        })
    }
});
