module.exports = {
    content: [
        './Pages/**/*.cshtml',    
        './Views/**/*.cshtml',    
        './wwwroot/**/*.html',    
    ],
    theme: {
        extend: {
            colors: {
                //Login & _LayoutLogin
                'backgroud-color': '#e9ecef',
                'color-logo': '#495057',
                'custom-card': '#ffffff',
                'custom-bottom-card-header': '#e2e2e2',
                'custom-card-footer': '#f7f7f7',
                'color-link': '#007bff',
                'color-link-hover': '#0069d9',
                'border-color-link-hover': '#0062cc',
                'color-text-card': '#666666',
                'ring-focus': '#80bdff',

                //Layout & Crud
                "header": "#828180",
                "hover-header" : "rgba(0, 0, 0, 0.7)",
                "aside": "#343a40",
                'header-border': 'rgba(222, 226, 230, 0.2)',
                'aside-icon': "#c2c7d1",
                "aside-shadow": '4px 0 10px rgba(0, 0, 0, 0.5)',
                "custom-border": 'rgba(242, 242, 242, 0.8)'
              },
            width: {
                //Login & _LayoutLogin
                '360': '360px',  
                '-116': '-116px',

                //Layout & Crud
            },
            fontSize: {
                //Login & _LayoutLogin
                '2.1': '2.1rem',

                //Layout & Crud
                '26': '26px'
            },
            spacing: {
                //Login & _LayoutLogin
                '0.9': '0.9rem',  

                //Layout & Crud
            },
            boxShadow: {
                //Login & _LayoutLogin
                'custom-shadow': '0 0 1px rgba(0, 0, 0, .125), 0 1px 3px rgba(0, 0, 0, .2)',

                //Layout & Crud
              },
            fontFamily: {
            'source-sans': ['"Source Sans Pro"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
            }
        },
    },
    plugins: [],
}
