'use client';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import { PuffLoader } from 'react-spinners';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function FilmDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/films/${params.id}`, fetcher);

	if (data) {
		return (
			<div className='flex flex-col mb-6 md:flex-row'>
				<Image src={`/images/films/${params.id}.jpeg`} height={1000} width={250} alt='Movie Poster' className='h-screen min-h-[500px] w-auto relative ' />
				<div className='container mx-auto px-6'>
					<h1 className='text-2xl text-yellow-300 font-bold  mb-4'>{data.title}</h1>
					<p>{data.opening_crawl}</p>
				</div>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className='fixed h-full w-full flex flex-col items-center justify-center'>
				<PuffLoader color='#FFE81F' speedMultiplier={0.75} />
				<p className='text-neutral-500'>Loading...</p>
			</div>
		);
	}

	if (error) {
		return <h1>There was an error loading the data. Please refresh the page.</h1>;
	}
}
