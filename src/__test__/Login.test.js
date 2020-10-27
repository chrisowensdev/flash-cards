import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import Login from '../components/Login';

describe('<NewMessageForm />', () => {
    let getByTestId;

    afterEach(cleanup);

    describe('clicking the send button', () => {
        let sendHandler;

        beforeEach(async () => {
            sendHandler = jest.fn().mockName('sendHandler');
            ({ getByTestId } = render(<Login onSend={sendHandler} />));

            fireEvent.change(getByTestId('messageText'), {
                target: {
                    value: 'New Message',
                },
            });

            fireEvent.change(getByTestId('password'), {
                target: {
                    value: 'New password',
                },
            });

            fireEvent.click(getByTestId('sendButton'));
        });

        it('clears the text field', () => {
            expect(getByTestId('messageText').value).toEqual('');
        });

        it('call the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New Message');
        });

        it('password', () => {
            expect(sendHandler).toHaveBeenCalledWith('New Message');
        });
    });
});
