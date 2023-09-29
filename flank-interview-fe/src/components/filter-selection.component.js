import "./../styles/filter-selection.styles.scss";

function FilterSelection({ options, selected, setSelected }) {
    const handleButtonClick = (value) => {
        // init a new state that copies the current one
        let newSelected = [...selected];

        // check if it was "All" was clicked, and update accordingly based on its current state
        if (value === null) {
            if (newSelected.includes(value)) {
                newSelected = [];
            } else {
                newSelected = [value];
            }
        } else {
            // if a new button is clicked, but "All" was already clicked, remove "All" from state
            if (newSelected.includes(null)) {
                newSelected = [value];
            }
            // if the button is already clicked, remove it
            else if (newSelected.includes(value)) {
                newSelected = newSelected.filter((val) => val !== value);
            } else {
                // get the most recently selected value if there is one
                const lastSelectedValue = newSelected[newSelected.length - 1];

                // if there is a selected value, we want to select everything in between
                if (lastSelectedValue !== undefined) {
                    // find the indicies of the vals in the options array
                    // THIS IS BASED ON THE ASSUMPTION THE OPTIONS ARR WILL ALWAYS BE IN-ORDER
                    const startIndex = options.findIndex((option) => option.value === lastSelectedValue);
                    const endIndex = options.findIndex((option) => option.value === value);

                    // loop thru the options arr within our range and add everything to selected that is not already present
                    // since we can have our range go either way, we need to use our start and end indicies accordingly
                    for (let i = Math.min(startIndex, endIndex); i <= Math.max(startIndex, endIndex); i++) {
                        if (!newSelected.includes(options[i].value)) {
                            newSelected.push(options[i].value);
                        }
                    }
                }
                // if there is no previously selected button, we just add the new one to state
                else {
                    newSelected.push(value);
                }
            }
        }
        setSelected(newSelected);
    };
    return (
        <div class="options filter-selection">
            {options.map((option) => (
                <button
                    type="button"
                    key={option.value}
                    onClick={() => handleButtonClick(option.value)}
                    className={`filter-button ${selected.includes(option.value) ? "filter-button-selected" : ""}`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default FilterSelection;
