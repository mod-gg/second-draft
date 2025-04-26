import { notFound } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data - in a real app, this would come from an API
const players = [
  {
    id: 1,
    name: 'Jalen Green',
    team: 'HOU',
    draftYear: 2021,
    draftPick: 2,
    age: 21,
    height: "6'4\"",
    weight: '186 lbs',
    position: 'SG',
    stats: {
      points: 19.1,
      rebounds: 4.8,
      assists: 3.4,
      fgPercentage: 42.3,
      threePointPercentage: 33.8,
      ftPercentage: 80.4,
    },
    seasonStats: [
      { season: '2021-22', points: 17.3, rebounds: 3.4, assists: 2.6, fgPercentage: 42.6 },
      { season: '2022-23', points: 22.1, rebounds: 3.7, assists: 3.7, fgPercentage: 41.6 },
      { season: '2023-24', points: 19.1, rebounds: 4.8, assists: 3.4, fgPercentage: 42.3 },
    ],
    analysis: {
      strengths: [
        'Elite athleticism and scoring ability',
        'Improving playmaking skills',
        'Strong work ethic and coachability',
      ],
      weaknesses: [
        'Inconsistent shooting efficiency',
        'Defensive lapses',
        'Decision making under pressure',
      ],
      potentialLandingSpots: ['ORL', 'SAS', 'CHA'],
    },
  },
  // Add more players as needed
];

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = players.find((p) => p.id === parseInt(params.id));

  if (!player) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{player.name}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {player.team} • {player.position} • {player.height} • {player.weight}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Drafted {player.draftYear}</p>
                <p className="text-sm text-gray-500">Pick #{player.draftPick}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Current Season Stats</h3>
                <dl className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Points</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.points}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Rebounds</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.rebounds}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Assists</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.assists}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">FG%</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.fgPercentage}%</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Shooting Splits</h3>
                <dl className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">FG%</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.fgPercentage}%</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">3P%</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.threePointPercentage}%</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">FT%</dt>
                    <dd className="text-2xl font-semibold text-gray-900">{player.stats.ftPercentage}%</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Career Progression</h3>
                <div className="mt-2 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={player.seasonStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="season" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="points" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Strengths</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {player.analysis.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Areas for Improvement</h3>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {player.analysis.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Potential Landing Spots</h3>
              <div className="mt-2 flex gap-2">
                {player.analysis.potentialLandingSpots.map((team) => (
                  <span
                    key={team}
                    className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 