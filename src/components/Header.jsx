import React from "react";
import { Logo } from "../CustomImg";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="w-full p-4  border-b border-[#D9D9D9] flex justify-center">
			<div className="w-full flex justify-between max-w-[1440px] items-center">
				<Link to={"/"}>
					<Logo className={"w-[144px] h-[23px]"} />
				</Link>
				<div>
					<div className="flex items-center gap-3">
						<span className="flex justify-center items-center text-white font-semibold w-[36px] h-[36px] bg-[#373052] rounded-full p-3.5">
							R
						</span>
						<span className="font-medium">Richard Joe Freds</span>
					</div>
				</div>
			</div>
		</div>
	);
}
