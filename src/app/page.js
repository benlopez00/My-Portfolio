'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react"
import { Car, Divide, FileText, MapPin, Music } from "lucide-react"
import Image from "next/image"

export default function Component() {
	return (
		<div className="min-h-screen bg-white p-2 w-screen flex flex-col items-center">
			<div className="grid w-10/12 grid-cols-8 gap-1">
					<Card className="col-span-1 aspect-[1/1] bg-red-400">
						<CardBody className="text-center">
							<Typography variant="h3">
								Hola
							</Typography>
						</CardBody>
					</Card>
					<Card className="col-span-3 aspect-[3/1] bg-green-400">
						<CardBody className="text-center">
							<Typography variant="h3">
								Hola
							</Typography>
						</CardBody>
					</Card>
					<Card className="col-span-4 aspect-[1/1] bg-blue-400">
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