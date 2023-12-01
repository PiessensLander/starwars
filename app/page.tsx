'use client';
import { Character } from '@/components/Character';
import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'react-feather';
import { PuffLoader } from 'react-spinners';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function CharactersPage() {
	const [pageIndex, setPageIndex] = useState(1);

	const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people?page=${pageIndex}`, fetcher);
	if (data) {
		return (
			<main>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-12 gap-4'>
						{data &&
							data.results.map((item: any) => {
								return <Character key={item.name} character={item} />;
							})}
					</div>
					<div className='flex justify-center gap-4'>
						{data.previous ? (
							<button
								onClick={() => {
									setPageIndex(pageIndex - 1);
								}}
								className='hover:-translate-x-1 duration-300'
							>
								<ArrowLeft />
							</button>
						) : null}
						{data.next ? (
							<button
								onClick={() => {
									setPageIndex(pageIndex + 1);
								}}
								className='hover:translate-x-1 duration-300'
							>
								<ArrowRight />
							</button>
						) : null}
					</div>
				</div>
			</main>
		);
	}

	if (error) {
		return <h1>Error fetching data. Please refresh the page.</h1>;
	}

	return (
		<div className='fixed h-full w-full flex flex-col items-center justify-center'>
			<PuffLoader color='#FFE81F' speedMultiplier={0.75} />
			<p className='text-neutral-500'>Loading...</p>
		</div>
	);
}
