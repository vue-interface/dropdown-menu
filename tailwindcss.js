const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const defaultVariations = require('@vue-interface/tailwindcss/defaultVariations');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--dropdown-menu-z-index': theme('dropdownMenu.zIndex'),
            '--dropdown-menu-min-width': theme('dropdownMenu.minWidth'),
            '--dropdown-menu-padding-y': theme('dropdownMenu.paddingY'),
            '--dropdown-menu-spacer': theme('dropdownMenu.spacer'),
            '--dropdown-menu-font-size': theme('dropdownMenu.fontSize'),
            '--dropdown-menu-color': theme('dropdownMenu.color'),
            '--dropdown-menu-background-color': theme('dropdownMenu.backgroundColor'),
            '--dropdown-menu-border-color': theme('dropdownMenu.borderColor'),
            '--dropdown-menu-border-radius': theme('dropdownMenu.borderRadius'),
            '--dropdown-menu-border-width': theme('dropdownMenu.borderWidth'),
            '--dropdown-menu-box-shadow': theme('dropdownMenu.boxShadow'),
            
            '--dropdown-menu-inner-border-radius': theme('dropdownMenu.inner.borderRadius'),

            '--dropdown-menu-divider-background-color': theme('dropdownMenu.divider.backgroundColor'),
            
            '--dropdown-menu-link-color': theme('dropdownMenu.link.color'),

            '--dropdown-menu-link-hover-color': theme('dropdownMenu.link.hover.color'),
            '--dropdown-menu-link-hover-background-color': theme('dropdownMenu.link.hover.backgroundColor'),
                
            '--dropdown-menu-link-active-color': theme('dropdownMenu.link.active.color'),
            '--dropdown-menu-link-active-background-color': theme('dropdownMenu.link.active.backgroundColor'),

            '--dropdown-menu-link-disabled-color': theme('dropdownMenu.link.disabled.color'),
            
            '--dropdown-menu-item-padding-x': theme('dropdownMenu.item.paddingX'),

            '--dropdown-menu-header-color': theme('dropdownMenu.header.color'),
            '--dropdown-menu-header-padding-y': theme('dropdownMenu.header.paddingY')
        },

        // The dropdown wrapper (`<div>`)
        '.dropup, .dropright, .dropdown, .dropleft': {
            position: 'relative'
        },

        '.dropdown-toggle': {
            whiteSpace: 'nowrap',
        },
            
        '.dropdown-toggle::after': theme('dropdownMenu.enableCarets') ? {
            display: 'inline-block',
            marginLeft: '.3em',
            verticalAlign: 'calc(.3em * .85)',
            content: '""',
            borderTop: '.3em solid',
            borderRight: '.3em solid transparent',
            borderBottom: 0,
            borderLeft: '.3em solid transparent'
        } : undefined,

        // The dropdown menu
        '.dropdown-menu': {
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: theme('dropdownMenu.zIndex'),
            display: 'none', // none by default, but block on "open" of the menu
            minWidth: theme('dropdownMenu.minWidth'),
            padding: `${theme('dropdownMenu.paddingY')} 0`,
            margin: `${theme('dropdownMenu.spacer')} 0 0`, // override default ul
            fontSize: theme('dropdownMenu.fontSize'),
            color: theme('dropdownMenu.color'),
            textAlign: 'left', // Ensures proper alignment if parent has it changed (e.g., modal footer)
            listStyle: 'none',
            backgroundColor: theme('dropdownMenu.backgroundColor'),
            backgroundClip: 'padding-box',
            border: `${theme('dropdownMenu.borderWidth')} solid ${theme('dropdownMenu.borderColor')}`,
            borderRadius: `${theme('dropdownMenu.borderRadius')}`,
            boxShadow: theme('dropdownMenu.enableShadows') ? theme('dropdownMenu.boxShadow') : undefined,

            // When enabled Popper.js, reset basic dropdown position
            // stylelint-disable-next-line no-duplicate-selectors
            '&[x-placement^="top"], &[x-placement^="right"], &[x-placement^="bottom"], &[x-placement^="left"]': {
                right: 'auto',
                bottom: 'auto'
            }
        },

        // Allow for dropdowns to go bottom up (aka, dropup-menu)
        // Just add .dropup after the standard .dropdown class and you're set.
        '.dropup .dropdown-menu': {
            top: 'auto',
            bottom: '100%',
            marginTop: 0,
            marginBottom: theme('dropdownMenu.spacer')
        },
    
        '.dropup .dropdown-toggle::after': theme('dropdownMenu.enableCarets') ? {
            display: 'inline-block',
            marginLeft: '.3em',
            verticalAlign: 'calc(.3em * .85)',
            content: '""',
            borderTop: 0,
            borderRight: '.3em solid transparent',
            borderBottom: '.3em solid',
            borderLeft: '.3em solid transparent'
        } : undefined,
        
        '.dropright .dropdown-menu': {
            top: 0,
            right: 'auto',
            left: '100%',
            marginTop: 0,
            marginLeft: theme('dropdownMenu.spacer')
        },
    
        '.dropright .dropdown-toggle::after': theme('dropdownMenu.enableCarets') ? {
            display: 'inline-block',
            marginLeft: '.3em',
            verticalAlign: 'calc(.3em * .85)',
            content: '""',
            borderTop: '.3em solid transparent',
            borderRight: 0,
            borderBottom: '.3em solid transparent',
            borderLeft: '.3em solid',
            verticalAlign: 0
        } : undefined,
        
        '.dropleft .dropdown-menu': {
            top: 0,
            right: '100%',
            left: 'auto',
            marginTop: 0,
            marginRight: theme('dropdownMenu.spacer')
        },
          
        '.dropleft .dropdown-toggle::after': {
            display: 'none'
        }, 

        '.dropleft .dropdown-toggle::before': {
            display: 'inline-block',
            marginRight: '.3em',
            verticalAlign: 'calc(.3em * .85)',
            content: '""',
            borderTop: '.3em solid transparent',
            borderLeft: 0,
            borderBottom: '.3em solid transparent',
            borderRight: '.3em solid',
            verticalAlign: 0
        },

        // Dividers (basically an `<hr>`) within the dropdown
        '.dropdown-divider': {
            height: 0,
            margin: `calc(${theme('dropdownMenu.spacer')} / 2) 0`,
            overflow: 'hidden',
            borderTop: `1px solid ${theme('dropdownMenu.divider.backgroundColor')}`,
        },

        // Links, buttons, and more within the dropdown menu
        //
        // `<button>`-specific styles are denoted with `// For <button>s`
        '.dropdown-item': {
            display: 'block',
            width: '100%', // For `<button>`s
            padding: `${theme('dropdownMenu.item.paddingY')} ${theme('dropdownMenu.item.paddingX')}`,
            clear: 'both',
            fontWeight: 'normal',
            color: theme('dropdownMenu.link.color'),
            textAlign: 'inherit', // For `<button>`s
            textDecoration: 'none',
            whiteSpace: 'nowrap', // prevent links from randomly breaking onto new lines
            backgroundColor: 'transparent', // For `<button>`s
            border: 0, // For `<button>`s
        },
    
        '.dropdown-item:hover, .dropdown-item:focus': {
            color: theme('dropdownMenu.link.hover.color'),
            textDecoration: 'none',
            backgroundColor: theme('dropdownMenu.link.hover.backgroundColor')
        },
        
        '.dropdown-item.active, .dropdown-item:active': {
            color: theme('dropdownMenu.link.active.color'),
            textDecoration: 'none',
            backgroundColor: theme('dropdownMenu.link.active.backgroundColor')
        },
        
        '.dropdown-item.disabled, .dropdown-item:disabled': {
            color: theme('dropdownMenu.link.disabled.color'),
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            backgroundImage: 'none'
        },
        
        '.dropdown-menu.show': {
            display: 'block'
        },
        
        // Dropdown section headers
        '.dropdown-header': {
            display: 'block',
            padding: `${theme('dropdownMenu.paddingY')} ${theme('dropdownMenu.item.paddingX')}`,
            marginBottom: 0, // for use with heading elements
            fontSize: '.875rem',
            color: theme('dropdownMenu.header.color'),
            whiteSpace: 'nowrap' // as with > li > a
        },
        
        // Dropdown text
        '.dropdown-item-text': {
            display: 'block',
            padding: `${theme('dropdownMenu.item.paddingY')} ${theme('dropdownMenu.item.paddingX')}`,
            color: theme('dropdownMenu.link.color'),
        },

        '.dropdown-menu-left': {
            right: 'auto',
            left: 0
        },

        '.dropdown-menu-right': {
            right: 0,
            left: 'auto'
        }
    };

    if(theme('dropdownMenu.paddingY') === 0) {
        component['.dropdown-item']['&:first-child'] = {
            borderTopLeftRadius: theme('dropdownMenu.inner.borderRadius'),
            borderTopRightRadius: theme('dropdownMenu.inner.borderRadius'),
        };

        component['.dropdown-item']['&:last-child'] = {
            borderBottomLeftRadius: theme('dropdownMenu.inner.borderRadius'),
            borderBottomRightRadius: theme('dropdownMenu.inner.borderRadius'),
        };
    }

    addComponents(component);
}, {
    theme: {
        dropdownMenu: theme => ({
            enableShadows: true,
            enableCarets: true,
            zIndex: 1000,
            minWidth: '10rem',
            paddingY: '.5rem',
            spacer: '.125rem',
            fontSize: '1rem',
            color: 'inherit',
            backgroundColor: theme('colors.white', colors.white),
            borderColor: Color(theme('colors.black', colors.black)).fade(.85),
            borderRadius: '.25rem',
            borderWidth: '1px',
            boxShadow: `0 .5rem 1rem ${Color(theme('colors.black', colors.black)).fade(.85)}`,
            
            inner: {
                borderRadius: 'calc(.25rem - 1px)'
            },
            
            divider: {
                backgroundColor: theme('colors.gray.100', colors.gray[100]),
            },

            link: {
                color: theme('colors.gray.800', colors.gray[800]),
                
                hover: {
                    color: Color(theme('colors.gray.800', colors.gray[800])).darken(.5).hex(),
                    backgroundColor: theme('colors.gray.100', colors.gray[100])
                },

                active: {
                    color: theme('colors.white', colors.white),
                    backgroundColor: theme('interface.variations.primary', defaultVariations.primary),
                },

                disabled: {
                    color: theme('colors.gray.500', colors.gray[500])
                }
            },

            item: {
                paddingY: '.25rem',
                paddingX: '1rem',
            },

            header: {
                color: theme('colors.gray.500', colors.gray[500]),
                paddingY: '.5rem'
            }
        })
    }
});