import Stripe from "stripe";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import axios from 'axios';

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products";
import { stripe } from "../../lib/stripe";
// import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { Button } from "../../components/Button";

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        description: string
        defaultPriceId: string
    }
}

export default function Product({ product }:ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    // const { isFallback } = useRouter()

    // if (isFallback) {
    //     return (<span>carregando..</span>)
    // }

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            setIsCreatingCheckoutSession(false)
            //datadog, sentry (observability)
            alert("failed, please try again later.")
        }
    }

    return (
        <>
            <Head>
                <title>{product.name} | shirt shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" /> 
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>
                    <Button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>buy now</Button>            
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_Ou2MtnYLaOxDG7' }}
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id:string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price
        
    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 24 //24 hours
    }
}