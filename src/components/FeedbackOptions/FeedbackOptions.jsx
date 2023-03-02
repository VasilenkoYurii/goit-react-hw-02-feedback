import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Container>
      <Button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </Button>
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
