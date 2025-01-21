import React, { useState } from "react";

export default function QuizForm() {
	const [selectedTopic, setSelectedTopic] = useState("");
	return (
		<div>
			<form>
				<div className="mb-8">
					<ol className="list-decimal pl-6 text-xl">
						<li>
							Which method can be used to round a number to the nearest integer
							in JavaScript?
						</li>
					</ol>
				</div>
				<div className="mb-6">
					<div className="space-y-4">
						{[
							"This method rounds a number up to the nearest integer, regardless of its decimal part.",
							"This method rounds a number down to the nearest integer, ignoring the decimal part.",
							" This method rounds a number to the nearest integer based on its decimal value.",
							"This method generates a random number between 0 and 1, without rounding.",
						].map((topic) => (
							<label
								key={topic}
								className={`flex items-center p-4 gap-2 border rounded-lg cursor-pointer hover:bg-gray-100 ${
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
								<span className="text-base">{topic}</span>
							</label>
						))}
					</div>
				</div>
			</form>
		</div>
	);
}
