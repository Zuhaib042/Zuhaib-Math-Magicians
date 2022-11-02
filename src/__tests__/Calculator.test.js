import { fireEvent, render, screen } from "@testing-library/react"
import Calculator from "../components/Calculator"

describe('Testing Calculator UI',()=>{
    it('should render 0 when "AC" button is clicked', ()=>{
        render(<Calculator />)
        const buttonElement = screen.getByRole('button', {name: '1'})
        const inputElement = screen.getByTestId('total')
    
        expect(buttonElement).toMatchSnapshot()
        expect(inputElement).toMatchSnapshot()
    } )
})