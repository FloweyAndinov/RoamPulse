import { createBoard } from '@wixc3/react-board';
import { OurJourney } from 'src/components/our-journey/our-journey';

export default createBoard({
    name: 'OurJourney',
    Board: () => <OurJourney />,
    isSnippet: true,
});
