import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Welcome from '../components/Welcome';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders welcome container', () => {
    act(() => {
        render(<Welcome />, container);
    });
    expect(container.textContent).toBe('Welcome');

    act(() => {
        render(<Welcome name='Jenny' />, container);
    });
    expect(container.textContent).toBe('Welcome, Jenny');

    act(() => {
        render(<Welcome name='Margaret' />, container);
    });
    expect(container.textContent).toBe('Welcome, Margaret');
});
