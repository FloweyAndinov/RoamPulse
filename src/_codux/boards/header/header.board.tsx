import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'header',
    Board: () => (
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1011
    }
});
