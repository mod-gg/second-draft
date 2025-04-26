export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900">About NBA Second Draft</h1>
            
            <div className="mt-6 prose prose-indigo max-w-none">
              <p>
                The concept of the "second draft" in the NBA refers to players who were highly drafted
                (first-round picks) but haven't quite lived up to their potential with their current teams.
                These players aren't necessarily busts, but they might be better suited for different
                systems or roles.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-gray-900">What Makes a Second Draft Candidate?</h2>
              <p>
                A second draft candidate typically has several key characteristics:
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Drafted in the first round, often in the lottery</li>
                <li>Shown flashes of potential but hasn't consistently produced</li>
                <li>May be in a situation that doesn't maximize their skills</li>
                <li>Has room for growth and development</li>
                <li>Could benefit from a change in environment or role</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-gray-900">Why Track Second Draft Candidates?</h2>
              <p>
                Identifying second draft candidates is valuable for several reasons:
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Helps teams find undervalued talent</li>
                <li>Identifies potential trade targets</li>
                <li>Highlights players who could thrive in different systems</li>
                <li>Provides insight into player development and team fit</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-gray-900">How We Evaluate Players</h2>
              <p>
                Our evaluation process considers multiple factors:
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Statistical performance and trends</li>
                <li>Team context and role</li>
                <li>Skill development and potential</li>
                <li>Physical tools and athleticism</li>
                <li>Team needs and potential landing spots</li>
              </ul>

              <h2 className="mt-8 text-xl font-semibold text-gray-900">Notable Second Draft Success Stories</h2>
              <p>
                Some of the most successful second draft players in NBA history include:
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Victor Oladipo (ORL → IND)</li>
                <li>Domantas Sabonis (OKC → IND)</li>
                <li>De'Aaron Fox (SAC → Continued development)</li>
                <li>Jaylen Brown (BOS → Continued development)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 