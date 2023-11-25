import { createBoard } from '@wixc3/react-board';
import { Features } from '../../../components/features/features';

export default createBoard({
    name: 'Features',
    Board: () => <Features />,
    isSnippet: true,
});
