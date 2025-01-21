import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Button from "./Button";
import { CloseIcon } from "../CustomImg";

export default function Modal({
	dialogPanelClass,
	isOpen,
	setIsOpen,
	children,
}) {
	return (
		<>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={() => {
					setIsOpen(false);
				}}
				__demoMode>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 bg-black/40">
						<DialogPanel
							transition
							className={`w-full  rounded-lg bg-white p-6 relative duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 ${
								dialogPanelClass ? dialogPanelClass : "max-w-md"
							}`}>
							<div>{children}</div>
							{/* <div className="absolute top-3 right-3">
								<Button
									className={
										"bg-gray-200 hover:bg-gray-300 rounded-full text-xs p-2.5"
									}>
									<CloseIcon />
								</Button>
							</div>
							<DialogTitle
								as="h3"
								className="text-base/7 font-medium text-white">
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-white/50">
								Your payment has been successfully submitted. We’ve sent you an
								email with all of the details of your order.
							</p>
							<div className="mt-4">
								<Button
									className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
									onClick={close}>
									Got it, thanks!
								</Button>
							</div> */}
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
