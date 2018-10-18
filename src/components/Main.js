import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import { DataViewContainer } from "./DataViewContainer";

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: 201939
        }
    }

    componentDidMount() {
        const { playerId } = nba.findPlayer('Stephen Curry');

        nba.stats.playerInfo({PlayerID: playerId}).then(
            (info) => {
                console.log(info);
                const playerInfo = {
                    ...info.commonPlayerInfo[0],
                    ...info.playerHeadlineStats[0]
                };

                this.setState({
                    playerInfo
                });
            }
        );
    }

    render() {
        return (
          <div className="main">
            <Profile playerInfo={this.state.playerInfo}/>
            <DataViewContainer playerId={this.state.playerInfo.playerId}/>
          </div>
        );
    }
}