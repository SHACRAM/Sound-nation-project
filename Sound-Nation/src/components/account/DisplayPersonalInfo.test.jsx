import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { DisplayPersonalInfo } from './DisplayPersonalInfo';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import userEvent from '@testing-library/user-event';

// Tests unitaires pour le composant DisplayPersonalInfo

describe('DisplayPersonalInfo component', () => {
    it('Should display the user name and email', async ()=>{

        const mockData = {
            user_name: 'testUser',
            user_email: 'test@test.com'
        };

        render(<BrowserRouter><DisplayPersonalInfo data={mockData}/></BrowserRouter>)

        const userName = screen.getByText(/Nom :/i);
        const userEmail = screen.getByText(/Email :/i);

        await waitFor(()=>{
            expect(userName).toBeInTheDocument();
            expect(userEmail).toBeInTheDocument();
        })
    })

    it('Should navigate to the good page when user click on the links', async ()=>{
        const user = userEvent.setup();
        const mockData = {
            user_name: 'testUser',
            user_email: 'test@test.com'
        };

        render(<MemoryRouter initialEntries={["/MyAccount"]}>
            <Routes>
                <Route path="/MyAccount" element={<DisplayPersonalInfo data={mockData}/>}/>
                <Route path="/ModifyMyInformation/:email" element={<div>ModifyMyInformation</div>}/>
                <Route path="/ModifyMyPassword/:email" element={<div>ModifyMyPassword</div>}/>
            </Routes>
        </MemoryRouter>)



        await user.click(screen.getByText(/Modifier mes informations/i));
        expect(screen.getByText(/ModifyMyInformation/)).toBeInTheDocument();
    })
})