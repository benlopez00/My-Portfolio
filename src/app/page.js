'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react"
import { Car, FileText, MapPin, Music } from "lucide-react"
import Image from "next/image"

export default function Component() {
return (
	<div className="min-h-screen bg-white p-6 md:p-12">
	{/* Header Section */}
	<Card>
		<CardBody>
			<div className="relative h-48 w-48 overflow-hidden rounded-full">
				<Image
					src="/perfil_Blanco.png"
					alt="Profile illustration"
					width={192}
					height={192}
					className="bg-orange-500 object-cover"
				/>
			</div>
			<div className="space-y-4">
			<h1 className="text-5xl font-bold tracking-tight">RICHARD</h1>
			<div className="space-y-1 text-gray-600">
				<p>born in Hamburg</p>
				<p>design enthusiast</p>
				<p>studying industrial design in kiel</p>
				<p>wip</p>
				<p className="italic">le monde est à vous</p>
			</div>
			</div>
		</CardBody>
	</Card>

	{/* Grid Layout */}
	<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{/* Resume Card */}
		<Card className="overflow-hidden">
			<CardBody className="p-6">
				<div className="flex items-center gap-4">
					<FileText className="h-6 w-6" />
					<div>
						<p className="font-medium">*my resume (wip)</p>
						<p className="text-sm text-gray-500">read.cv</p>
					</div>
				</div>
			</CardBody>
		</Card>

		{/* Location Badge */}
		<Card className="bg-amber-100">
		<CardBody className="p-6">
			<p className="text-lg font-medium">Designed</p>
			<p className="text-lg font-medium">in Hamburg.</p>
			<p className="text-lg font-medium">Germany.</p>
		</CardBody>
		</Card>

		{/* Architecture Image */}
		<Card className="overflow-hidden">
		<Image
			src="/placeholder.svg?height=300&width=400"
			alt="Architecture"
			width={400}
			height={300}
			className="h-full w-full object-cover"
		/>
		</Card>

		{/* Map Card */}
		<Card className="overflow-hidden">
		<CardBody className="p-0">
			<div className="relative h-[300px]">
			<Image
				src="/placeholder.svg?height=300&width=400"
				alt="Hamburg Map"
				width={400}
				height={300}
				className="h-full w-full object-cover"
			/>
			<div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
				<MapPin className="h-4 w-4" />
				<span className="text-sm">Hamburg, Germany</span>
			</div>
			</div>
		</CardBody>
		</Card>

		{/* Reddit Widget */}
		<Card>
		<CardBody className="p-6">
			<div className="flex items-center gap-4">
			<Image
				src="/placeholder.svg?height=40&width=40"
				alt="Reddit"
				width={40}
				height={40}
				className="rounded-lg"
			/>
			<div>
				<p className="font-medium">*personal widget</p>
				<p className="text-sm text-gray-500">project for KWGT</p>
				<p className="text-sm text-gray-500">reddit.com</p>
			</div>
			</div>
		</CardBody>
		</Card>

		{/* Spotify Widget */}
		<Card className="bg-black text-white">
		<CardBody className="p-6">
			<div className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				<Music className="h-8 w-8" />
				<div>
				<p className="font-medium">*what I listen too</p>
				<p className="text-sm text-gray-400">327 songs</p>
				</div>
			</div>
			<Button variant="outline" className="rounded-full bg-green-500 text-white hover:bg-green-600">
				Play
			</Button>
			</div>
		</CardBody>
		</Card>
	</div>

	{/* Action Buttons */}
	<div className="mt-12 flex gap-4">
		<Button variant="outline">Create Your Bento</Button>
		<Button variant="ghost">Log In</Button>
	</div>
	</div>
)
}