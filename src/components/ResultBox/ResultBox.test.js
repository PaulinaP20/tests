import { render, screen, cleanup} from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

    describe('Component ResultBox', () => {
        it ('should render without crashing', () => {
            render(<ResultBox from='PLN' to='USD' amount={100} />);
        })
        it ('should render proper info about conversion when PLN->USD', () => {

            const testCases = [
                { from: 'PLN', to: 'USD', amount: '145', expected:'PLN 145.00 = $41.43' },
                { from: 'PLN', to: 'USD', amount: '657', expected:'PLN 657.00 = $187.71' },
                { from: 'PLN', to: 'PLN', amount: '123', expected: 'PLN 123.00 = PLN 123.00' },
                { from: 'USD', to: 'PLN', amount: '22', expected:'$22.00 = PLN 77.00' },
                { from: 'USD', to: 'PLN', amount: '310', expected:'$310.00 = PLN 1,085.00' },
                { from: 'USD', to: 'USD', amount: '500',expected: '$500.00 = $500.00' },
              ];

            for(const {from,to, amount,expected} of testCases){
                render(<ResultBox from={from} to={to} amount= {parseInt(amount)} />)
                const output=screen.getByTestId('output');

                expect(output).toHaveTextContent(expected)

                cleanup();

            }
        })
        it ('should render "wrong value..." if value<0', () => {
            render(<ResultBox from='PLN' to='USD' amount= {parseInt('-120')} />)

            const output=screen.getByTestId('output');

            expect(output).toHaveTextContent('Wrong value...')
        });
    })