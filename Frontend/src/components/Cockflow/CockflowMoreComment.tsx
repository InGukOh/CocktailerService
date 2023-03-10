import { CommentStyle, P50B1 } from './style';

export const CockflowMoreComment = ({ content }: any) => {
    return (
        <P50B1>
            <CommentStyle readOnly={true}>{content}</CommentStyle>
        </P50B1>
    );
};
