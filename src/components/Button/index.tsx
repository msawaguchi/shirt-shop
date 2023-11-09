import React from "react"
import { ButtonContainer } from "../../styles/components/button"

interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
}

export function Button({children , disabled, onClick} : ButtonProps) {
    return (
        <ButtonContainer disabled={disabled} onClick={onClick}>{children}</ButtonContainer>
    )
}