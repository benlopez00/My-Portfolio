import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex min-h-screen">
			<main className="flex-1 overflow-y-auto p-8">
				<div className="grid grid-cols-10 grid-rows-10 gap-4 h-screen">
					<div className="relative min-h-[200px] bg-white border border-gray-200 rounded-lg">
						<div className="relative w-full h-full">
							<Image src="/placeholder.svg" alt="Architecture" layout="fill" objectFit="cover" />
						</div>
					</div>
					<div className="bg-white border border-gray-200 rounded-lg p-4">
						<p>*my resume (wip)</p>
						<p>read.cv</p>
					</div>
					<div className="bg-[#d4b982] rounded-lg p-4">
						<p>Designed</p>
						<p>in Hamburg.</p>
						<p>Germany.</p>
					</div>
					<div className="relative min-h-[200px] bg-white border border-gray-200 rounded-lg">
						<div className="relative w-full h-full">
							<Image src="/placeholder.svg" alt="Denim" layout="fill" objectFit="cover" />
						</div>
					</div>
					<div className="relative min-h-[200px] bg-white border border-gray-200 rounded-lg">
						<div className="relative w-full h-full">
							<Image src="/placeholder.svg" alt="Street scene" layout="fill" objectFit="cover" />
						</div>
					</div>
					<div className="relative min-h-[200px] bg-white border border-gray-200 rounded-lg">
						<div className="relative w-full h-full">
							<Image src="/placeholder.svg" alt="Map of Hamburg" layout="fill" objectFit="cover" />
						</div>
					</div>
					<div className="bg-white border border-gray-200 rounded-lg p-4">
						<p>*personal widget</p>
						<p>project for KWGT</p>
						<p>reddit.com</p>
					</div>
					<div className="col-span-2 bg-white border border-gray-200 rounded-lg p-4">
						<p>*what I listen too</p>
						<p>327 songs</p>
						<button className="absolute bottom-4 right-4 bg-green-500 text-white py-1 px-4 rounded-full">Play</button>
					</div>
				</div>
			</main>
		</div>
	);
}
