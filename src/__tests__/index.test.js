import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/Home'
import Item from '../components/Item'
import Contact from '../pages/Contact'
import ItemCount from '../components/ItemCount'

// TESTING HOME PAGE //
describe('test home', () => {
let title
    beforeEach( () => {
        render(< Home/>);
        title = screen.getByRole('heading');
    })

    test('testing Home page title', () => {
        expect(title).toBeDefined()
        expect(title).toHaveTextContent('guitarra'); 
    })

})

// TESTING CONTACT PAGE //
describe('test contact', () => {
let btn;
let title;

const mockHandler = jest.fn() /* funcion de prueba para testear el boton */

    beforeEach(() => {
        render(<Contact send={mockHandler}/>)
        btn = screen.getByRole('button') 
        title = screen.getByRole('heading') 
    })

    test('testing Contact title', () => {
        expect(title).toBeInTheDocument() 
        expect(title).toHaveTextContent('Contáctate con nosotros') 
    })

    test('testing Contact button', () => {
        expect(btn).toBeInTheDocument() 
        fireEvent.click(btn); 
        expect(mockHandler).toHaveBeenCalledTimes(1) 
    })
})

// TESTING ITEM COMPONENT //
describe('test item', () => {
let img;
let link;
    beforeEach(() => {
        render(<Item />)
        img = screen.getByRole('img')
        link = screen.getByText('+ Info')
    })

    test('testing Item img', () => {
        expect(img).toBeInTheDocument() 
    })
    test('testing Item link', () => {
        expect(link).toBeInTheDocument() 
    })
})

// TESTING ITEM COUNT COMPONENT //
describe('test item count', () => {
let btnAdd;
let btnIncrement;
let btnDecrement;

const mockHandler = jest.fn() 

    beforeEach(() => {
        render(<ItemCount onAdd={mockHandler}/>)
        btnAdd = screen.getByText('Agregar al carrito');
        btnIncrement = screen.getByText('+');
        btnDecrement = screen.getByText('-');
    })

    test('testing ItemCount btnAdd', () => {

        expect(btnAdd).toBeInTheDocument();
        fireEvent.click(btnAdd);
        fireEvent.click(btnAdd);
        expect(mockHandler).toHaveBeenCalledTimes(2);

    })

    test('testing ItemCount btn increment', () => {

        expect(btnIncrement).toBeInTheDocument();
        fireEvent.click(btnIncrement);
 
    })

    test('testing ItemCount btn decrement', () => {

        expect(btnDecrement).toBeInTheDocument();
        fireEvent.click(btnDecrement);
 
    })
 
})


