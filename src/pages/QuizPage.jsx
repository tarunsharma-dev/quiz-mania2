import React from "react";
import Wrapper from "../Wrapper";
import ProgressBarStatus from "../components/ProgressBarStatus";
import QuizForm from "../components/QuizForm";
import ButtonControl from "../components/ButtonControl";

export default function QuizPage() {
	return (
		<Wrapper>
			<div className="h-full w-full flex justify-center">
				<div className="max-w-[968px] w-full space-y-8">
					<ProgressBarStatus />
					<QuizForm />
					<ButtonControl />
				</div>
			</div>
		</Wrapper>
	);
}
