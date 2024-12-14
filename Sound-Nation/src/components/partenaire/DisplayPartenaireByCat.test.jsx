import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { DisplayPartenaireByCat } from './DisplayPartenaireByCat';


describe('DisplayPartenairesByCat component', () => {
    it('Should display informations about the partenaire', async ()=>{
        const mockData = [
            {
                partner_category: 'testCat',
                partner_image_path: 'testPath',
                partner_image_alt: 'testAlt',
                partner_name: 'testName',
                partner_site: 'testSite'
            }
        ]

        render( <DisplayPartenaireByCat cat={'testCat'} data={mockData}/>)

        await waitFor(()=>{
            const partenaireName = screen.getByText(/testName/i);
            const partenaireImageAlt = screen.getByAltText(/testAlt/i);
            const partenaireSite = screen.getByText(/Nous découvrir/i);
            expect(partenaireName).toBeInTheDocument();
            expect(partenaireSite).toBeInTheDocument();
            expect(partenaireImageAlt).toBeInTheDocument();
        })
    })


});