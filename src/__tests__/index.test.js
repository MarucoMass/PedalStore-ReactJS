import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/Home'
import ItemListContainer from '../pages/ItemListContainer'
import Item from '../components/Item'
import ItemList from '../components/ItemList'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'

// TESTING HOME PAGE //
describe('test home', () => {
let title
    beforeEach( () => {
        render(< Home/>);
        title = screen.getByRole('heading');
    })

    test('testing Home page title', () => {
        expect(title).toBeDefined()
        expect(title).toHaveTextContent('guitarra'); /* busca si tiene esa palabra */
    })

})

// TESTING CONTACT PAGE //
describe('test contact', () => {
let btn;
let title;

const mockHandler = jest.fn() /* funcion de prueba para testear el boton */

    beforeEach(() => {
        render(<Contact send={mockHandler}/>)
        btn = screen.getByRole('button') /* busco al boton */
        title = screen.getByRole('heading') /* busco al h1 */
    })

    test('testing Contact title', () => {
        expect(title).toBeInTheDocument() /* para saber si existe el h1 en el form*/ 
        expect(title).toHaveTextContent('Contáctate con nosotros') /* me fijo si contiene ese texto */
    })

    test('testing Contact button', () => {
        expect(btn).toBeInTheDocument() /* para saber si existe el boton en el form*/ 
        fireEvent.click(btn); /* disparo el click */
        expect(mockHandler).toHaveBeenCalledTimes(1) /* Le pregunto si fue llamado al menos 1 vez */
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
        expect(img).toBeInTheDocument() /* me fijo si existe la img */
    })
    test('testing Item link', () => {
        expect(link).toBeInTheDocument() /* me fijo si existe el link */
    })
})


