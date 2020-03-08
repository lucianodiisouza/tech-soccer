import React from 'react'
import { getLeagueTable, getNextMatches } from '../../api/api';

import './Brasileirao.css';

const dateTimeFormat = Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});

const formatDate = date => dateTimeFormat.format(new Date());

const Brasileirao = () => {
    const [loading, setLoading] = React.useState(false);
    const [leagueTable, setLeagueTable] = React.useState();
    const [nextMatches, setNextMatches] = React.useState();

    React.useEffect(() => {
        const leagueId = 2013;
        const load = async () => {
            setLoading(true);
            const promises = [getLeagueTable(leagueId), getNextMatches(leagueId)];
            const [leagueTable, nextMatches] = await Promise.all(promises);
            setLeagueTable(leagueTable.standings[0].table);
            setNextMatches(nextMatches.matches);
            setLoading(false)
        };
        load();
    }, []);
    return (
        <div id="brasileirao">
            {loading && <h1>Carregando</h1>}
            {!loading && leagueTable && (
                <>
                    <h1>Tabela</h1>
                    <div>
                        <table className="stripe-vertical">
                            <thead>
                                <tr>
                                    <th />
                                    <th />
                                    <th>P</th>
                                    <th>J</th>
                                    <th>V</th>
                                    <th>E</th>
                                    <th>D</th>
                                    <th>GP</th>
                                    <th>GC</th>
                                    <th>SG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leagueTable.map(r => (
                                    <tr key={r.position}>
                                        <td>{r.position}</td>
                                        <td>{r.team.name}</td>
                                        <td>{r.points}</td>
                                        <td>{r.playedGames}</td>
                                        <td>{r.won}</td>
                                        <td>{r.draw}</td>
                                        <td>{r.lost}</td>
                                        <td>{r.goalsFor}</td>
                                        <td>{r.goalsAgainst}</td>
                                        <td>{r.goalDifference}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1>Próximas Partidas</h1>
                    <div>
                        <table className="stripe-horizontal">
                            <thead>
                                <tr>
                                    <th>Times</th>
                                    <th>Horário</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    nextMatches.map(m => (
                                        <tr key={m.id.toString()}>
                                            <td>{`${m.homeTeam.name} X ${m.awayTeam.name}`}</td>
                                        <td>{formatDate(m.utcDate)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};
export default Brasileirao;