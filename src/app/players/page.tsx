import Link from 'next/link';

// Mock data - in a real app, this would come from an API
const players = [
  {
    id: 1,
    name: 'Jalen Green',
    team: 'HOU',
    draftYear: 2021,
    draftPick: 2,
    age: 21,
    stats: {
      points: 19.1,
      rebounds: 4.8,
      assists: 3.4,
      fgPercentage: 42.3,
    },
  },
  {
    id: 2,
    name: 'James Wiseman',
    team: 'DET',
    draftYear: 2020,
    draftPick: 2,
    age: 22,
    stats: {
      points: 7.3,
      rebounds: 5.1,
      assists: 0.7,
      fgPercentage: 61.4,
    },
  },
  {
    id: 3,
    name: 'Jaden McDaniels',
    team: 'MIN',
    draftYear: 2020,
    draftPick: 28,
    age: 23,
    stats: {
      points: 10.5,
      rebounds: 3.1,
      assists: 1.3,
      fgPercentage: 48.0,
    },
  },
];

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold leading-6 text-gray-900">Second Draft Candidates</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of first-round picks who could thrive in new environments.
            </p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Player
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Team
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Draft Year
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Pick
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Age
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        PPG
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        RPG
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        APG
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        FG%
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {players.map((player) => (
                      <tr key={player.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <Link href={`/players/${player.id}`} className="hover:text-indigo-600">
                            {player.name}
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.team}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.draftYear}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.draftPick}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.age}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.stats.points}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.stats.rebounds}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.stats.assists}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{player.stats.fgPercentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 