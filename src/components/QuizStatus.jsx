import React, { useMemo } from "react";
import { QuizFailed, QuizSuccess } from "../CustomImg";
import Button from "./Button";

export default function QuizStatus({ count = 1, totalCount = 10 }) {
	const failedCard = useMemo(() => {
		return (
			<div className="text-center flex justify-center flex-col items-center space-y-8">
				<div className="text-center flex justify-center flex-col items-center space-y-4">
					<div>
						<QuizFailed className={"w-[96px] h-[96px]"} />
					</div>
					<p className="text-xl font-medium">
						You successfully completed the Quiz and holds
					</p>
					<h1 className="text-[40px] tracking-[0.6em] uppercase font-light">
						Keep practicing!
					</h1>
				</div>
				<div className="w-[219px] h-[219px] flex flex-col justify-center items-center gap-4 border border-[#D2829A] p-5 rounded-full">
					<span className="text-2xl text-[#373052] font-light">Your Score</span>
					<span className="text-[#AF9B06] text-5xl font-medium">32%</span>
				</div>
			</div>
		);
	}, []);

	const successCard = useMemo(() => {
		return (
			<>
				<div className="text-center flex justify-center flex-col items-center space-y-8">
					<div className="text-center flex justify-center flex-col items-center space-y-4">
						<div>
							<QuizSuccess className={"w-[96px] h-[96px]"} />
						</div>
						<h1 className="text-[40px] tracking-[0.6em] uppercase font-light">
							Congratulation
						</h1>
						<p className="text-xl font-medium">
							You successfully completed the Quiz and holds
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-2xl text-[#373052]">Your Score</span>
						<span className="text-[#06AF52] text-5xl font-medium">83%</span>
						<span className="text-4xl font-medium text-[#373052]">
							Great Job!
						</span>
					</div>
				</div>
			</>
		);
	}, []);
	const scoreCard = useMemo(() => {
		return (
			<>
				<div className="text-center flex justify-center flex-col items-center space-y-8 border border-gray-300 px-4 max-w-[442px] w-full p-3.5 rounded-md text-[24px]">
					<span className="text-xl text-[#373052] font-medium">
						Out of 10 question
					</span>
					<div className="grid grid-cols-3 text-base font-medium">
						<span>
							<span className="text-[#06AF52] pr-1 font-bold">3</span>
							Correct
						</span>
						<span>
							<span className="text-[#AF0606] pr-1 font-bold">4</span>
							Incorrect
						</span>
						<span>
							<span className="text-[#682121] pr-1 font-bold">3</span>Not
							answered
						</span>
					</div>
				</div>
			</>
		);
	}, []);
	return (
		<div>
			<div className="flex flex-col items-center space-y-10">
				{successCard}
				{/* {failedCard} */}
				{scoreCard}
				<div>
					<Button
						className={
							"bg-transparent border-2 border-color-primary text-color-primary min-w-[150px]"
						}>
						Retake Quiz
					</Button>
				</div>
			</div>
		</div>
	);
}
