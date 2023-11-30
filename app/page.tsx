'use client';
import { Character } from '@/components/Character';
import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function Page() {
	const [pageIndex, setPageIndex] = useState(1);

	const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people?page=${pageIndex}`, fetcher);
	if (data) {
		return (
			<main>
				{data &&
					data.results.map((item: any) => {
						console.log(typeof item);
						return <Character key={item.name} character={item} />;
					})}

				{data.previous ? (
					<button
						onClick={() => {
							setPageIndex(pageIndex - 1);
						}}
					>
						Previous page
					</button>
				) : null}
				{data.next ? (
					<button
						onClick={() => {
							setPageIndex(pageIndex + 1);
						}}
					>
						Next page
					</button>
				) : null}
			</main>
		);
	}

	if (error) {
		return <h1>Error fetching data. Please refresh the page.</h1>;
	}

	return <h1>Fetching data...</h1>;
}
