import { PropTypes } from "prop-types";
import React, { useState } from 'react';

import CommentReplyForm from "./CommentReplyForm";

function FeedbackItemCommentReply({ replyText, personReplying, replyingTo }) {
    
    // * Same thing like in FeedbackItemComment with the user's image

    const personReplyingFirstName = personReplying.name.split(' ')[0].toLowerCase();

    const [shouldShowCommentForm, setShouldShowCommentForm] = useState(false);

    function toggleCommentReplyForm(isMenuOpen) {
        if (isMenuOpen)
            setShouldShowCommentForm(false);
        
        else
            setShouldShowCommentForm(true);
    }

    return ( 
        <li className="feedback-detail__comment--reply">
            <div className="comment__img-container">
                <img 
                    src={ require(`../../../assets/user-images/image-${personReplyingFirstName}.jpg`) } alt={`${personReplyingFirstName} headshot`} 
                    className="comment__user-img" 
                />
            </div>

            <div className="comment__header">
                <div className="comment__user-info">
                    <h3 className="comment__user-name">
                        { personReplying.name }
                    </h3>
                    
                    <p className="comment__user-handle">
                        { `@${personReplying.username}` }
                    </p>
                </div>
                
                <div className="comment__reply-container">
                    <button 
                        type="button" 
                        className="comment__reply-button button"
                        onClick={ () => toggleCommentReplyForm(false) }
                    >
                        Reply
                    </button>
                </div>
            </div>
            
            <div className="comment__message-container">
                <p className="comment__message">
                    <span className="comment__replying-to">{`@${replyingTo} `}</span>
                    { `${replyText}` }
                </p>
            </div>

            <CommentReplyForm 
                shouldShow={ shouldShowCommentForm }
                toggleCommentReplyForm={ toggleCommentReplyForm }
            />
        </li>
    );
}

FeedbackItemCommentReply.propTypes = { 
    replyText: PropTypes.string.isRequired,
    personReplying: PropTypes.object.isRequired,
    replyingTo: PropTypes.string.isRequired
 }

export default FeedbackItemCommentReply;