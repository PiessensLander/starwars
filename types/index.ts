export type CharacterType = {
	character: CharacterData;
};

export type CharacterData = {
	birthYear: string;
	eyeColor: string;
	films: string[];
	gender: string;
	hairColor: string;
	height: string;
	homeworld: string;
	mass: string;
	name: string;
	skinColor: string;
	created: Date;
	edited: Date;
	species: string[];
	starships: string[];
	url: string;
	vehicles: string[];
};

export type FilmTagProps = {
	film: string;
};
