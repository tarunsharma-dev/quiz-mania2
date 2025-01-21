import { useNavigate } from "react-router-dom";
import Button, { LinkButton } from "./Button";

export default function ButtonControl(props) {
	const navigate = useNavigate();
	return (
		<>
			<div className="flex items-center gap-3">
				<div>
					{/* <Button
						disbled={props.nextDisable}
						// onclick={props.nextHandle}
						onclick={() => {
							navigate("result");
						}}
						className={"px-7 text-white"}>
						Next
					</Button> */}
					<LinkButton
						disbled={props.nextDisable}
						// onclick={props.nextHandle}
						onclick={() => {
							navigate("result");
						}}
						to={"/result"}
						className={"px-7 text-white"}>
						Next
					</LinkButton>
				</div>
				{props.lastKey ? (
					<Button onclick={props.finishHandle} btnName="Finish">
						Finish
					</Button>
				) : (
					<Button
						// onclick={props.skipHandle}
						onclick={() => {
							navigate("result");
						}}
						className={"px-7 bg-transparent text-neutral-800"}>
						Skip this question
					</Button>
				)}
			</div>
		</>
	);
}
