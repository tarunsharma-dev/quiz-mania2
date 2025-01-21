import React, { useState } from "react";
import Wrapper from "../Wrapper";
import { Logo } from "../CustomImg";
import Button from "../components/Button";
import Form from "../components/Form";
import QuizRulesModal from "../components/QuizRulesModal";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(false);
	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}
	return (
		<>
			<Wrapper>
				<div className="w-full flex justify-center">
					<div className="h-full  max-w-[768px] space-y-8 w-full">
						<div>
							<h1 className="text-[26px] sm:text-[48px] lg:text-[64px] font-medium leading-tight md:leading-[80.64px] flex items-center justify-center gap-4">
								Welcome to{" "}
								<span className="text-color-primary font-extralight">
									QUIZ<span className="font-semibold">Mania</span>
								</span>
							</h1>
						</div>
						<div className="w-full max-w-[700px] md:px-6 space-y-8">
							<div className="bg-[#D9D9D94D] p-3.5 rounded-lg">
								<h5 className="text-[20px]">
									Please read all the rules about this quiz before you start.
								</h5>
								<Button
									className={
										"text-color-primary text-[20px] font-medium bg-transparent px-0"
									}
									onClick={() => {
										open();
									}}>
									Quiz Rules
								</Button>
							</div>
							<div>
								<Form />
							</div>
						</div>
					</div>
					<QuizRulesModal isOpen={isOpen} setIsOpen={setIsOpen} close={close} />
				</div>
			</Wrapper>
		</>
	);
}
