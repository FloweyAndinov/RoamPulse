import { createBoard } from '@wixc3/react-board';
import { CommunityReactions } from '../../../components/community-reactions/community-reactions';

export default createBoard({
    name: 'CommunityReactions',
    Board: () => <CommunityReactions />,
    isSnippet: true,
});
