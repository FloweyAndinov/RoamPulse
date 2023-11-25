import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <div>
        <h1 className={''}>Heading 1</h1>
    </div>,
});
