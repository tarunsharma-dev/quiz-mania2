import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { CloseIcon } from "../CustomImg";

export default function QuizRulesModal({ isOpen, setIsOpen, close }) {
	return (
		<Modal
			dialogPanelClass={"max-w-[768px]"}
			isOpen={isOpen}
			setIsOpen={setIsOpen}>
			<div className="space-y-6">
				<div className="flex justify-between items-center">
					<h3 className="text-2xl font-semibold mb-0 leading-none">
						Quiz rules
					</h3>
					<Button
						onClick={() => {
							close();
						}}
						className={
							"bg-gray-200 hover:bg-gray-300 rounded-full text-[11px] p-2.5"
						}>
						<CloseIcon />
					</Button>
				</div>
				<div className="space-y-5">
					<div className="space-y-3">
						<div className="bg-[#F3F3E9] rounded-md p-2.5">
							<h4 className="text-lg font-semibold">10-Second Timer</h4>
						</div>
						<ul className="list-disc pl-6">
							<li>Each question comes with a 10-second timer.</li>
							<li>
								If you don’t answer within the time limit, the app will
								automatically move to the next question.
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="bg-[#F3F3E9] rounded-md p-2.5">
							<h4 className="text-lg font-semibold">Manual Navigation</h4>
						</div>
						<ul className="list-disc pl-6">
							<li>
								You can navigate to the next question manually before the timer
								expires.
							</li>
							<li>
								{`Use the "Next" button to move ahead if you’re ready before the timer runs out.`}
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="bg-[#F3F3E9] rounded-md p-2.5">
							<h4 className="text-lg font-semibold">
								Final Score and Performance Message
							</h4>
						</div>
						<ul className="list-disc pl-6">
							<li>
								After all questions are answered, your final score will be
								displayed.
							</li>
							<li>
								Based on your performance, you will receive a personalized
								message:
								<ul className="list-disc pl-6">
									<li>
										Great job!: If you score <strong>above 80%</strong>.
									</li>
									<li>
										Well done!: If you score
										<strong>between 60% and 80%</strong>.
									</li>
									<li>
										Keep practicing!: If you score
										<strong>below 60%</strong>.
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Modal>
	);
}
