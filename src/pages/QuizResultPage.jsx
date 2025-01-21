import React from "react";
import Wrapper from "../Wrapper";
import QuizStatus from "../components/QuizStatus";

export default function QuizStatusPage() {
	return (
		<Wrapper>
			<div className="h-full w-full flex justify-center">
				<div className="max-w-[968px] w-full space-y-8">
					<QuizStatus />
				</div>
			</div>
		</Wrapper>
	);
}
