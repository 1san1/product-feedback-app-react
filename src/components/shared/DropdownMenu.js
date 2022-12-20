import React, { useState } from 'react';
import { PropTypes } from "prop-types";

import DropdownMenuItem from "./DropdownMenuItem";

/*
    ? This dropdown menu determines the text of the button following the "Sort by"
    ? of SuggestionsPage and what goes into the input fields in 
    ? AddEditFeedbackPage that require a dropdown menu
*/
function DropdownMenu({ dropdownItems }) {
    const [items, setItems] = useState(dropdownItems);

    /*
        * Getting this functionality of toggling the active button took longer than
        * needed to get done, but I'm glad to get it done
    */  
    function changeSelectedButton(index) {
        const updatedDropdownItems = items.map((item, i) =>
            {
                if (i === index)
                    return ({ buttonText: item.buttonText, isSelected: true });

                else
                    return ({ buttonText: item.buttonText, isSelected: false });
            } 
        );
            
        setItems(updatedDropdownItems);
    }

    return (
        <ul className="dropdown-menu">
            {
                items.map((item, index) => 
                    <DropdownMenuItem 
                        key={ index }
                        buttonText={ item.buttonText } 
                        isSelected={ item.isSelected }
                        index={ index }
                        setActive={ changeSelectedButton }
                    />
                )
            }
        </ul>
    );
}

DropdownMenu.propTypes = { dropdownItems: PropTypes.arrayOf(PropTypes.object) };

export default DropdownMenu;