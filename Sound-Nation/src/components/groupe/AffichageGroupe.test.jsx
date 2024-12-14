import {describe, it, expect, vi} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { AffichageGroupe } from './AffichageGroupe';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { VignetteGroupe } from '../VignetteGroupe';
import { mock } from 'node:test';
import { connect } from 'node:http2';

// tests unitaires pour le composant AffichageGroupe

describe('AffichageGroupe component', () => {
    it('Should receive data and send it to the VignetteGroupe component', async ()=>{
        const mockAuthContext = {
            connectInformation: {
                user_name: 'testUser',
                user_email: 'test@test.com',
                user_role: 'user'}
        }

        vi.mock("../VignetteGroupe", () => ({
            __esModule: true,
            VignetteGroupe: vi.fn(() => <div data-testid="mock-vignette" />),
          }));
        const mockReceivedData = [{id: 1,
            groupe_name: "test",
            groupe_hour: 18,
            groupe_date: 'vendredi 22 juillet',
            groupe_scene: 1,
            groupe_image_name: 'test.jpg',
            groupe_image_path: '/test.jpg',
            groupe_image_alt: 'test',
            groupe_bio: 'test',}];

        const mockData = 
            {
                id: 1,
                groupe_name: "test",
                groupe_hour: 18,
                groupe_date: 'vendredi 22 juillet',
                groupe_scene: 1,
                groupe_image_name: 'test.jpg',
                groupe_image_path: '/test.jpg',
                groupe_image_alt: 'test',
                groupe_bio: 'test',
            }
        ;

        render (<AuthContext.Provider value={mockAuthContext}><BrowserRouter><AffichageGroupe data={mockReceivedData}/></BrowserRouter></AuthContext.Provider>)

        await waitFor(() => {
            expect(VignetteGroupe).toHaveBeenCalledWith(
              expect.objectContaining({
                groupe: expect.objectContaining(mockReceivedData[0]),
              }),
              expect.anything()
            );
          });
    })

})