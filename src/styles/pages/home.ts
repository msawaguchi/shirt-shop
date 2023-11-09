import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    // gap: '3rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,

    svg: {
        width: 68,
        height: '100%',
        position: 'absolute',
        cursor: 'pointer',

        '&.arrow--disabled': {
            display: 'none'
        }
    },

    '& > svg:nth-of-type(1)': {
        top: '50%',
        transform:'translate(0%, -50%)',
        background: 'linear-gradient(to left, rgba(255, 0, 0, 0), rgb(44 40 40))'
    },

    '& > svg:nth-of-type(2)': {
        top: '50%',
        right: '0',
        transform:'translate(0%, -50%)',
        background: 'linear-gradient(to right, rgba(255, 0, 0, 0), rgb(44 40 40))'
    },

    
})

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    minWidth: 500,
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
       objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(118%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
        }
    },

    '&:hover' : {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})