import { Character } from '@/components/Character';

async function getCharacters() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page() {
	const data = await getCharacters();

	if (data) {
		console.log(data);
	}

	return (
		<main>
			{data.results.map((item: any) => {
				console.log(typeof item);
				return <Character key={item.name} character={item} />;
			})}
		</main>
	);
}
