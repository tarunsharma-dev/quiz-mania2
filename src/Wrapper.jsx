import Header from "./components/Header";

export default function Wrapper({ children, removeHeader = false }) {
	return (
		<>
			<div className="w-full h-full min-h-[100svh] bg-[#F3F3E9]">
				{removeHeader ? null : <Header />}

				<div className="flex justify-center items-center w-full h-full min-h-[calc(100svh-70px)] ">
					<div className="max-w-[1440px] w-full h-full flex items-center p-4">
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
