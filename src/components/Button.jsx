// import React from "react";

import { Link } from "react-router-dom";

export default function Button(props) {
	return (
		<button
			className={`bg-color-primary disabled:bg-pink-300 py-2 px-4 rounded-lg disabled:hover:bg-pink-400 transition duration-300 ${
				props.className ? props.className : "text-white"
			}`}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
}
export function LinkButton(props) {
	return (
		<Link
			className={`bg-color-primary disabled:bg-pink-300 py-2 px-4 rounded-lg disabled:hover:bg-pink-400 transition duration-300 ${
				props.className ? props.className : "text-white"
			}`}
			to={props.to}
			disabled={props.disabled}
			onClick={props.onClick}>
			{props.children}
		</Link>
	);
}
