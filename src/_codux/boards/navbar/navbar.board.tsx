import { createBoard } from '@wixc3/react-board';
import { NavbarComp } from '../../../components/navbar/navbarcomp';

export default createBoard({
    name: 'Navbar',
    Board: () => <NavbarComp/>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 974,
        windowHeight: 639
    }
});
