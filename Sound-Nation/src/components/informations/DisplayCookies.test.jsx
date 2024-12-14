import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { DisplayCookies } from './DisplayCookies';


// Tests unitaires du composant DisplayCookies

describe('DisplayCookies component', () => {
    it('Should display the cookies information', async ()=>{
        const mockData =[{
            category: 'testCategory',
            title: 'testTitle',
            content: 'testContent'
        }]

        render( <DisplayCookies data={mockData}/>)

        await waitFor(()=>{
        const title = screen.getByText(/testTitle/i);
        const reactMardown = screen.getByText(/testContent/i);
        expect(title).toBeInTheDocument();
        expect(reactMardown).toBeInTheDocument();
        })
    })
});

