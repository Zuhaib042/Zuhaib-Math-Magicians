import {  render, screen } from "@testing-library/react"
import Header from "../components/Header"

describe('Header', ()=>{
    it('should render header correctly', ()=>{
        render(<Header />)
        const homeTag = screen.getByText(/home/i);
        
        expect(homeTag).toMatchSnapshot()
     
    })
    it('should render header correctly', ()=>{
        render(<Header />)
        const calculatorTag = screen.getByRole('link', {name: 'Calculator'});
        
        expect(calculatorTag).toMatchSnapshot()
     
    })
})