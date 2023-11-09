import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',

    '.show': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1,
    },

    '.hide': {
        display: 'none',
        zIndex: 0,
    },

})

export const Header = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    a: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 6,
        border: 'none',
        background: '#202024',
        cursor: 'pointer',

    }
})

export const Counter = styled('div', {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28,
    borderRadius: '50%',
    background:'$green500',
    color: 'white',
    fontSize: '12px',
    fontWeight: 700,
    marginTop:'-3.75rem',
    marginLeft: '2rem',
    border: '4px solid $gray900'
})


export const ShowCart = styled('div', {
    background: '$gray800',
    width: '30rem',
    height: '100vh',
    position: 'absolute',
    right: 0,
    boxShadow: '10px 0 30px 20px rgb(27 27 27)',
    padding: '3rem',

    'button:hover' : {
        cursor: 'pointer',
    },

    div: {
        display: 'flex',
        flexDirection: 'column',

        '.close-button' : {
            display: 'flex',
            width: 32,
            background: 'transparent',
            border: 'none',
            alignSelf: 'end',
        },
    },
 
    h2: {
        margin: '2rem 0',
    },

    ul: {
        listStyleType: 'none',

        li: {
            padding: '0.50rem 0',
            marginBottom: '1.5rem',
            height: '5.875rem',

            div: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginLeft: '1.25rem',

                a : {
                    color: '$green300',
                    fontWeight: 700,
                    marginTop: 8,
                }
            }
        }
    },
})

export const CartResume = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    
    p: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
       
        strong : {
            marginTop: '1rem',
            fontSize: '22px',
        }
    },

    '& > p:nth-of-type(2)': {
        marginBottom: '3.5rem',
    }
})