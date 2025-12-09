import { Switch } from "radix-ui";

const SwitchDemo = () => (
	<form>
		<div className="flex items-center">
			<label
				className="pr-[15px] text-[15px] leading-none text-brown12"
				htmlFor="airplane-mode"
			>
				English
			</label>
			<Switch.Root
				className="relative h-[25px] w-[42px] cursor-default rounded-full bg-brown8 shadow-[0_2px_10px] shadow-brown10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-brown11 data-[state=checked]:bg-brown11"
				id="airplane-mode"
			>
				<Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-brown2 shadow-[0_2px_2px] shadow-brown10 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;