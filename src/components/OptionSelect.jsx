import React from "react";

function OptionSelect(props) {
	return (
		<div>
			<input
				checked={props.val === props.options}
				onChange={props.optionHandle}
				type="radio"
				id={props.options}
				className="radioBtn"
				name="answer"
				value={props.options}
			/>
			<label className={props.className} htmlFor={props.options}>
				{props.options}
			</label>
		</div>
	);
}

export default React.memo(OptionSelect);
