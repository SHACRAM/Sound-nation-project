import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { Question } from './Question';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

// Tests unitaires sur le composant Question

describe('Question component', () => {
    it('Should display the question', async ()=>{

        const mockQuestion = 'testQuestion';
        const mockReponse = 'testReponse';

        render( <Question question={mockQuestion} reponse={mockReponse}/>)

        const question = screen.getByText(/testQuestion/i);
        expect(question).toBeInTheDocument();
    })


    it('Should display the response when the user click on the question', async ()=>{

        const mockQuestion = 'testQuestion';
        const mockReponse = 'testReponse';
        const mockIsOpen = true;

        render( <Question question={mockQuestion} reponse={mockReponse}/>)

        const question = screen.getByText(/testQuestion/i);
        fireEvent.click(question);

        await waitFor(()=>{
            const reponse = screen.getByText(/testReponse/i);
            expect(reponse).toBeInTheDocument();
        })
    })

})
