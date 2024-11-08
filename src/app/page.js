'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react"
import { Car, Divide, FileText, MapPin, Music } from "lucide-react"
import Image from "next/image"

export default function Component() {
	return (
		<div className="min-h-screen p-2 w-screen flex flex-col items-center" style={{backgroundColor: 'rgb(247, 242, 242)'}}>
			<div className="w-full h-10">

			</div>
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(4, 280px)', gridAutoRows: '280px' }}>
				<Card className="col-span-2 w-full h-full bg-white flex items-center p-3">
					<div className="">
						<Image
							src="/perfil_Blanco.png"
							alt="Profile illustration"
							width={100}
							height={100}
							className="bg-orange-500 object-cover"
						/>
					</div>
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="w-full h-full row-span-2 bg-green-400">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-1 aspect-[1/1] bg-blue-400">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="col-span-1 aspect-[1/1] bg-blue-400">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}