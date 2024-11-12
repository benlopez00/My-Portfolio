'use client';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import { Car, Divide, FileText, MapPin, Music } from "lucide-react";
import Image from "next/image";

export default function Component() {
	return (
		<div className="min-h-screen p-2 w-screen flex flex-col items-center gap-1.5" style={{backgroundColor: 'rgb(247, 242, 242)'}}>
			<div className="w-full h-10">
				<div className="flex flex-row justify-around">
					<div>						
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
					<div>						
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
					<div>
						<Button size="sm" variant="text"><Image src="/spain-svgrepo-com.svg" alt="Español" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/united-kingdom-uk-svgrepo-com.svg" alt="English" width={22} height={22}/></Button>
						<Button size="sm" variant="text"><Image src="/germany-svgrepo-com.svg" alt="Deutsch" width={22} height={22}/></Button>
					</div>
				</div>
			</div>
			<div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(5, 250px)', gridAutoRows: '250px' }}>
				<Card className="col-span-1 aspect-[1/1] bg-blue-400 card">
					<img src="/Big_Ben.jpg" alt="Big Ben" className="w-full h-full object-cover card" />
				</Card>
				<Card className="w-full h-full row-span-2 bg-green-400 card">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="card col-span-2 row-span-2 w-full h-full bg-white flex items-center p-3">
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
				<Card className="col-span-1 aspect-[1/1] bg-blue-400 card">
					<CardBody className="text-center">
						<Typography variant="h3">
							Hola
						</Typography>
					</CardBody>
				</Card>
				<Card className="w-full h-full row-span-2 bg-green-400 card">
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