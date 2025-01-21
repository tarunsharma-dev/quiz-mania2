import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
	const [fullName, setFullName] = useState("");
	const [selectedTopic, setSelectedTopic] = useState("");
	const navigate = useNavigate();

	return (
		<div>
			<form>
				<div className="mb-4">
					<label
						htmlFor="fullName"
						className="block text-sm font-medium text-gray-700 mb-2">
						Full name
					</label>
					<input
						type="text"
						id="fullName"
						className="w-full px-3 py-2 border border-gray-200 rounded-md focus-within:border-color-primary focus:border-color-primary focus-visible:border-color-primary outline-none bg-transparent"
						placeholder="Full name"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div className="mb-6">
					<p className="block text-sm font-medium text-gray-700 mb-2">
						Please select topic to continue
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{[
							"Javascript Basic",
							"Angular Basic",
							"React.js Advance",
							"Flutter",
						].map((topic) => (
							<label
								key={topic}
								className={`flex items-center p-3 gap-2 border rounded-lg cursor-pointer hover:bg-gray-100 ${
									selectedTopic === topic ? "border-color-primary" : ""
								}`}>
								{selectedTopic === topic ? (
									<svg
										width="18px"
										height="18px"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<rect width="24" height="24" rx="12" fill="#B92B5D" />
										<path
											d="M7 12.75L10.125 15.875L17 9"
											stroke="white"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<span className="border w-[18px] h-[18px] rounded-full"></span>
								)}
								<input
									type="radio"
									name="topic"
									value={topic}
									checked={selectedTopic === topic}
									onChange={() => setSelectedTopic(topic)}
									className="mr-3 hidden"
								/>
								<span className="text-sm">{topic}</span>
							</label>
						))}
					</div>
				</div>
				<button
					type="submit"
					disabled={fullName === "" && selectedTopic === ""}
					onClick={(e) => {
						e.preventDefault();
						navigate("quiz");
					}}
					className="w-full bg-color-primary disabled:bg-pink-300 text-white py-2 px-4 rounded-md disabled:hover:bg-pink-400 transition duration-300">
					Start Quiz
				</button>
			</form>
		</div>
	);
}
