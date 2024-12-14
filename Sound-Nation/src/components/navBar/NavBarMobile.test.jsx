import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { NavBarMobile } from './NavBarMobile';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



describe('NavBarMobile component', () => {
    it('Should display the disconect button if the user is connected', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
        }};
        const mockUpdateMenu = vi.fn();

        const {container} = render( <AuthContext.Provider value={mockAuthContext}><BrowserRouter><NavBarMobile updateMenu={mockUpdateMenu}/> </BrowserRouter></AuthContext.Provider>)
        
        const burgerMenu = container.querySelector('.burger-menu');
        fireEvent.click(burgerMenu);

        await waitFor(()=>{
            const disconnectButton = screen.getByText(/Se déconnecter/i);
            expect(disconnectButton).toBeInTheDocument();
        })
    })

    it('Should open the mobile menu when the user click on the burger menu', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
        }};
        const mockUpdateMenu = vi.fn();

        const {container} = render( <AuthContext.Provider value={mockAuthContext}><BrowserRouter><NavBarMobile updateMenu={mockUpdateMenu}/> </BrowserRouter></AuthContext.Provider>)
        
        const burgerMenu = container.querySelector('.burger-menu');
        fireEvent.click(burgerMenu);

        expect(mockUpdateMenu).toHaveBeenCalled();

        await waitFor(()=>{
            const programmeLink = screen.getByText(/Programmation/i);
            const informationLink = screen.getByText(/Informations/i);
            expect(programmeLink).toBeInTheDocument();
            expect(informationLink).toBeInTheDocument();
        })
    })

    it('Should disconnect the user when he click on log out button', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
        }};
        const mockUpdateMenu = vi.fn();
        const mockHandleLogOut = vi.fn();

        const {container} = render( <AuthContext.Provider value={mockAuthContext}><BrowserRouter><NavBarMobile updateMenu={mockUpdateMenu} handleLogOut={mockHandleLogOut}/> </BrowserRouter></AuthContext.Provider>)
        
        const burgerMenu = container.querySelector('.burger-menu');
        fireEvent.click(burgerMenu);

        await waitFor(()=>{
            const disconnectButton = screen.getByText(/Se déconnecter/i);
            fireEvent.click(disconnectButton);
            expect(mockHandleLogOut).toHaveBeenCalled();
        })
    })

    it('Should display the connect button if the user is not connected', async ()=>{
        const mockAuthContext = {
            connectInformation: null
        };
        
        const mockUpdateMenu = vi.fn();

        const {container} = render( <AuthContext.Provider value={mockAuthContext} ><BrowserRouter><NavBarMobile updateMenu={mockUpdateMenu}/> </BrowserRouter></AuthContext.Provider>)
        
        const burgerMenu = container.querySelector('.burger-menu');
        fireEvent.click(burgerMenu);

        await waitFor(()=>{
            const connectButton = screen.getByText(/Se connecter/i);
            expect(connectButton).toBeInTheDocument();
        })
    })
});

