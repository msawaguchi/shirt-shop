import Stripe from "stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { useState } from "react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home( {products}:HomeProps ) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
    
    slides: {
      perView: 3,
      spacing: 48,
      perView: "auto",
    }
  })

  return (
    <>
      <Head>
          <title>shirt shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider"> 
        {products.map(product => {
        return (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt={""}/>
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        )
      })}
       {  (
          <>
            <Arrow
              left
              onClick={(e: { stopPropagation: () => any; }) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: { stopPropagation: () => any; }) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current?.track.details.slides.length - 2
              }
            />
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response  = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 24
  }
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      { props.left && ( <CaretLeft/> ) }
      { !props.left && ( <CaretRight /> ) }
    </svg>
  )
}