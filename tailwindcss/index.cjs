const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
// const variations = require('@vue-interface/variant/tailwindcss/variations');

module.exports = plugin(function({ addComponents, theme }) {
    // if(theme('dropdownMenu.paddingY') === 0) {
    //     component['.dropdown-item']['&:first-child'] = {
    //         borderTopLeftRadius: theme('dropdownMenu.inner.borderRadius'),
    //         borderTopRightRadius: theme('dropdownMenu.inner.borderRadius'),
    //     };

    //     component['.dropdown-item']['&:last-child'] = {
    //         borderBottomLeftRadius: theme('dropdownMenu.inner.borderRadius'),
    //         borderBottomRightRadius: theme('dropdownMenu.inner.borderRadius'),
    //     };
    // }

    addComponents(theme('dropdownMenu.css'));
    addComponents({
        '.btn-dropdown': theme('dropdownMenu.css')
    })
}, {
    theme: {
        dropdownMenu: theme => ({
            css: {
                // The dropdown menu
                '.dropdown-menu, .DropdownMenu': {
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: 1000,
                    display: 'none', // none by default, but block on "open" of the menu
                    minWidth: '10rem',
                    padding: '.5rem 0',
                    // margin: `${theme('dropdownMenu.spacer')} 0 0`, // override default ul
                    fontSize: '1rem',
                    color: 'inherit',
                    textAlign: 'left', // Ensures proper alignment if parent has it changed (e.g., modal footer)
                    listStyle: 'none',
                    backgroundColor: colors.white,
                    backgroundClip: 'padding-box',
                    border: `1px solid ${colors.neutral[400]}`,
                    borderRadius: '.25rem',
                    boxShadow: `0 .25rem 1rem rgba(0, 0, 0, .5)`,

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
                    '.dropdown-item, & > :not(.dropdown-header, .dropdown-item-text, .dropdown-item-plain)': {
                        display: 'block',
                        width: '100%', // For `<button>`s
                        padding: '.25rem 1rem',
                        clear: 'both',
                        fontWeight: 'normal',
                        color: theme('colors.gray.800', colors.gray[800]),
                        textAlign: 'inherit', // For `<button>`s
                        textDecoration: 'none',
                        whiteSpace: 'nowrap', // prevent links from randomly breaking onto new lines
                        backgroundColor: 'transparent', // For `<button>`s
                        border: 0, // For `<button>`s

                        '&:hover, &:focus': {
                            color: theme('colors.gray.800', colors.gray[900]),
                            textDecoration: 'none',
                            backgroundColor: theme('colors.gray.100', colors.gray[100])
                        },
        
                        '&.active, &:active': {
                            color: theme('colors.white', colors.white),
                            textDecoration: 'none',
                            backgroundColor: theme('variations.primary', colors.blue[500])
                        },
        
                        '&.disabled, &:disabled': {
                            color: theme('colors.gray.500', colors.gray[500]),
                            pointerEvents: 'none',
                            backgroundColor: 'transparent',
                            backgroundImage: 'none'
                        },
                    },
        
                    // Dropdown section headers
                    '.dropdown-header': {
                        display: 'block',
                        padding: '.5rem',
                        marginBottom: 0, // for use with heading elements
                        fontSize: '.875rem',
                        fontWeight: 'bold',
                        color: theme('colors.gray.500', colors.gray[500]),
                        whiteSpace: 'nowrap' // as with > li > a
                    },

                    // Dividers (basically an `<hr>`) within the dropdown
                    '.dropdown-divider': {
                        height: 0,
                        margin: 'calc(.125rem / 2) 0',
                        overflow: 'hidden',
                        borderTop: `1px solid ${theme('colors.gray.200', colors.gray[200])}`,
                    },
        
                    // Dropdown text
                    '.dropdown-item-text': {
                        display: 'block',
                        padding: '.25rem 1rem',
                        color: theme('colors.gray.800', colors.gray[800]),
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
                    },

                    // '.dropdown-toggle': {
                    //     whiteSpace: 'nowrap',
                    // },
                
                    // '.dropdown-toggle::after': {
                    //     display: 'inline-block',
                    //     marginLeft: '.3em',
                    //     verticalAlign: 'calc(.3em * .85)',
                    //     content: '""',
                    //     borderTop: '.3em solid',
                    //     borderRight: '.3em solid transparent',
                    //     borderBottom: 0,
                    //     borderLeft: '.3em solid transparent'
                    // },
    
                    // Allow for dropdowns to go bottom up (aka, dropup-menu)
                    // Just add .dropup after the standard .dropdown class and you're set.
                    '.dropup &': {
                        top: 'auto',
                        bottom: '100%',
                        marginTop: 0,
                    },
    
                    // '.dropup .dropdown-toggle::after': {
                    //     display: 'inline-block',
                    //     marginLeft: '.3em',
                    //     verticalAlign: 'calc(.3em * .85)',
                    //     content: '""',
                    //     borderTop: 0,
                    //     borderRight: '.3em solid transparent',
                    //     borderBottom: '.3em solid',
                    //     borderLeft: '.3em solid transparent'
                    // },
        
                    '.dropright &': {
                        top: 0,
                        right: 'auto',
                        left: '100%',
                        marginTop: 0,
                    },
    
                    // '.dropright .dropdown-toggle::after': {
                    //     display: 'inline-block',
                    //     marginLeft: '.3em',
                    //     verticalAlign: 'calc(.3em * .85)',
                    //     content: '""',
                    //     borderTop: '.3em solid transparent',
                    //     borderRight: 0,
                    //     borderBottom: '.3em solid transparent',
                    //     borderLeft: '.3em solid',
                    //     verticalAlign: 0
                    // },
        
                    '.dropleft &': {
                        top: 0,
                        right: '100%',
                        left: 'auto',
                        marginTop: 0,
                    },
          
                    // '.dropleft .dropdown-toggle::after': {
                    //     display: 'none'
                    // }, 

                    // '.dropleft .dropdown-toggle::before': {
                    //     display: 'inline-block',
                    //     marginRight: '.3em',
                    //     verticalAlign: 'calc(.3em * .85)',
                    //     content: '""',
                    //     borderTop: '.3em solid transparent',
                    //     borderLeft: 0,
                    //     borderBottom: '.3em solid transparent',
                    //     borderRight: '.3em solid',
                    //     verticalAlign: 0
                    // },
                }
            }
        })
    }
});