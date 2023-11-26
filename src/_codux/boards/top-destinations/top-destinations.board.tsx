import { createBoard } from '@wixc3/react-board';
import { TopDestinations } from '../../../components/top-destinations/top-destinations';

export default createBoard({
    name: 'TopDestinations',
    Board: () => <TopDestinations />,
    isSnippet: true,
});
