module.exports = {
    outputStyle: 'scss',
    columns: 12,
    offset: '20px',
    mobileFirst: true,
    container: {
        maxWidth: '1170px',
        fields: '12px'
    },
    breakPoints: {
        lg: {
            width: '1200px',
            fields: '20px'
        },
        md: {
            width: '992px',
            fields: '0px'
        },
        sm: {
            width: '768px',
            fields: '0px'
        },
        xs: {
            width: '576px'
        }
    },
};