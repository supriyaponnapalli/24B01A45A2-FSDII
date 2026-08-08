let teamName: string = "Sunrisers Hyderabad";
let championshipYear: number = 2016;
let isChampion: boolean = true;

function getTeamStatus(name: string, year: number): string {
    return `${name} secured the glorious IPL trophy in ${year}.`;
}

let keyPlayers: string[] = [
    "David Warner",
    "Bhuvneshwar Kumar",
    "Shikhar Dhawan",
    "Rashid Khan"
];

const matchSummary: string = getTeamStatus(teamName, championshipYear);

console.log(matchSummary);
console.log(`Key Players: ${keyPlayers.join(", ")}`);
console.log(`Are they champions? ${isChampion ? "Yes, Orange Army!" : "No"}`);