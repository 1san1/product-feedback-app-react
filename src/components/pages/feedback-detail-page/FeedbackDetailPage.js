import { PropTypes } from "prop-types";

import GoBackHeader from "../../shared/GoBackHeader";
import FeedbackDetailMain from "./FeedbackDetailMain";

function FeedbackDetailPage({ sharedProps, toggleEditPage }) {
    return ( 
        <div className="feedback-detail container">
            <GoBackHeader 
                hasSecondaryButton={ true }
                secButtonText={ 'Edit Feedback' }
                secButtonClassName={ 'button--edit-feedback' }
                toggleEditPage={ toggleEditPage }
            />

            <FeedbackDetailMain 
                feedbackItems={ sharedProps.dbFeedbackItems } 
                feedbackItemDetailToShow={ sharedProps.dbFeedbackItemToShow }
            />
        </div>
    );
}

FeedbackDetailPage.propTypes = { 
    sharedProps: PropTypes.object,
    toggleEditPage: PropTypes.func 
};

export default FeedbackDetailPage;