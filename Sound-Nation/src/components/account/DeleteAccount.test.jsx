import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { DeleteAccount } from './DeleteAccount';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

describe('DeleteAccount component', () => {
    it('Should display the delete message if the user click on the delete button', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
            }};


            const mockHandleDelete = vi.fn();
            const mockDeleteMessage = 'Le compte a été supprimé avec succès'

            render( <AuthContext.Provider value={mockAuthContext}><DeleteAccount messageDeleteAccount={mockDeleteMessage}  handleDelete={mockHandleDelete} /></AuthContext.Provider>)

            const deleteButton = screen.getByText(/Oui/i);
            fireEvent.click(deleteButton);

            await waitFor(()=>{
                expect(mockHandleDelete).toHaveBeenCalled();
                expect(screen.getByText(mockDeleteMessage)).toBeInTheDocument();
            })
    })

    it('Should call the handleDeleteDiv function when the user click on the no button', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
            }};

            const mockHandleDelete = vi.fn();
            const mockDeleteMessage = 'Le compte a été supprimé avec succès'
            const mockHandleDeleteDiv = vi.fn();

            render( <AuthContext.Provider value={mockAuthContext}><DeleteAccount messageDeleteAccount={mockDeleteMessage}  handleDelete={mockHandleDelete} handleDeleteDiv={mockHandleDeleteDiv} /></AuthContext.Provider>)

            const noButton = screen.getByText(/Non/i);
            fireEvent.click(noButton);

            await waitFor(()=>{
                expect(mockHandleDeleteDiv).toHaveBeenCalled();
            })

    })

    it('Should use the good css when the confirmation message is positive', async ()=>{
        const mockAuthContext = {
            connectInformation: {
            user_name: 'testUser',
            user_email: 'test@test.com',
            user_role: 'user'
            }};


            const mockHandleDelete = vi.fn();
            const mockDeleteMessage = 'Le compte a été supprimé avec succès'
            const mockHandleDeleteDiv = vi.fn();
            const mockDeleteComplete = 'bg-green-500 text-black'
            const mockIsSuccess = true;

            render( <AuthContext.Provider value={mockAuthContext}><DeleteAccount messageDeleteAccount={mockDeleteMessage}  handleDelete={mockHandleDelete} handleDeleteDiv={mockHandleDeleteDiv} isSuccess={mockIsSuccess} /></AuthContext.Provider>)

            const deleteButton = screen.getByText(/Oui/i);
            fireEvent.click(deleteButton);

            await waitFor(()=>{
                const deleteMessage = screen.getByText(mockDeleteMessage);
                expect(mockHandleDelete).toHaveBeenCalled();
                expect(deleteMessage).toBeInTheDocument();
                expect(deleteMessage).toHaveClass(mockDeleteComplete)
            })

    })



});